import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [ads, setAds] = useState([
    { id: 1, client: "ABC Corp", file: "ad1.jpg", location: "New York", schedule: "2025-03-01 10:00", expiry: "2025-03-10 23:59" },
    { id: 2, client: "XYZ Ltd", file: "ad2.png", location: "Los Angeles", schedule: "2025-03-05 15:30", expiry: "2025-03-15 23:59" },
    { id: 3, client: "ABC Corp", file: "ad3.gif", location: "Chicago", schedule: "2025-03-10 12:00", expiry: "2025-03-20 23:59" },
  ]);

  const [archivedAds, setArchivedAds] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedAd, setSelectedAd] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const filteredAds = ads.filter((ad) => ad.client.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleAdClick = (ad) => {
    setSelectedAd(ad);
  };

  const handleDeleteAd = (adId) => {
    const adToDelete = ads.find((ad) => ad.id === adId);
    setArchivedAds([...archivedAds, adToDelete]); // Move to archive
    setAds(ads.filter((ad) => ad.id !== adId)); // Remove from active ads
    console.log("Archived Ads:", archivedAds); // Replace this with database API call
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Header */}
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Uploaded Advertisements</h1>
      </header>

      {/* Search & Uploaded Ads List */}
      <div className="bg-white p-5 rounded-lg shadow-md mt-5">
        <input
          type="text"
          placeholder="Search by Client Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-400 rounded mb-4 text-black shadow-sm"
        />

        <h3 className="text-lg font-semibold text-black mb-3">List of Uploaded Ads</h3>

        {/* Table Headers */}
        <div className="grid grid-cols-6 gap-2 bg-gray-200 p-3 rounded-lg font-semibold text-black">
          <span>Company Name</span>
          <span>Video Ad</span>
          <span>Location</span>
          <span>Schedule</span>
          <span>Expiry</span>
          <span>Actions</span>
        </div>

        <ul className="space-y-3 mt-2">
          {filteredAds.map((ad, index) => (
            <li
              key={index}
              className="grid grid-cols-6 gap-2 p-4 rounded-lg shadow-md bg-white hover:bg-gray-200 transition-all cursor-pointer items-center"
              onClick={() => handleAdClick(ad)}
            >
              <span className="font-bold text-black">{ad.client}</span>
              <span className="text-black">{ad.file}</span>
              <span className="text-black">{ad.location}</span>
              <span className="text-black">
                <strong>Start:</strong> {ad.schedule}
              </span>
              <span className="text-black">
                <strong>Expiry:</strong> {ad.expiry}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent row click when deleting
                  handleDeleteAd(ad.id);
                }}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition cursor-pointer"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Ad Details (Only visible when an ad is selected) */}
      {selectedAd && (
        <div className="bg-white p-5 rounded-lg shadow-md mt-5">
          <h3 className="text-lg font-semibold text-black">Advertisement Details</h3>
          <input
            type="text"
            value={selectedAd.client}
            readOnly
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-200 text-black"
          />
          <input
            type="text"
            value={selectedAd.file}
            readOnly
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-200 text-black"
          />
          <input
            type="text"
            value={selectedAd.location}
            readOnly
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-200 text-black"
          />
          <input
            type="text"
            value={selectedAd.schedule}
            readOnly
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-200 text-black"
          />
          <input
            type="text"
            value={selectedAd.expiry}
            readOnly
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-200 text-black"
          />
        </div>
      )}
    </div>
  );
}
