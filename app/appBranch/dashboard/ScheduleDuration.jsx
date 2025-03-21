import { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig";  // Import Firebase DB
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // Firebase Auth for current user

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
      setUserId(user.uid); // Set user ID
    } else {
      console.log("User not logged in");
    }
  }, []);

  // Fetch ads for the specific user
  useEffect(() => {
    if (userId) {
      const fetchAds = async () => {
        // Query ads for the current user (specific to their userId)
        const adsCollection = collection(db, "client_web", userId, "ads");
        const querySnapshot = await getDocs(adsCollection);
        const fetchedAds = querySnapshot.docs.map((doc) => {
          const adData = doc.data();
          const duration = calculateDuration(adData.createdAt, adData.expiryDate);
          return {
            id: doc.id,
            ...adData,
            duration: duration
          };
        });
        setAds(fetchedAds);
      };

      fetchAds();
    }
  }, [userId]); // Run this effect when userId changes

  const calculateDuration = (startDate, endDate) => {
    // Calculate the duration in days
    const start = startDate?.toDate();
    const end = endDate?.seconds ? new Date(endDate.seconds * 1000) : null;

    if (!start || !end) return "N/A"; // Return N/A if dates are invalid

    const timeDiff = Math.abs(end - start); // Difference in milliseconds
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert ms to days
    return `${diffDays} days`;
  };

  const filteredAds = ads.filter((ad) =>
    (ad.companyName || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdClick = (ad) => {
    setSelectedAd(ad);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Schedule & Duration</h1>
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
          <span>Duration</span>
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
                <span className="text-black">
                  <strong>Duration:</strong> {ad.duration}
                </span>
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
          <input
            type="text"
            value={selectedAd.duration}
            readOnly
            className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-200 text-black"
          />
        </div>
      )}
    </div>
  );
}
