import React, { useEffect, useState } from "react";

const RealTimeMap = () => {
  const [LeafletComponents, setLeafletComponents] = useState(null);
  const [position, setPosition] = useState([51.505, -0.09]); // Default location (London)

  useEffect(() => {
    if (typeof window !== "undefined") {
      Promise.all([
        import("leaflet"),
        import("leaflet/dist/leaflet.css"),
        import("react-leaflet"),
      ]).then(([L, _, RL]) => {
        const { MapContainer, TileLayer, Marker, Popup, useMap } = RL;

        const customIcon = new L.Icon({
          iconUrl: "https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.6.0/dist/images/marker-shadow.png",
          iconSize: [30, 45],
          iconAnchor: [15, 45],
        });

        const MapUpdater = ({ position }) => {
          const map = useMap();
          useEffect(() => {
            map.flyTo(position, 15, { animate: true, duration: 1.5 }); // Smooth zoom-in animation
          }, [position, map]);
          return null;
        };

        setLeafletComponents({
          L,
          MapContainer,
          TileLayer,
          Marker,
          Popup,
          useMap,
          MapUpdater,
          customIcon,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
        },
        (err) => console.error(err),
        { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, []);

  if (!LeafletComponents) {
    return <p>Loading map...</p>;
  }

  const { MapContainer, TileLayer, Marker, Popup, MapUpdater, customIcon } = LeafletComponents;

  return (
    <div style={{ width: "100%", height: "700px" }}>
      <MapContainer center={position} zoom={13} style={{ height: "650px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <MapUpdater position={position} />
        <Marker position={position} icon={customIcon}>
          <Popup>You are here</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default RealTimeMap;
