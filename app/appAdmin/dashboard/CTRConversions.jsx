import { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export default function AdPerformanceDashboard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [adData, setAdData] = useState([]);
  const [selectedAd, setSelectedAd] = useState(null);
  const [videoAnalytics, setVideoAnalytics] = useState([]);
  const [deviceVideoUrl, setDeviceVideoUrl] = useState("");

  // Fetch all data
  useEffect(() => {
    const fetchAllData = async () => {
      // 1. Fetch ad performance data
      const adsRef = collection(db, "ads");
      const adSnapshot = await getDocs(adsRef);
      const adData = adSnapshot.docs.map((doc) => {
        const ad = doc.data();
        return {
          id: doc.id,
          client: ad.companyName || "N/A",
          totalViews: ad.views || 0,
          todayViews: ad.viewsToday || 0,
          weeklyViews: ad.viewsWeekly || 0,
          popupsToday: ad.popupsToday || 0,
          popupsWeekly: ad.popupsWeekly || 0,
          lastUpdated: ad.lastUpdated || "N/A"
        };
      });
      setAdData(adData);

      // 2. Fetch device video data
      const deviceId = "ABC-123-400"; // Your device ID
      const companyId = "company_id_1"; // Your company ID
      
      const locationRef = doc(db, 
        `taxiCompany/${companyId}/devices/${deviceId}/location/clients_data`);
      const locationSnap = await getDoc(locationRef);
      
      if (locationSnap.exists()) {
        const locationData = locationSnap.data();
        setDeviceVideoUrl(locationData.videoUrl || "");
      }
    };
    
    fetchAllData();

    // Load video analytics from localStorage
    const savedAnalytics = localStorage.getItem('videoAnalytics');
    if (savedAnalytics) {
      setVideoAnalytics(JSON.parse(savedAnalytics));
    }
  }, []);

  // Track video play
  const trackVideoPlay = (companyName, videoUrl) => {
    if (!videoUrl) return;

    const updatedAnalytics = [...videoAnalytics];
    const existingIndex = updatedAnalytics.findIndex(
      item => item.videoUrl === videoUrl && item.companyName === companyName
    );

    if (existingIndex >= 0) {
      updatedAnalytics[existingIndex] = {
        ...updatedAnalytics[existingIndex],
        playCount: updatedAnalytics[existingIndex].playCount + 1,
        lastPlayed: new Date().toISOString()
      };
    } else {
      updatedAnalytics.push({
        companyName,
        videoUrl,
        playCount: 1,
        lastPlayed: new Date().toISOString()
      });
    }

    setVideoAnalytics(updatedAnalytics);
    localStorage.setItem('videoAnalytics', JSON.stringify(updatedAnalytics));
  };

  const filteredData = adData.filter(data => 
    data.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (data) => {
    setSelectedAd(data);
  };

  const getVideoStats = (companyName) => {
    if (!deviceVideoUrl) return null;
    return videoAnalytics.find(
      item => item.videoUrl === deviceVideoUrl && item.companyName === companyName
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Advertisement Performance</h1>
        <TrendingUp size={32} className="ml-2" />
      </header>
      
      <input
        type="text"
        placeholder="Search by client name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-gray-400 rounded my-4 text-black shadow-sm"
      />

      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-black mb-3">Advertisement Statistics</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left">Client Name</th>
              <th className="p-3 text-left">Total Views</th>
              <th className="p-3 text-left">Today's Views</th>
              <th className="p-3 text-left">Weekly Views</th>
              <th className="p-3 text-left">Today's Popups</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((data, index) => (
                <tr 
                  key={index} 
                  className="border-b hover:bg-gray-100 cursor-pointer" 
                  onClick={() => handleRowClick(data)}
                >
                  <td className="p-3 text-black">{data.client}</td>
                  <td className="p-3 text-black">{data.totalViews}</td>
                  <td className="p-3 text-black">{data.todayViews}</td>
                  <td className="p-3 text-black">{data.weeklyViews}</td>
                  <td className="p-3 text-black">{data.popupsToday}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center font-bold p-4 text-black">
                  No data matches your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedAd && (
        <div className="bg-white p-5 rounded-lg shadow-md mt-5">
          <h3 className="text-lg font-semibold text-black">Detailed Advertisement Performance</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-black font-medium">Client Name</label>
              <input 
                type="text" 
                value={selectedAd.client} 
                readOnly 
                className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-100 text-black" 
              />
            </div>

            <div>
              <label className="block text-black font-medium">Total Views</label>
              <input 
                type="text" 
                value={selectedAd.totalViews} 
                readOnly 
                className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-100 text-black" 
              />
            </div>

            <div>
              <label className="block text-black font-medium">Today's Views</label>
              <input 
                type="text" 
                value={selectedAd.todayViews} 
                readOnly 
                className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-100 text-black" 
              />
            </div>

            <div>
              <label className="block text-black font-medium">Weekly Views</label>
              <input 
                type="text" 
                value={selectedAd.weeklyViews} 
                readOnly 
                className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-100 text-black" 
              />
            </div>

            <div>
              <label className="block text-black font-medium">Today's Popups</label>
              <input 
                type="text" 
                value={selectedAd.popupsToday} 
                readOnly 
                className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-100 text-black" 
              />
            </div>

            <div>
              <label className="block text-black font-medium">Weekly Popups</label>
              <input 
                type="text" 
                value={selectedAd.popupsWeekly} 
                readOnly 
                className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-100 text-black" 
              />
            </div>

            <div>
              <label className="block text-black font-medium">Last Updated</label>
              <input 
                type="text" 
                value={selectedAd.lastUpdated} 
                readOnly 
                className="w-full p-3 border border-gray-400 rounded mt-2 bg-gray-100 text-black" 
              />
            </div>

            {/* Video Analytics Section */}
            {deviceVideoUrl && (
              <div className="md:col-span-2 border-t pt-4">
                <h4 className="text-md font-semibold text-black mb-2">Video Analytics</h4>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Current Video:</span> 
                    <span className="truncate block">{deviceVideoUrl}</span>
                  </p>
                  {getVideoStats(selectedAd.client) ? (
                    <>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Plays:</span> {getVideoStats(selectedAd.client).playCount}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Last Played:</span> {new Date(getVideoStats(selectedAd.client).lastPlayed).toLocaleString()}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm text-gray-600">No plays recorded yet</p>
                  )}
                  <button
                    onClick={() => trackVideoPlay(selectedAd.client, deviceVideoUrl)}
                    className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm"
                  >
                    Record Play
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}