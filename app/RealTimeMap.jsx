import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig"; // Source Firestore (AdvertisementManagement)
import { tabletDb } from "../firebaseTabletConfig"; // Target Firestore (tablet-service)
import { collection, doc, onSnapshot } from "firebase/firestore";

const RealTimeMap = () => {
  const [LeafletComponents, setLeafletComponents] = useState(null);
  const [geofences, setGeofences] = useState([]);
  const [taxis, setTaxis] = useState([]);

  // Dynamically load Leaflet components
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
      });
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
                            geofenceAreaName: clientData.geofenceAreaName || "",
                            geofenceTriggered: clientData.geofenceTriggered || false,
                            videoUrl: clientData.videoUrl || "",
                          },
                        ];
                      });
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
  }, []);

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
    </div>
  );
};

export default RealTimeMap;
