import React, { useEffect, useState } from "react";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

// 🔵 Format helper for Firestore Timestamp or plain string dates
const formatDate = (ts) => {
  if (!ts) return "N/A";
  if (typeof ts === "string") return ts;
  if (ts.seconds) {
    const date = new Date(ts.seconds * 1000);
    return date.toLocaleDateString();
  }
  return "Invalid date";
};

const AdminAdReviewPanel = () => {
  const [ads, setAds] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAd, setSelectedAd] = useState(null);

  useEffect(() => {
    const adsCollectionRef = collection(db, "client_web/lutdfmMbfUTJOZvwIz77bwFZ0n03/ads");

    const unsubscribe = onSnapshot(adsCollectionRef, (snapshot) => {
      const fetchedAds = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAds(fetchedAds);
      setFilteredAds(fetchedAds);
    });

    return () => unsubscribe();
  }, []);

  // 🔵 Search filter
  useEffect(() => {
    const filtered = ads.filter((ad) =>
      ad.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAds(filtered);
  }, [searchTerm, ads]);

  const handleSelectAd = (ad) => {
    setSelectedAd(ad);
  };

  const handleBack = () => {
    setSelectedAd(null);
  };

  const handleMarkAsDone = async () => {
    const docRef = doc(db, "client_web/lutdfmMbfUTJOZvwIz77bwFZ0n03/ads", selectedAd.id);
    await updateDoc(docRef, { done: true });
    setSelectedAd(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Admin Advertisement Review</h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6 border border-gray-300">
        {!selectedAd ? (
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">Uploaded Ads</h3>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search by company name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-400 rounded text-black"
            />

            <ul className="space-y-4">
              {filteredAds.map((ad) => (
                <li
                  key={ad.id}
                  className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center cursor-pointer hover:bg-gray-200 transition"
                  onClick={() => handleSelectAd(ad)}
                >
                  <div>
                    <h4 className="text-lg font-semibold text-black">{ad.companyName}</h4>
                    <span className="text-gray-600 text-sm">Address: {ad.address}</span>
                  </div>
                  {ad.done && (
                    <span className="bg-green-600 px-2 py-1 text-white rounded text-xs font-semibold ml-2">
                      Done
                    </span>
                  )}
                  <span className="bg-blue-500 px-3 py-1 text-white rounded text-sm font-semibold">View</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">Ad Details</h3>
            <p className="text-lg text-black"><strong>Company Name:</strong> {selectedAd.companyName}</p>
            <p className="text-lg text-black"><strong>Address:</strong> {selectedAd.address}</p>
            <p className="text-lg text-black"><strong>Schedule Date:</strong> {formatDate(selectedAd.schedule)}</p>
            <p className="text-lg text-black"><strong>Expiry Date:</strong> {formatDate(selectedAd.expiryDate)}</p>
            <p className="text-lg text-black"><strong>Video URL:</strong> <a href={selectedAd.adFileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View the URL</a></p>

            {/* Download Button */}
            <a
              href={selectedAd.adFileUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full text-center bg-green-600 text-white p-3 rounded hover:bg-green-700 transition font-semibold"
            >
              Download Video
            </a>

            {!selectedAd.done && (
              <button
                className="mt-3 w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition font-semibold"
                onClick={handleMarkAsDone}
              >
                Mark as Done
              </button>
            )}

            <button
              className="mt-3 w-full bg-red-500 text-white p-3 rounded hover:bg-red-600 transition font-semibold"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAdReviewPanel;
