import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "../components/ui/Card"; // Fixed path
import Button from "../components/ui/Button"; // Fixed path
import { MapPin, Users, CreditCard, Video, Globe } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const dashboardData = [
  { name: 'Mon', revenue: 4000, impressions: 2400 },
  { name: 'Tue', revenue: 3000, impressions: 2210 },
  { name: 'Wed', revenue: 5000, impressions: 2290 },
  { name: 'Thu', revenue: 4780, impressions: 2000 },
  { name: 'Fri', revenue: 5890, impressions: 2181 },
  { name: 'Sat', revenue: 4390, impressions: 2500 },
  { name: 'Sun', revenue: 4490, impressions: 2100 },
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Header */}
      <header className="flex justify-center items-center bg-gray-800 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </header>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {[{ title: "Total Active Taxis", value: "250", icon: <MapPin size={32} /> },
          { title: "Running Ads", value: "120", icon: <Video size={32} /> },
          { title: "Revenue Generated", value: "$12,500", icon: <CreditCard size={32} /> }].map((item, index) => (
          <Card key={index} className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center transform transition duration-300 hover:-translate-y-1">
            <CardContent>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-xl font-bold text-indigo-600">{item.value}</p>
              </div>
              {item.icon}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Performance Analytics Chart */}
      <div className="bg-white p-5 rounded-lg shadow-md mt-5">
        <h3 className="text-lg font-semibold mb-3">Ad Performance Analytics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dashboardData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff", borderRadius: "6px", padding: "10px" }} />
            <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="impressions" stroke="#16a34a" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Additional Management Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {[{ title: "Geofencing Zones", description: "Manage ads by location", icon: <Globe size={32} /> },
          { title: "Manage Admin Users", description: "Control system access", icon: <Users size={32} /> }].map((item, index) => (
          <Card key={index} className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center transform transition duration-300 hover:-translate-y-1">
            <CardContent>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              {item.icon}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
