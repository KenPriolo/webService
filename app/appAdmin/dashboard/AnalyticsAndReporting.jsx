import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar
} from "recharts";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import {
  collection, getDocs, updateDoc, doc
} from "firebase/firestore";
import moment from "moment";

export default function AnalyticsAndReporting() {
  const [revenueData, setRevenueData] = useState([]);
  const [weeklyTrends, setWeeklyTrends] = useState([]);
  const [yearlyTrends, setYearlyTrends] = useState([]);
  const [engagementTrends, setEngagementTrends] = useState([]);
  const [cashouts, setCashouts] = useState([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      const adsRef = collection(db, "ads");
      const snapshot = await getDocs(adsRef);
      const ads = snapshot.docs.map(doc => doc.data());

      // Example data, replace with your real logic
      setRevenueData([
        { name: "Jan", revenue: 12000 },
        { name: "Feb", revenue: 15000 },
        { name: "Mar", revenue: 18000 },
        { name: "Apr", revenue: 22000 },
        { name: "May", revenue: 25000 },
      ]);

      setWeeklyTrends([
        { name: "Week 1", revenue: 30000 },
        { name: "Week 2", revenue: 32000 },
        { name: "Week 3", revenue: 29000 },
        { name: "Week 4", revenue: 34000 },
      ]);

      setYearlyTrends([
        { name: "2020", revenue: 150000 },
        { name: "2021", revenue: 180000 },
        { name: "2022", revenue: 200000 },
        { name: "2023", revenue: 220000 },
      ]);

      setEngagementTrends([
        { name: "Mon", views: 4000, clicks: 2400 },
        { name: "Tue", views: 3000, clicks: 2210 },
        { name: "Wed", views: 5000, clicks: 2290 },
        { name: "Thu", views: 4780, clicks: 2000 },
        { name: "Fri", views: 5890, clicks: 2181 },
        { name: "Sat", views: 4390, clicks: 2500 },
        { name: "Sun", views: 4490, clicks: 2100 },
      ]);
    };

    const fetchCashouts = async () => {
      const cashoutsRef = collection(db, "cashouts");
      const snapshot = await getDocs(cashoutsRef);
      const list = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCashouts(list);
    };

    fetchAnalytics();
    fetchCashouts();
  }, []);

  const updateCashoutStatus = async (id, newStatus) => {
    try {
      const ref = doc(db, "cashouts", id);
      await updateDoc(ref, { status: newStatus });
      setCashouts(prev =>
        prev.map(c => (c.id === id ? { ...c, status: newStatus } : c))
      );
    } catch (error) {
      console.error("Failed to update cashout:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Analytics & Reporting</h1>
      </header>

      {/* Charts Section */}
      {[{
        title: "Engagement Trends", data: engagementTrends,
        dataKey1: "views", dataKey2: "clicks",
        color1: "#4f46e5", color2: "#16a34a"
      }, {
        title: "Weekly Revenue Trends", data: weeklyTrends,
        dataKey1: "revenue", color1: "#ff9800"
      }, {
        title: "Monthly Revenue Reports", data: revenueData,
        dataKey1: "revenue", chartType: "Bar", color1: "#4f46e5"
      }, {
        title: "Yearly Revenue Trends", data: yearlyTrends,
        dataKey1: "revenue", chartType: "Bar", color1: "#2196f3"
      }].map((chart, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md mt-6 border border-gray-300">
          <h2 className="text-2xl font-semibold text-black mb-4 text-center">{chart.title}</h2>
          <ResponsiveContainer width="100%" height={320}>
            {chart.chartType === "Bar" ? (
              <BarChart data={chart.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" tick={{ fill: "black", fontSize: 14 }} />
                <YAxis tick={{ fill: "black", fontSize: 14 }} />
                <Tooltip contentStyle={{ backgroundColor: "#fff", color: "#333", borderRadius: "6px", padding: "10px" }} />
                <Bar dataKey={chart.dataKey1} fill={chart.color1} barSize={40} />
              </BarChart>
            ) : (
              <LineChart data={chart.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" tick={{ fill: "black", fontSize: 14 }} />
                <YAxis tick={{ fill: "black", fontSize: 14 }} />
                <Tooltip contentStyle={{ backgroundColor: "#fff", color: "#333", borderRadius: "6px", padding: "10px" }} />
                <Line type="monotone" dataKey={chart.dataKey1} stroke={chart.color1} strokeWidth={3} dot={{ r: 5 }} />
                {chart.dataKey2 && <Line type="monotone" dataKey={chart.dataKey2} stroke={chart.color2} strokeWidth={3} dot={{ r: 5 }} />}
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      ))}

      {/* Cashout Approval Table */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6 border border-gray-300">
        <h2 className="text-2xl font-semibold text-black mb-4 text-center">Cashout Requests</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-200 text-gray-600">
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Gcash #</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cashouts.map((c) => (
                <tr key={c.id} className="border-b text-black">
                  <td className="px-4 py-2">{c.email || "Unknown"}</td>
                  <td className="px-4 py-2">{c.gcashNumber}</td>
                  <td className="px-4 py-2">₱{c.amount}</td>
                  <td className="px-4 py-2 capitalize">{c.status}</td>
                  <td className="px-4 py-2">{moment(c.timestamp?.toDate?.()).format("LLL")}</td>
                  <td className="px-4 py-2 text-center space-x-2">
                    {c.status === "pending" ? (
                      <>
                        <button
                          onClick={() => updateCashoutStatus(c.id, "approved")}
                          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateCashoutStatus(c.id, "rejected")}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span className="italic text-gray-500">No actions</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
