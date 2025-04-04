import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, MapPin, Calendar } from "lucide-react";
import { db } from "../../../firebaseConfig";
import { getAuth } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";

export default function AdvertisementManagement() {
  const [companyName, setCompanyName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [expiryDate, setExpiryDate] = useState("");
  const [pureAddress, setPureAddress] = useState("");
  const [geocodedAddress, setGeocodedAddress] = useState("");
  const [latitude, setLatitude] = useState(14.5995);
  const [longitude, setLongitude] = useState(120.9842);
  const [map, setMap] = useState(null);
  const [leafletReady, setLeafletReady] = useState(false);
  const [MapContainer, setMapContainer] = useState(null);
  const [TileLayer, setTileLayer] = useState(null);
  const [Marker, setMarker] = useState(null);
  const [useMapEvents, setUseMapEvents] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined") {
      Promise.all([import("leaflet"), import("react-leaflet")]).then(([leaflet, reactLeaflet]) => {
        setMapContainer(reactLeaflet.MapContainer);
        setTileLayer(reactLeaflet.TileLayer);
        setMarker(reactLeaflet.Marker);
        setUseMapEvents(() => reactLeaflet.useMapEvents);
        setLeafletReady(true);
      }).catch((error) => console.error("Leaflet loading error:", error));
    }
  }, []);

  const handlePureAddressChange = async (e) => {
    const newAddress = e.target.value;
    setPureAddress(newAddress);
    if (newAddress.trim().length > 3) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(newAddress)}&addressdetails=1&limit=1`
        );
        const data = await response.json();
        if (data.length > 0) {
          const { lat, lon, display_name } = data[0];
          setLatitude(parseFloat(lat));
          setLongitude(parseFloat(lon));
          setGeocodedAddress(display_name);
          if (map) {
            map.setView([lat, lon], 15);
          }
        }
      } catch (error) {
        console.error("Geocoding error:", error);
        setGeocodedAddress("Error occurred while geocoding address");
      }
    }
  };

  const handleLatLngChange = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
      );
      const data = await response.json();
      if (data.display_name) {
        setGeocodedAddress(data.display_name);
      } else {
        setGeocodedAddress("Unknown location");
      }
    } catch (error) {
      console.error("Reverse geocoding error:", error);
    }
  };

  function LocationMarker() {
    if (!useMapEvents || !Marker) return null;
    useMapEvents({
      click(e) {
        setLatitude(e.latlng.lat);
        setLongitude(e.latlng.lng);
        handleLatLngChange();
        if (map) {
          map.setView([e.latlng.lat, e.latlng.lng], 15);
        }
      },
    });
    return <Marker position={{ lat: latitude, lng: longitude }} />;
  }

  const handleSubmitAd = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!companyName.trim() || !selectedFile || !pureAddress.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    if (!user) {
      alert("You must be logged in to submit an ad.");
      return;
    }

    setLoading(true); // Start loading
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", "yp3oxvpp");
      formData.append("resource_type", "video");
      formData.append("chunk_size", "6000000");

      const uploadResponse = await fetch("https://api.cloudinary.com/v1_1/dafdsqf6h/video/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload video to Cloudinary");
      }

      const uploadData = await uploadResponse.json();
      const fileUrl = uploadData.secure_url;

      const adRef = doc(db, "ads", companyName);
      await setDoc(adRef, {
        companyName,
        adFileUrl: fileUrl,
        address: geocodedAddress,
        latitude,
        longitude,
        contractStatus: "active",
        expiryDate: expiryDate ? Timestamp.fromDate(new Date(expiryDate)) : null,
        createdAt: Timestamp.now(),
        userId: user.uid,
      });

      setCompanyName("");
      setSelectedFile(null);
      setExpiryDate("");
      setPureAddress("");
      setGeocodedAddress("");
      setLatitude(14.5995);
      setLongitude(120.9842);
      alert("Ad successfully uploaded and fields cleared!");
    } catch (error) {
      console.error("❌ Error submitting ad:", error);
      alert("Error uploading ad. Please try again.");
    }
    setLoading(false); // End loading
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Advertisement Management</h1>
      </header>

      <div className="bg-white p-6 rounded-lg shadow-md mt-5 border border-gray-300">
        <h3 className="text-lg font-semibold text-black mb-3">Upload New Advertisement</h3>

        <input type="text" placeholder="Enter Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full p-3 border border-gray-400 rounded mt-2 text-black" />

        <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} className="w-full p-3 border border-gray-400 rounded mt-2 text-black" />

        <input type="text" placeholder="Enter Address" value={pureAddress} onChange={handlePureAddressChange} className="w-full p-3 border border-gray-400 rounded mt-2 text-black" />

        <input type="text" placeholder="Geocoded Address (Auto-filled)" value={geocodedAddress} readOnly className="w-full p-3 border border-gray-400 rounded mt-2 text-gray-500 bg-gray-200" />

        <div className="flex gap-3 mt-2">
          <input type="text" placeholder="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} onBlur={handleLatLngChange} className="w-full p-3 border border-gray-400 rounded text-black" />
          <input type="text" placeholder="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} onBlur={handleLatLngChange} className="w-full p-3 border border-gray-400 rounded text-black" />
        </div>

        <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} className="w-full p-3 border border-gray-400 rounded mt-2 text-black" />

        <div className="h-60 w-full mt-3">
          {leafletReady && MapContainer && TileLayer && <MapContainer center={{ lat: latitude, lng: longitude }} zoom={13} whenCreated={setMap} style={{ height: "100%", width: "100%" }}><TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /><LocationMarker /></MapContainer>}
        </div>

        <button onClick={handleSubmitAd} className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white p-3 rounded shadow-md hover:brightness-110 transition" disabled={loading}>
          {loading ? "Uploading..." : "Submit Ad"}
        </button>
      </div>
    </div>
  );
}
