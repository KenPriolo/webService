import React, { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function BranchUploadsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [ads, setAds] = useState([]);
  const [selectedAd, setSelectedAd] = useState(null);
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(true);

  // Reset states when component mounts or user changes
  useEffect(() => {
    setSelectedAd(null);
    setSearchTerm("");
    setAds([]);
    setLoading(true);
  }, [userId]);

  // Fetch the user ID from Firebase Authentication
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        console.log("User not logged in");
        setUserId("");
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Fetch ads_client for the specific user
  useEffect(() => {
    if (userId) {
      const fetchAds = async () => {
        try {
          setLoading(true);
          const adsCollection = collection(db, "client_web", userId, "ads_client");
          const querySnapshot = await getDocs(adsCollection);
          const fetchedAds = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            companyName: doc.data().companyName || "No company name",
            address: doc.data().address || "No address",
            adFileUrl: doc.data().adFileUrl || "",
            createdAt: doc.data().createdAt || null,
            expiryDate: doc.data().expiryDate || null,
            done: doc.data().done || false
          }));
          setAds(fetchedAds);
        } catch (error) {
          console.error("Error fetching ads:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchAds();
    } else {
      setLoading(false);
    }
  }, [userId]);

  const filteredAds = ads.filter((ad) =>
    (ad.companyName || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdClick = (ad) => {
    setSelectedAd(ad);
  };

  if (authLoading) {
    return (
      <div className="bg-gray-100 min-h-screen p-5 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen p-5 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl">Loading your advertisements...</p>
        </div>
      </div>
    );
  }

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
          <span>Status</span>
        </div>

        <ul className="space-y-3 mt-2">
          {filteredAds.length === 0 ? (
            <p className="p-4 text-center text-gray-500">
              {userId ? "No ads found for your account." : "Please log in to view ads."}
            </p>
          ) : (
            filteredAds.map((ad) => (
              <li
                key={ad.id}
                className="grid grid-cols-6 gap-2 p-4 rounded-lg shadow-md bg-white hover:bg-gray-100 transition-all cursor-pointer items-center"
                onClick={() => handleAdClick(ad)}
              >
                <span className="font-bold text-black truncate">{ad.companyName}</span>
                <span className="text-black">
                  {ad.adFileUrl ? (
                    <a 
                      href={ad.adFileUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View
                    </a>
                  ) : "N/A"}
                </span>
                <span className="text-black truncate">{ad.address}</span>
                <span className="text-black">
                  {ad.createdAt?.toDate().toLocaleDateString() || "N/A"}
                </span>
                <span className="text-black">
                  {ad.expiryDate ? new Date(ad.expiryDate.seconds * 1000).toLocaleDateString() : "N/A"}
                </span>
                <span className={`px-2 py-1 text-xs rounded-full text-center ${
                  ad.done ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {ad.done ? 'Approved' : 'Pending'}
                </span>
              </li>
            ))
          )}
        </ul>
      </div>

      {selectedAd && (
        <div className="bg-white p-5 rounded-lg shadow-md mt-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-black">Advertisement Details</h3>
            <button 
              onClick={() => setSelectedAd(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                value={selectedAd.companyName}
                readOnly
                className="w-full p-3 border border-gray-300 rounded bg-gray-50 text-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Video URL</label>
              <input
                type="text"
                value={selectedAd.adFileUrl}
                readOnly
                className="w-full p-3 border border-gray-300 rounded bg-gray-50 text-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                value={selectedAd.address}
                readOnly
                className="w-full p-3 border border-gray-300 rounded bg-gray-50 text-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Date</label>
              <input
                type="text"
                value={selectedAd.createdAt?.toDate().toLocaleString() || "N/A"}
                readOnly
                className="w-full p-3 border border-gray-300 rounded bg-gray-50 text-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
              <input
                type="text"
                value={selectedAd.expiryDate ? new Date(selectedAd.expiryDate.seconds * 1000).toLocaleString() : "N/A"}
                readOnly
                className="w-full p-3 border border-gray-300 rounded bg-gray-50 text-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <input
                type="text"
                value={selectedAd.done ? "Approved" : "Pending"}
                readOnly
                className={`w-full p-3 border rounded ${
                  selectedAd.done ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'
                }`}
              />
            </div>
          </div>
          
          {selectedAd.adFileUrl && (
            <div className="mt-4">
              <a
                href={selectedAd.adFileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Full Ad
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}