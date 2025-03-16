import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useSidebar } from "../components/ui/SidebarContext";

const engagementTrends = [
  { name: "Mon", views: 4000, clicks: 2400 },
  { name: "Tue", views: 3000, clicks: 2210 },
  { name: "Wed", views: 5000, clicks: 2290 },
  { name: "Thu", views: 4780, clicks: 2000 },
  { name: "Fri", views: 5890, clicks: 2181 },
  { name: "Sat", views: 4390, clicks: 2500 },
  { name: "Sun", views: 4490, clicks: 2100 },
];

export default function AnalyticsAndReporting() {
  const { isCollapsed } = useSidebar();

  return (
    <div className={`min-h-screen relative transition-all duration-300 ${isCollapsed ? 'pl-5' : 'pl-0'}`}>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('../../../../assets/geo.jpg')" }}></div>
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="relative z-10 p-5">
        {/* Header */}
        <header className="flex justify-center items-center bg-white text-blue-900 p-5 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Analytics & Reporting</h1>
        </header>
        <div className="bg-white p-6 rounded-lg shadow-md mt-5 border border-gray-300">
          <h2 className="text-lg font-semibold text-blue-900 mb-3 text-center">Engagement Trends</h2>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={engagementTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip contentStyle={{ backgroundColor: "#fff", color: "#333", borderRadius: "6px", padding: "10px" }} />
              <Line type="monotone" dataKey="views" stroke="#4f46e5" strokeWidth={3} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="clicks" stroke="#16a34a" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
