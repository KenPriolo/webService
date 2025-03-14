import { useNavigate } from "react-router-dom";
import { Home, BarChart, Car, Users, MonitorSmartphone, Settings, LogOut, Upload } from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    let url = "/dashboard";

    if (page !== "Dashboard Overview") {
      url = `/dashboard/${page.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`;
    }

    navigate(url);
  };

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-gray-700 to-gray-900 text-white p-5 flex flex-col flex-shrink-0">
      <h2 className="text-xl font-bold text-center mb-5 italic">AuAdsTri</h2>
      <nav className="flex flex-col gap-3 flex-grow">
        {[
          { label: "Dashboard Overview", icon: <Home size={20} /> },
          { label: "Advertisement Management", icon: <MonitorSmartphone size={20} /> },
          { label: "Taxi Fleet Management", icon: <Car size={20} /> },
          { label: "Analytics & Reporting", icon: <BarChart size={20} /> },
          { label: "Ticketing System", icon: <Users size={20} /> },
          { label: "Uploads", icon: <Upload size={20} /> }, // ✅ Added Uploads Navigation
        ].map((item, index) => (
          <button
            key={index}
            className="flex items-center gap-2 text-left px-4 py-3 rounded-md transition duration-300 w-full hover:bg-gray-700"
            onClick={() => handleNavigation(item.label)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-3 mt-auto">
        <button
          className="flex items-center gap-2 px-4 py-3 rounded-md transition duration-300 w-full hover:bg-gray-700"
          onClick={() => handleNavigation("settings")}
        >
          <Settings size={20} />
          <span>Settings</span>
        </button>
        <button
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md transition duration-300 w-full"
          onClick={() => navigate("/login")} // ✅ Now redirects to Login Page
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
