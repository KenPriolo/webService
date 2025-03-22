import React, { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // To access the current user's authentication details

export default function BranchUploadsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [ads, setAds] = useState([]);
  const [selectedAd, setSelectedAd] = useState(null);
  const [userId, setUserId] = useState(""); // This will store the current user's ID

  // Fetch the user ID from Firebase Authentication
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser; // Get the current logged-in user
    if (user) {
      setUserId(user.uid); // Set the user ID
    } else {
      // Handle the case when the user is not logged in (for example, redirect to login page)
      console.log("User not logged in");
    }
  }, []);

  // Fetch ads for the specific user
  useEffect(() => {
    if (userId) {
      const fetchAds = async () => {
        // Query ads for the current user (specific to their userId)
        const adsCollection = collection(db, "client_web", userId, "ads"); // The correct collection for this user
        const querySnapshot = await getDocs(adsCollection); // Query based on userId
        const fetchedAds = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAds(fetchedAds);
      };

      fetchAds();
    }
  }, [userId]); // Run this effect when userId changes

  const filteredAds = ads.filter((ad) =>
    (ad.companyName || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdClick = (ad) => {
    setSelectedAd(ad);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Uploaded Advertisements</h1>
      </header>

      <div className="bg-white p-5 rounded-lg shadow-md mt-5">
        <input
          type="text"
          placeholder="Search by Company Name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-400 rounded mb-4 text-black shadow-sm"
        />

        <h3 className="text-lg font-semibold text-black mb-3">List of Uploaded Ads</h3>

        <div className="grid grid-cols-6 gap-2 bg-gray-200 p-3 rounded-lg font-semibold text-black">
          <span>Company Name</span>
          <span>Video Ad</span>
          <span>Location</span>
          <span>Schedule</span>
          <span>Expiry</span>
          <span>Actions</span>
        </div>

        <ul className="space-y-3 mt-2">
          {filteredAds.length === 0 ? (
            <p>No ads found for your account.</p>
          ) : (
            filteredAds.map((ad) => (
              <li
                key={ad.id}
                className="grid grid-cols-6 gap-2 p-4 rounded-lg shadow-md bg-white hover:bg-gray-200 transition-all cursor-pointer items-center"
                onClick={() => handleAdClick(ad)}
              >
                <span className="font-bold text-black">{ad.companyName}</span>
                <span className="text-black">{ad.adFileUrl ? "Video" : "N/A"}</span>
                <span className="text-black">{ad.address || "Unknown"}</span>
                <span className="text-black">
                  <strong>Start:</strong> {ad.createdAt?.toDate().toLocaleString() || "N/A"}
                </span>
                <span className="text-black">
                  <strong>Expiry:</strong> {ad.expiryDate ? new Date(ad.expiryDate.seconds * 1000).toLocaleString() : "N/A"}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // Replace with actual delete logic if needed
                  }}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition cursor-pointer"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>

      {selectedAd && (
        <div className="bg-white p-5 rounded-lg shadow-md mt-5">
          <h3 className="text-lg font-semibold text-black">Advertisement Details</h3>
          <input
            type="text"
            value={selectedAd.companyName}
            readOnly
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-200 text-black"
          />
          <input
            type="text"
            value={selectedAd.adFileUrl}
            readOnly
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-200 text-black"
          />
          <input
            type="text"
            value={selectedAd.address}
            readOnly
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-200 text-black"
          />
          <input
            type="text"
            value={selectedAd.createdAt?.toDate().toLocaleString()}
            readOnly
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-200 text-black"
          />
          <input
            type="text"
            value={selectedAd.expiryDate ? new Date(selectedAd.expiryDate.seconds * 1000).toLocaleString() : "N/A"}
            readOnly
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-200 text-black"
          />
        </div>
      )}
    </div>
  );
}
