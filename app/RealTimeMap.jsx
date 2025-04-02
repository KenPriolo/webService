import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig"; // Source Firestore (AdvertisementManagement)
import { tabletDb } from "../firebaseTabletConfig"; // Target Firestore (tablet-service)
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";

// Function to calculate the distance between two lat/lng points using Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c * 1000; // Returns the distance in meters
};

const RealTimeMap = () => {
  const [LeafletComponents, setLeafletComponents] = useState(null);
  const [geofences, setGeofences] = useState([]); // Store geofences from Firestore
  const [taxis, setTaxis] = useState([]); // Store taxis with geofence info
  const [currentAd, setCurrentAd] = useState(null); // Track the current ad being played
  const [isInsideGeofence, setIsInsideGeofence] = useState(false); // Track if the taxi is inside geofence
  const [videoEnded, setVideoEnded] = useState(false); // Track if the video has finished

  // Dynamically load Leaflet components
  useEffect(() => {
    if (typeof window !== "undefined") {
      Promise.all([import("leaflet"), import("leaflet/dist/leaflet.css"), import("react-leaflet")]).then(
        ([L, _, RL]) => {
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

          const MapUpdater = ({ position }) => {
            const map = useMap();
            useEffect(() => {
              if (position && position.length) {
                map.flyTo(position, 11, { animate: true, duration: 1.5 });
              }
            }, [position, map]);
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
        }
      );
    }
  }, []);

  // 🔴 Real-time geofence listener
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "ads"), (snapshot) => {
      const fetchedGeofences = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGeofences(fetchedGeofences);
    });
    return () => unsubscribe();
  }, []);

  // 🔵 Real-time taxi listener for each company and device
  useEffect(() => {
    const unsubscribers = [];

    const setupListeners = async () => {
      const companiesSnap = await onSnapshot(collection(tabletDb, "taxiCompany"), (companies) => {
        companies.docs.forEach((companyDoc) => {
          const companyId = companyDoc.id;
          const devicesRef = collection(tabletDb, `taxiCompany/${companyId}/devices`);

          const deviceListener = onSnapshot(devicesRef, (devicesSnap) => {
            const taxiPromises = devicesSnap.docs.map(async (deviceDoc) => {
              const deviceId = deviceDoc.id;
              const basePath = `taxiCompany/${companyId}/devices/${deviceId}/location`;

              const locationRef = doc(tabletDb, `${basePath}/device_location`);
              const clientsDataRef = doc(tabletDb, `${basePath}/clients_data`);

              const unsubLoc = onSnapshot(locationRef, (locSnap) => {
                const loc = locSnap.data();
                if (loc) {
                  onSnapshot(clientsDataRef, (clientSnap) => {
                    const clientData = clientSnap.data();
                    if (clientData) {
                      // Check if the taxi is inside any geofence
                      const matchingGeofence = geofences.find((geo) => {
                        const distance = calculateDistance(
                          loc.latitude,
                          loc.longitude,
                          geo.latitude,
                          geo.longitude
                        );
                        return distance <= 500; // Check if within 500 meters
                      });

                      const geofenceAreaName = matchingGeofence
                        ? matchingGeofence.companyName
                        : clientData.geofenceAreaName || "None";

                      // Update the Firestore geofenceAreaName for this taxi
                      updateDoc(clientsDataRef, {
                        geofenceAreaName: geofenceAreaName,
                      });

                      setTaxis((prev) => {
                        const filtered = prev.filter((t) => t.id !== deviceId);
                        return [
                          ...filtered,
                          {
                            id: deviceId,
                            companyId: companyId,
                            latitude: loc.latitude,
                            longitude: loc.longitude,
                            clientsDataRef,
                            geofenceAreaName: geofenceAreaName,
                            geofenceTriggered: matchingGeofence ? true : false,
                            videoUrl: clientData.videoUrl || "",
                          },
                        ];
                      });

                      // Circle Basis - Loop Ad
                      if (matchingGeofence && !isInsideGeofence) {
                        setIsInsideGeofence(true);
                        setCurrentAd({
                          companyName: geofenceAreaName,
                          videoUrl: matchingGeofence.adUrl,
                        });
                        setVideoEnded(false);
                      } else if (!matchingGeofence && isInsideGeofence) {
                        // Exit geofence - Stop playing the ad once video ends
                        if (videoEnded) {
                          setIsInsideGeofence(false);
                          setCurrentAd(null);
                        }
                      }

                      // Venn Diagram - Detect when a new geofence is detected
                      if (matchingGeofence && matchingGeofence.companyName !== currentAd?.companyName) {
                        setCurrentAd({
                          companyName: matchingGeofence.companyName,
                          videoUrl: matchingGeofence.adUrl,
                        });
                        setVideoEnded(false); // Reset video end status for new ad
                      }
                    }
                  });
                }
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

    // Clean up listeners on unmount
    return () => unsubscribers.forEach((unsub) => unsub());
  }, [geofences, currentAd, videoEnded]);

  if (!LeafletComponents) {
    return <p>Loading map...</p>;
  }

  const { MapContainer, TileLayer, Marker, Popup, Circle, MapUpdater, carIcon, pinIcon } = LeafletComponents;
  const centerPosition = taxis[0] ? [taxis[0].latitude, taxis[0].longitude] : [14.5995, 120.9842]; // fallback to Manila

  return (
    <div style={{ width: "100%", height: "700px" }}>
      <MapContainer center={centerPosition} zoom={11} style={{ height: "650px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; OpenStreetMap contributors' />
        <MapUpdater position={centerPosition} />

        {/* Render taxis as car icons */}
        {taxis.map((taxi) => (
          <Marker key={taxi.id} position={[taxi.latitude, taxi.longitude]} icon={carIcon}>
            <Popup>
              <strong>Taxi ID:</strong> {taxi.id} <br />
              <strong>Status:</strong> {taxi.geofenceTriggered ? "Inside Geofence" : "Outside Geofence"} <br />
              <strong>Area:</strong> {taxi.geofenceAreaName || "None"} <br />
              Lat: {taxi.latitude} <br />
              Lng: {taxi.longitude}
            </Popup>
          </Marker>
        ))}

        {/* Render geofence circles + pins */}
        {geofences.map((geo) => (
          <React.Fragment key={geo.id}>
            <Circle
              center={[geo.latitude, geo.longitude]}
              radius={geo.radius || 500}
              pathOptions={{ color: "red", fillColor: "red", fillOpacity: 0.2 }}
            />
            <Marker position={[geo.latitude, geo.longitude]} icon={pinIcon}>
              <Popup>
                <strong>{geo.companyName}</strong><br />
                Address: {geo.address}<br />
                Status: {geo.contractStatus}<br />
                Expiry: {geo.expiryDate ? new Date(geo.expiryDate.seconds * 1000).toLocaleString() : "N/A"}
              </Popup>
            </Marker>
          </React.Fragment>
        ))}
      </MapContainer>

      {/* Display the current ad being played */}
      {currentAd && (
        <div className="ad-display">
          <h3>Currently Playing Ad: {currentAd.companyName}</h3>
          {/* Remove video player as requested */}
        </div>
      )}
    </div>
  );
};

export default RealTimeMap;
