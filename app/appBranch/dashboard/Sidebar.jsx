import { useNavigate } from "react-router-dom";
import { Home, BarChart, Video, Users, Settings, LogOut, CalendarCheck } from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    const routes = {
      "Dashboard": "/branch-dashboard",
      "Advertisement Management": "/branch-dashboard/branch-advertisement-management",
      "Analytics & Reporting": "/branch-dashboard/branch-analytics-reporting",
      "Ticketing System": "/branch-dashboard/branch-ticketing-system",
      "Schedule & Duration": "/branch-dashboard/branch-schedule-duration",
      "Settings": "/branch-dashboard/branch-settings",
    };

    navigate(routes[page] || "/branch-dashboard");
  };

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-gray-700 to-gray-900 text-white flex flex-col flex-shrink-0">

      {/* Fixed Top */}
      <div className="p-5 flex-shrink-0">
        <h2 className="text-xl font-bold text-center italic">Branch Portal</h2>
      </div>

      {/* Scrollable Middle */}
      <div className="flex-grow overflow-y-auto px-3 space-y-0">
        {[
          { label: "Dashboard", icon: <Home size={20} /> },
          { label: "Advertisement Management", icon: <Video size={20} /> },
          { label: "Analytics & Reporting", icon: <BarChart size={20} /> },
          { label: "Ticketing System", icon: <Users size={20} /> },
          { label: "Schedule & Duration", icon: <CalendarCheck size={20} /> },
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
      </div>

      {/* Fixed Bottom */}
      <div className="flex flex-col gap-3 p-5 flex-shrink-0">
        <button
          className="flex items-center gap-2 px-2 py-3 rounded-md transition duration-300 w-full hover:bg-gray-700"
          onClick={() => handleNavigation("Settings")}
        >
          <Settings size={20} />
          <span>Settings</span>
        </button>
        <button
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-2 py-3 rounded-md transition duration-300 w-full"
          onClick={() => navigate("/branch-login")}
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}