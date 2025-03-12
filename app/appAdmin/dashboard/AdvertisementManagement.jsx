import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, MapPin, Calendar, BarChart2 } from "lucide-react";

export default function AdvertisementManagement() {
  const [ads, setAds] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [schedule, setSchedule] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState({ lat: 37.7749, lng: -122.4194 }); // Default: San Francisco
  const [customIcon, setCustomIcon] = useState(null);
  const [leafletReady, setLeafletReady] = useState(false);
  const [MapContainer, setMapContainer] = useState(null);
  const [TileLayer, setTileLayer] = useState(null);
  const [Marker, setMarker] = useState(null);
  const [useMapEvents, setUseMapEvents] = useState(null);
  const navigate = useNavigate();

  // ✅ Dynamically import Leaflet & React-Leaflet
  useEffect(() => {
    if (typeof window !== "undefined") {
      Promise.all([
        import("leaflet"),
        import("react-leaflet")
      ]).then(([leaflet, reactLeaflet]) => {
        setCustomIcon(
          new leaflet.Icon({
            iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
          })
        );
        // Load React-Leaflet components dynamically
        setMapContainer(reactLeaflet.MapContainer);
        setTileLayer(reactLeaflet.TileLayer);
        setMarker(reactLeaflet.Marker);
        setUseMapEvents(() => reactLeaflet.useMapEvents);
        setLeafletReady(true);
      });
    }
  }, []);

  // ✅ Geocode Address & Move Map
  const handleAddressChange = async (e) => {
    const newAddress = e.target.value;
    setAddress(newAddress);

    if (newAddress.trim().length > 3) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(newAddress)}`
        );
        const data = await response.json();

        if (data.length > 0) {
          const { lat, lon, display_name } = data[0];
          setLocation({ lat: parseFloat(lat), lng: parseFloat(lon) });
          setAddress(display_name); // ✅ Update address with full formatted name
        }
      } catch (error) {
        console.error("Geocoding error:", error);
      }
    }
  };

  // ✅ Handle Ad Submission (Send to Database)
  const handleSubmitAd = async () => {
    if (companyName && selectedFile && address && schedule) {
      const newAd = {
        company: companyName,
        file: selectedFile.name,
        address,
        schedule,
        latitude: location.lat, // ✅ Send latitude
        longitude: location.lng, // ✅ Send longitude
      };

      console.log("Submitting ad:", newAd); // ✅ Debugging to check what is submitted

      // 🔹 Replace with your API/database integration
      // await saveAdToDatabase(newAd);

      setAds([...ads, newAd]);
      setCompanyName("");
      setSelectedFile(null);
      setAddress("");
      setSchedule("");
    }
  };

  function LocationMarker() {
    if (!useMapEvents || !Marker) return null;
    useMapEvents({
      click(e) {
        setLocation({ lat: e.latlng.lat, lng: e.latlng.lng });
        setAddress(`Lat: ${e.latlng.lat}, Lng: ${e.latlng.lng}`);
      },
    });

    return <Marker position={location} icon={customIcon} />;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Header */}
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Advertisement Management</h1>
      </header>

      {/* Upload Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-5 border border-gray-300">
        <h3 className="text-lg font-semibold text-black mb-3">Upload New Advertisement</h3>
        <input
          type="text"
          placeholder="Enter Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full p-3 border border-gray-400 rounded mt-2 text-black"
        />
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          className="w-full p-3 border border-gray-400 rounded mt-2 text-black"
        />

        {/* Address Input */}
        <input
          type="text"
          placeholder="Enter Address or Click on Map"
          value={address}
          onChange={handleAddressChange}  // ✅ Now updates map location when user enters an address
          className="w-full p-3 border border-gray-400 rounded mt-2 text-black"
        />

        {/* Leaflet Map - Ensuring Map Loads Properly */}
        <div className="h-60 w-full mt-3">
          {leafletReady && MapContainer && TileLayer && (
            <MapContainer
              key={`${location.lat}-${location.lng}`} // ✅ Forces re-render when location changes
              center={location}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <LocationMarker />
            </MapContainer>
          )}
        </div>

        {/* DateTime Picker */}
        <div className="relative w-full">
          <label className="block text-black font-medium mt-3">Ad Expiry Date (Due Date)</label>
          <input
            id="datetimeInput"
            type="datetime-local"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            className="w-full p-3 border border-gray-400 rounded mt-2 text-black pr-10 cursor-pointer"
          />
          <Calendar
            className="absolute right-3 top-10 text-gray-600 cursor-pointer"
            size={20}
            onClick={() => document.getElementById("datetimeInput").showPicker()}
          />
        </div>

        <button
          onClick={handleSubmitAd}
          className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white p-3 rounded shadow-md hover:brightness-110 transition"
        >
          Submit Ad
        </button>
      </div>
    </div>
  );
}
