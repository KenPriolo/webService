import { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Video, CreditCard, BarChart, Upload } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useSidebar } from "../components/ui/SidebarContext";
import { db, auth } from "../../../firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const branchData = [
  { name: 'Mon', views: 4000, clicks: 2400 },
  { name: 'Tue', views: 3000, clicks: 2210 },
  { name: 'Wed', views: 5000, clicks: 2290 },
  { name: 'Thu', views: 4780, clicks: 2000 },
  { name: 'Fri', views: 5890, clicks: 2181 },
  { name: 'Sat', views: 4390, clicks: 2500 },
  { name: 'Sun', views: 4490, clicks: 2100 },
];

export default function BranchDashboard() {
  const { isCollapsed } = useSidebar();
  const [ads, setAds] = useState([]);
  const user = getAuth().currentUser;

  useEffect(() => {
    if (user) {
      // Changed from 'ads' to 'ads_client' collection
      const adsRef = collection(db, `client_web/${user.uid}/ads_client`);
      const unsubscribe = onSnapshot(adsRef, (snapshot) => {
        const fetchedAds = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          // Ensure all required fields have defaults
          companyName: doc.data().companyName || 'No company name',
          address: doc.data().address || 'No address provided',
          done: doc.data().done || false
        }));
        setAds(fetchedAds);
      });
      return () => unsubscribe();
    }
  }, [user]);

  const uploadedAdsCount = ads.length;
  const pendingCount = ads.filter(ad => !ad.done).length;

  return (
    <div className={`min-h-screen relative transition-all duration-300 ${isCollapsed ? 'pl-5' : 'pl-0'}`}>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('../../../../assets/geo.jpg')" }}></div>
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="relative z-10 p-5">
        <header className="flex justify-center items-center bg-white text-blue-900 p-5 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Branch Dashboard</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {[
            { title: "Uploaded Ads", value: uploadedAdsCount, icon: <Video size={32} /> },
            { title: "Pending Ads", value: pendingCount, icon: <Upload size={32} /> },
            { title: "Total Clicks", value: "8,500", icon: <BarChart size={32} /> }
          ].map((item, index) => (
            <Card key={index} className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center hover:-translate-y-1">
              <CardContent>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
                  <p className="text-xl font-bold text-black">{item.value}</p>
                </div>
                {item.icon}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md mt-5">
          <h3 className="text-lg font-semibold mb-3 text-blue-900">Ad Performance Analytics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={branchData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip contentStyle={{ backgroundColor: "#fff", color: "#000", borderRadius: "6px", padding: "10px" }} />
              <Line type="monotone" dataKey="views" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="clicks" stroke="#16a34a" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Uploads Section */}
        <div className="bg-white p-5 rounded-lg shadow-md mt-5">
          <h3 className="text-lg font-semibold mb-3 text-blue-900">Recent Ads Overview</h3>
          {ads.length === 0 ? (
            <p className="text-gray-500">No ads uploaded yet.</p>
          ) : (
            <ul className="space-y-2">
              {ads.slice(0, 5).map((ad) => (
                <li key={ad.id} className="flex justify-between items-center border-b py-2">
                  <div>
                    <p className="font-medium text-black">{ad.companyName}</p>
                    <small className="text-gray-600">{ad.address}</small>
                    {ad.adFileUrl && (
                      <small className="block text-blue-600 truncate max-w-xs">
                        <a href={ad.adFileUrl} target="_blank" rel="noopener noreferrer">
                          View Ad
                        </a>
                      </small>
                    )}
                  </div>
                  <span className={`px-2 py-1 text-xs rounded ${ad.done ? 'bg-green-500' : 'bg-yellow-500'} text-white`}>
                    {ad.done ? 'Approved' : 'Pending'}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}