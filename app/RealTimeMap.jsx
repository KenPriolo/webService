import React, { useEffect, useState, useRef } from "react";
import { db } from "../firebaseConfig";
import { tabletDb } from "../firebaseTabletConfig";
import { collection, doc, onSnapshot, updateDoc, setDoc } from "firebase/firestore";

// Calculate distance function (same as before)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 1000;
};

const RealTimeMap = () => {
  const [LeafletComponents, setLeafletComponents] = useState(null);
  const [geofences, setGeofences] = useState([]);
  const [taxis, setTaxis] = useState([]);
  const [currentAd, setCurrentAd] = useState(null);
  const [isInsideGeofence, setIsInsideGeofence] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  // Reference for map center
  const mapCenter = useRef([14.5995, 120.9842]); // Default center position

  // Load Leaflet components
  useEffect(() => {
    if (typeof window !== "undefined") {
      Promise.all([
        import("leaflet"),
        import("leaflet/dist/leaflet.css"),
        import("react-leaflet"),
      ]).then(([L, _, RL]) => {
        const { MapContainer, TileLayer, Marker, Popup, Circle, useMap } = RL;

        const carIcon = new L.Icon({
          iconUrl: "https://cdn-icons-png.flaticon.com/512/2087/2087658.png",
          iconSize: [40, 40],
          iconAnchor: [20, 40],
          popupAnchor: [0, -40],
        });

        const pinIcon = new L.Icon({
          iconUrl: "https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.6.0/dist/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [0, -41],
        });

        const MapUpdater = ({ center }) => {
          const map = useMap();
          useEffect(() => {
            if (center && center.length) {
              // Only update the center if it is different from the current center
              if (mapCenter.current[0] !== center[0] || mapCenter.current[1] !== center[1]) {
                map.flyTo(center, 11, { animate: true, duration: 1 });
                mapCenter.current = center; // Update the center reference
              }
            }
          }, [center, map]);
          return null;
        };

        setLeafletComponents({
          MapContainer,
          TileLayer,
          Marker,
          Popup,
          Circle,
          MapUpdater,
          carIcon,
          pinIcon,
          L,
        });
      });
    }
  }, []);

  // Geofence data listener
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "ads"), (snapshot) => {
      setGeofences(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  // Taxi tracking with geofence detection
  useEffect(() => {
    const unsubscribers = [];

    const setupListeners = async () => {
      const companiesSnap = onSnapshot(collection(tabletDb, "taxiCompany"), (companies) => {
        companies.docs.forEach((companyDoc) => {
          const companyId = companyDoc.id;
          const devicesRef = collection(tabletDb, `taxiCompany/${companyId}/devices`);

          const deviceListener = onSnapshot(devicesRef, (devicesSnap) => {
            devicesSnap.docs.forEach((deviceDoc) => {
              const deviceId = deviceDoc.id;
              const basePath = `taxiCompany/${companyId}/devices/${deviceId}/location`;
              const locationRef = doc(tabletDb, `${basePath}/device_location`);
              const clientsDataRef = doc(tabletDb, `${basePath}/clients_data`);

              // Initialize clients_data document if it doesn't exist
              const initializeClientData = async () => {
                try {
                  await setDoc(
                    clientsDataRef,
                    { geofenceAreaName: "", geofenceTriggered: false, videoUrl: "" }, // Set geofenceAreaName to empty string
                    { merge: true }
                  );
                } catch (error) {
                  console.error("Error initializing clients_data:", error);
                }
              };

              const unsubLoc = onSnapshot(locationRef, (locSnap) => {
                const loc = locSnap.data();
                if (!loc) return;

                const unsubClient = onSnapshot(clientsDataRef, (clientSnap) => {
                  if (!clientSnap.exists()) {
                    initializeClientData();
                    return;
                  }

                  const clientData = clientSnap.data() || {};
                  let closestGeofence = null;
                  let minDistance = Infinity;

                  geofences.forEach((geo) => {
                    const distance = calculateDistance(
                      loc.latitude,
                      loc.longitude,
                      geo.latitude,
                      geo.longitude
                    );
                    if (distance < minDistance) {
                      minDistance = distance;
                      closestGeofence = geo;
                    }
                  });

                  const isInside = Boolean(closestGeofence && minDistance <= 500); // Check if inside geofence
                  const geofenceAreaName = isInside ? closestGeofence.companyName : ""; // Empty string when outside geofence
                  const adFileUrl = isInside ? closestGeofence.adFileUrl : "";

                  // Update taxi state
                  setTaxis((prev) => {
                    const existing = prev.find((t) => t.id === deviceId);
                    if (existing && existing.geofenceAreaName === geofenceAreaName && existing.geofenceTriggered === isInside) {
                      return prev;
                    }

                    return [
                      ...prev.filter((t) => t.id !== deviceId),
                      {
                        id: deviceId,
                        companyId,
                        latitude: loc.latitude,
                        longitude: loc.longitude,
                        geofenceAreaName,
                        geofenceTriggered: isInside,
                        videoUrl: adFileUrl,
                      },
                    ];
                  });

                  // Update Firestore if values changed
                  if (
                    clientData.geofenceAreaName !== geofenceAreaName ||
                    clientData.geofenceTriggered !== isInside ||
                    (isInside && clientData.videoUrl !== adFileUrl) ||
                    (!isInside && clientData.videoUrl !== "")
                  ) {
                    updateDoc(clientsDataRef, {
                      geofenceAreaName,
                      geofenceTriggered: isInside,
                      videoUrl: isInside ? adFileUrl : "", // Empty when outside geofence
                    }).catch((error) => {
                      console.error("Error updating clients_data:", error);
                    });
                  }

                  if (isInside) {
                    if (!currentAd || currentAd.companyName !== closestGeofence.companyName) {
                      setCurrentAd({ companyName: closestGeofence.companyName, videoUrl: adFileUrl });
                      setIsInsideGeofence(true);
                      setVideoEnded(false);
                    }
                  } else if (isInsideGeofence && !isInside && videoEnded) {
                    setIsInsideGeofence(false);
                    setCurrentAd(null);
                  }
                });

                unsubscribers.push(unsubClient);
              });

              unsubscribers.push(unsubLoc);
            });
          });

          unsubscribers.push(deviceListener);
        });
      });

      unsubscribers.push(companiesSnap);
    };

    setupListeners();
    return () => unsubscribers.forEach((unsub) => unsub());
  }, [geofences, currentAd, videoEnded]);

  if (!LeafletComponents) {
    return <div className="loading-screen">Loading map...</div>;
  }

  const { MapContainer, TileLayer, Marker, Popup, Circle, MapUpdater, carIcon, pinIcon } = LeafletComponents;
  const centerPosition = taxis[0] ? [taxis[0].latitude, taxis[0].longitude] : mapCenter.current;

  return (
    <div className="map-container" style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={centerPosition} zoom={11} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
        <MapUpdater center={centerPosition} />
        {taxis.map((taxi) => (
          <Marker key={taxi.id} position={[taxi.latitude, taxi.longitude]} icon={carIcon}>
            <Popup>
              <div>
                <strong>Taxi ID:</strong> {taxi.id} <br />
                <strong>Status:</strong> {taxi.geofenceTriggered ? "INSIDE" : "OUTSIDE"} <br />
                <strong>Area:</strong> {taxi.geofenceAreaName || "No Data"} <br /> {/* Updated */}
                {taxi.videoUrl && <><strong>Playing Ad:</strong> {taxi.videoUrl.split('/').pop()}</>}
              </div>
            </Popup>
          </Marker>
        ))}
        {geofences.map((geo) => (
          <React.Fragment key={geo.id}>
            <Circle
              center={[geo.latitude, geo.longitude]}
              radius={geo.radius || 500}
              pathOptions={{
                color: "#ff0000",
                fillColor: "#ff0000",
                fillOpacity: 0.2,
              }}
            />
            <Marker position={[geo.latitude, geo.longitude]} icon={pinIcon}>
              <Popup>
                <div>
                  <h3>Cmpny Name:{geo.companyName}</h3>
                  <p>Ad File: {geo.adFileUrl?.split('/').pop() || "No Data"}</p> {/* Updated */}
                </div>
              </Popup>
            </Marker>
          </React.Fragment>
        ))}
      </MapContainer>

      {currentAd && (
        <div className="ad-display">
          <h3>Current Ad: {currentAd.companyName}</h3>
          <p>File: {currentAd.videoUrl?.split('/').pop()}</p>
          <button onClick={() => setVideoEnded(true)}>End Ad</button>
        </div>
      )}
    </div>
  );
};

export default RealTimeMap;
