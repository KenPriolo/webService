// appBranch/AnalyticsReporting.jsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

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
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Header */}
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Analytics & Reporting</h1>
        </header>
      <div className="bg-white p-6 rounded-lg shadow-md mt-5 border border-gray-300">
        <h2 className="text-lg font-semibold text-black mb-3 text-center">Engagement Trends</h2>
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
  );
}
