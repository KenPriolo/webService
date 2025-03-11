import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home, BarChart, Car, Users, MonitorSmartphone, Settings, LogOut } from "lucide-react";
import AdminDashboard from "../dashboard/AdminDashboard";
import AdvertisementManagement from "../dashboard/AdvertisementManagement";
import TaxiFleetManagement from "../dashboard/TaxiFleetManagement";
import AnalyticsAndReporting from "../dashboard/AnalyticsAndReporting";
import AdminTicketingSystem from "../dashboard/AdminTicketingSystem";
import UploadsPage from "../dashboard/UploadsPage";
import LocationsPage from "../dashboard/LocationsPage";
import ScheduleDuration from "../dashboard/ScheduleDuration";
import CTRConversions from "../dashboard/CTRConversions";


export default function Sidebar() {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState("Dashboard Overview");

  useEffect(() => {
    const handleSidebarUpdate = (event) => {
      if (event.detail) {
        setSelectedPage(event.detail);
      }
    };
    window.addEventListener("updateSidebar", handleSidebarUpdate);
    return () => window.removeEventListener("updateSidebar", handleSidebarUpdate);
  }, []);

  const pages = {
    "Dashboard Overview": <AdminDashboard selectedPage={selectedPage} />,
    "Advertisement Management": <AdvertisementManagement />,
    "Taxi Fleet Management": <TaxiFleetManagement />,
    "Analytics & Reporting": <AnalyticsAndReporting />,
    "Ticketing System": <AdminTicketingSystem />,
    "Uploads": <UploadsPage />, 
    "Locations": <LocationsPage />, 
    "Schedule & Duration": <ScheduleDuration />, 
    "CTR & Conversions": <CTRConversions />, 
    "Settings": <h1>Settings Content</h1>,
    "Logout": <h1>Logging out...</h1>,
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="w-64 h-screen bg-gradient-to-b from-gray-700 to-gray-900 text-white p-5 flex flex-col flex-shrink-0 relative z-10">
        <h2 className="text-xl font-bold text-center mb-5 italic">AuAdsTri</h2>
        <nav className="flex flex-col gap-3 flex-grow">
          {[{ label: "Dashboard Overview", icon: <Home size={20} /> },
            { label: "Advertisement Management", icon: <MonitorSmartphone size={20} /> },
            { label: "Taxi Fleet Management", icon: <Car size={20} /> },
            { label: "Analytics & Reporting", icon: <BarChart size={20} /> },
            { label: "Ticketing System", icon: <Users size={20} /> }].map((item, index) => (
              <button
                key={index}
                className={`flex items-center gap-2 text-left px-4 py-3 rounded-md transition duration-300 w-full ${selectedPage === item.label ? "bg-gray-800" : "hover:bg-gray-700"}`}
                onClick={() => setSelectedPage(item.label)}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
          ))}
        </nav>
        <div className="flex flex-col gap-3 mt-auto">
          <button
            className={`flex items-center gap-2 px-4 py-3 rounded-md transition duration-300 w-full ${selectedPage === "Settings" ? "bg-gray-800" : "hover:bg-gray-700"}`}
            onClick={() => setSelectedPage("Settings")}
          >
            <Settings size={20} />
            <span>Settings</span>
          </button>
          <button
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md transition duration-300 w-full"
            onClick={() => {
              setSelectedPage("Logout");
              setTimeout(() => navigate("/web-service"), 1000);
            }}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
      <div className="flex-1 p-5 h-screen overflow-y-auto bg-gray-700 flex flex-col box-border relative z-1">
        {pages[selectedPage]}
      </div>
    </div>
  );
}
