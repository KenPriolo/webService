import React, { useEffect, useState } from "react";
import { useSidebar } from "../components/ui/SidebarContext";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { getAuth } from "firebase/auth";

const formatDate = (ts) => {
  if (!ts) return "N/A";
  if (typeof ts === "string") return ts;
  if (ts.seconds) {
    const date = new Date(ts.seconds * 1000);
    return date.toLocaleDateString();
  }
  return "Invalid date";
};

export default function TicketingSystem() {
  const { isCollapsed } = useSidebar();
  const [ads, setAds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
        setUserId(user.uid);
        fetchUserAds(user.uid);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const fetchUserAds = (uid) => {
    const adsRef = collection(db, `client_web/${uid}/ads_client`);
    const unsubscribe = onSnapshot(adsRef, (snapshot) => {
      const fetchedAds = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        companyName: doc.data().companyName || "No company name",
        address: doc.data().address || "No address provided",
        adFileUrl: doc.data().adFileUrl || "",
        schedule: doc.data().schedule || null,
        expiryDate: doc.data().expiryDate || null,
        done: doc.data().done || false
      }));
      setAds(fetchedAds);
      setLoading(false);
    });
    return unsubscribe;
  };

  const filteredAds = ads.filter((ad) =>
    ad.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className={`min-h-screen relative transition-all duration-300 ${isCollapsed ? 'pl-5' : 'pl-0'}`}>
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('../../../../assets/geo.jpg')" }}></div>
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="relative z-10 p-5 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg">Loading your advertisements...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen relative transition-all duration-300 ${isCollapsed ? 'pl-5' : 'pl-0'}`}>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('../../../../assets/geo.jpg')" }}></div>
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="relative z-10 p-5">
        <header className="flex justify-center items-center bg-white text-blue-900 p-5 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">My Advertisement Uploads</h1>
        </header>

        <div className="bg-white p-6 rounded-lg shadow-md mt-5 border border-gray-300">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Uploads & Status</h3>

          {/* Search bar */}
          <input
            type="text"
            placeholder="Search by Company Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-400 rounded mb-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          {filteredAds.length === 0 ? (
            <p className="text-gray-500 p-4 text-center">
              {searchTerm ? `No matching uploads found for "${searchTerm}"` : "No advertisements found"}
            </p>
          ) : (
            <ul className="space-y-4">
              {filteredAds.map((ad) => (
                <li 
                  key={ad.id} 
                  className="p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">{ad.companyName}</h4>
                    <p className="text-sm text-black">Address: {ad.address}</p>
                    <p className="text-sm text-black">Schedule Date: {formatDate(ad.schedule)}</p>
                    <p className="text-sm text-black">Expiry Date: {formatDate(ad.expiryDate)}</p>
                    <p className="text-sm text-black mt-1">
                      Video:{" "}
                      <a 
                        href={ad.adFileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 underline hover:text-blue-800 transition-colors"
                      >
                        View Video
                      </a>
                    </p>
                    <span
                      className={`inline-block mt-2 px-3 py-1 rounded text-white text-sm font-semibold ${
                        ad.done ? "bg-green-600 hover:bg-green-700" : "bg-yellow-500 hover:bg-yellow-600"
                      } transition-colors duration-200`}
                    >
                      {ad.done ? "Completed" : "In Review"}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}