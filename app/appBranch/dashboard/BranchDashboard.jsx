import { Card, CardContent } from "../components/ui/Card";
import { Video, CreditCard, BarChart } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useSidebar } from "../components/ui/SidebarContext"; // ✅ correct hook import!

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
  const { isCollapsed } = useSidebar(); // ✅ now using the correct hook

  return (
    <div className={`min-h-screen relative transition-all duration-300 ${isCollapsed ? 'pl-5' : 'pl-0'}`}>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('../../../../assets/geo.jpg')" }}></div>
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="relative z-10 p-5">
        {/* Header */}
        <header className="flex justify-center items-center bg-white text-blue-900 p-5 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Branch Dashboard</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {[{ title: "Uploaded Ads", value: "15", icon: <Video size={32} /> },
            { title: "Payment Due", value: "$1,200", icon: <CreditCard size={32} /> },
            { title: "Total Clicks", value: "8,500", icon: <BarChart size={32} /> }].map((item, index) => (
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
      </div>
    </div>
  );
}
