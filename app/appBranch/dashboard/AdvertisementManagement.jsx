// appBranch/AdvertisementManagement.jsx
import React, { useState } from "react";

export default function AdvertisementManagement() {
  const [ads, setAds] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [schedule, setSchedule] = useState("");

  const handleSubmitAd = () => {
    if (companyName && selectedFile && schedule) {
      const newAd = {
        company: companyName,
        file: selectedFile.name,
        schedule,
      };
      setAds([...ads, newAd]);
      setCompanyName("");
      setSelectedFile(null);
      setSchedule("");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Header */}
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Advertisement Management</h1>
      </header>
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
        <input
          type="datetime-local"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
          className="w-full p-3 border border-gray-400 rounded mt-2 text-black"
        />
        <button
          onClick={handleSubmitAd}
          className="w-full mt-4 bg-blue-600 text-white p-3 rounded shadow-md hover:bg-blue-700 transition"
        >
          Submit Ad
        </button>
      </div>
    </div>
  );
}
