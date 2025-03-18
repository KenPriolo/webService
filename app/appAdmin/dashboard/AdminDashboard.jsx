import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "../components/ui/Card";
import Button from "../components/ui/Button";
import { MapPin, Users, CreditCard, Video, Globe, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from 'firebase/firestore';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [adsCount, setAdsCount] = useState(0);
  const [taxisCount, setTaxisCount] = useState(0);
  const [geofencesCount, setGeofencesCount] = useState(0);
  const [topClient, setTopClient] = useState("-");

  const dashboardData = [
    { name: 'Mon', revenue: 4000, impressions: 2400 },
    { name: 'Tue', revenue: 3000, impressions: 2210 },
    { name: 'Wed', revenue: 5000, impressions: 2290 },
    { name: 'Thu', revenue: 4780, impressions: 2000 },
    { name: 'Fri', revenue: 5890, impressions: 2181 },
    { name: 'Sat', revenue: 4390, impressions: 2500 },
    { name: 'Sun', revenue: 4490, impressions: 2100 },
  ];

  useEffect(() => {
    const fetchStats = async () => {
      const adsSnapshot = await getDocs(collection(db, 'ads'));
      setAdsCount(adsSnapshot.size);
      setGeofencesCount(adsSnapshot.size); // Assuming geofences = ads
      setTaxisCount(50); // Placeholder
      setTopClient(adsSnapshot.docs[0]?.data().companyName || "-");
    };

    fetchStats();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        <Card className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center">
          <CardContent>
            <h3 className="text-lg font-semibold text-black">Total Active Taxis</h3>
            <p className="text-xl font-bold text-black">{taxisCount}</p>
          </CardContent>
          <MapPin size={32} />
        </Card>
        <Card className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center">
          <CardContent>
            <h3 className="text-lg font-semibold text-black">Running Ads</h3>
            <p className="text-xl font-bold text-black">{adsCount}</p>
          </CardContent>
          <Video size={32} />
        </Card>
        <Card className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center">
          <CardContent>
            <h3 className="text-lg font-semibold text-black">Total Geofences</h3>
            <p className="text-xl font-bold text-black">{geofencesCount}</p>
          </CardContent>
          <Globe size={32} />
        </Card>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-md mt-5">
        <h3 className="text-lg font-semibold mb-3 text-black">Ad Performance Analytics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dashboardData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: "#fff", color: "#000", borderRadius: "6px", padding: "10px" }} />
            <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="impressions" stroke="#16a34a" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <Card onClick={() => navigate('/map')} className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center cursor-pointer">
          <CardContent>
            <h3 className="text-lg font-semibold text-black">Live Taxi Map</h3>
            <p className="text-sm text-black">View taxis and zones</p>
          </CardContent>
          <Globe size={32} />
        </Card>

        <Card onClick={() => navigate('/ctr')} className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center cursor-pointer">
          <CardContent>
            <h3 className="text-lg font-semibold text-black">Top Client by CTR</h3>
            <p className="text-sm text-black">{topClient}</p>
          </CardContent>
          <TrendingUp size={32} />
        </Card>
      </div>
    </div>
  );
}