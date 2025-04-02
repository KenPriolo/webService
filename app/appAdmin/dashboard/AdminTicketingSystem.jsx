import React, { useEffect, useState } from "react";
import { collection, onSnapshot, doc, updateDoc, collectionGroup } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Query only ads_client collections under client_web
      const adsQuery = collectionGroup(db, "ads_client");

      const unsubscribe = onSnapshot(adsQuery, 
        (snapshot) => {
          const fetchedAds = snapshot.docs.map((doc) => {
            // Verify the document is under client_web
            const pathParts = doc.ref.path.split('/');
            if (pathParts.length < 3 || pathParts[0] !== 'client_web') {
              return null; // Skip documents not in client_web
            }
            
            const userId = pathParts[1]; // Get the user ID from the path
            
            return {
              id: doc.id,
              userId,
              ...doc.data(),
              companyName: doc.data().companyName || 'No company name',
              address: doc.data().address || 'No address provided',
              adFileUrl: doc.data().adFileUrl || '',
              createdAt: doc.data().createdAt || null,
              expiryDate: doc.data().expiryDate || null,
              done: doc.data().done || false
            };
          }).filter(ad => ad !== null); // Remove any null entries
          
          setAds(fetchedAds);
          setFilteredAds(fetchedAds);
          setLoading(false);
        },
        (error) => {
          setError(error.message);
          setLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

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
    if (!selectedAd) return;
    
    try {
      // Use the correct path with ads_client
      const docRef = doc(db, `client_web/${selectedAd.userId}/ads_client`, selectedAd.id);
      
      // First verify the document exists
      await updateDoc(docRef, { 
        done: true,
        updatedAt: new Date() // Optional: add timestamp
      });
      
      // Update local state
      setAds(ads.map(ad => 
        ad.id === selectedAd.id ? {...ad, done: true} : ad
      ));
      setFilteredAds(filteredAds.map(ad => 
        ad.id === selectedAd.id ? {...ad, done: true} : ad
      ));
      setSelectedAd(null);
    } catch (err) {
      console.error("Error marking as done:", err);
      setError("Failed to update document. It may have been deleted.");
    }
  };

  if (loading) return <div className="text-center p-8">Loading ads...</div>;
  if (error) return <div className="text-center p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Admin Advertisement Review</h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6 border border-gray-300">
        {!selectedAd ? (
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">Uploaded Ads by Client</h3>

            <input
              type="text"
              placeholder="Search by company name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-400 rounded text-black"
            />

            {filteredAds.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                {loading ? 'Loading...' : 'No ads found'}
              </div>
            ) : (
              <ul className="space-y-4">
                {filteredAds.map((ad) => (
                  <li
                    key={`${ad.userId}-${ad.id}`}
                    className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center cursor-pointer hover:bg-gray-200 transition"
                    onClick={() => handleSelectAd(ad)}
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-black">{ad.companyName}</h4>
                      <span className="text-gray-600 text-sm">Address: {ad.address}</span>
                    </div>
                    {ad.done ? (
                      <span className="bg-green-600 px-2 py-1 text-white rounded text-xs font-semibold ml-2">
                        Done
                      </span>
                    ) : (
                      <span className="bg-blue-500 px-3 py-1 text-white rounded text-sm font-semibold">View</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">Ad Details</h3>
            <p className="text-lg text-black"><strong>Company Name:</strong> {selectedAd.companyName}</p>
            <p className="text-lg text-black"><strong>Address:</strong> {selectedAd.address}</p>
            <p className="text-lg text-black"><strong>Schedule Date:</strong> {formatDate(selectedAd.createdAt)}</p>
            <p className="text-lg text-black"><strong>Expiry Date:</strong> {formatDate(selectedAd.expiryDate)}</p>
            <p className="text-lg text-black"><strong>Video URL:</strong> 
              {selectedAd.adFileUrl ? (
                <a href={selectedAd.adFileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  View the URL
                </a>
              ) : 'No URL provided'}
            </p>

            {selectedAd.adFileUrl && (
              <a
                href={selectedAd.adFileUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block w-full text-center bg-green-600 text-white p-3 rounded hover:bg-green-700 transition font-semibold"
              >
                Download Video
              </a>
            )}

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