import { useNavigate } from "react-router-dom";
import { Home, BarChart, MapPin, Car, Users, MonitorSmartphone, Settings, LogOut, Upload, Calendar, Calculator, ChevronsLeft, ChevronsRight  } from "lucide-react";
import { useSidebar } from "../components/ui/SidebarContext";

export default function Sidebar() {
  const navigate = useNavigate();
  const { isCollapsed, setIsCollapsed } = useSidebar();

  const handleNavigation = (page) => {
    const routes = {
      "Dashboard Overview": "/admin-dashboard",
      "Ads Management": "/admin-dashboard/admin-advertisement-management",
      "Taxi Fleet Management": "/admin-dashboard/admin-taxi-fleet-management",
      "Analytics & Reporting": "/admin-dashboard/admin-analytics-reporting",
      "Uploads": "/admin-dashboard/admin-uploads",
      "Locations": "/admin-dashboard/admin-locations",
      "Schedule & Duration": "/admin-dashboard/admin-schedule-duration",
      "CTR & Conversions": "/admin-dashboard/admin-ctr-conversions",
      "Ticketing System": "/admin-dashboard/admin-ticketing-system",
      "Settings": "/admin-dashboard/admin-settings",
    };

    navigate(routes[page] || "/admin-dashboard");
  };

  return (
    <div className={`h-screen ${isCollapsed ? "w-20" : "w-64"} bg-gradient-to-b from-white to-gray-100 text-blue-900 flex flex-col flex-shrink-0 border-r border-gray-200 shadow-lg transition-all duration-300`}>
      {/* Toggle Button */}
      <div className="flex justify-end p-3">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="bg-blue-900 text-white p-2 rounded hover:bg-blue-800 transition"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <ChevronsRight size={18} /> : <ChevronsLeft size={18} />}
        </button>
      </div>

      {/* Header */}
      {!isCollapsed && (
        <div className="p-5 flex-shrink-0 border-b border-gray-300">
          <h2 className="text-xl font-bold text-center">AuAdstri Admin</h2>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-grow flex flex-col gap-2 px-3 py-6 overflow-y-auto">
        {[ 
          { label: "Dashboard Overview", icon: <Home size={20} /> },
          { label: "Ads Management", icon: <MonitorSmartphone size={20} /> },
          { label: "Taxi Fleet Management", icon: <Car size={20} /> },
          { label: "Analytics & Reporting", icon: <BarChart size={20} /> },
          { label: "Uploads", icon: <Upload size={20} /> },
          { label: "Locations", icon: <MapPin size={20} /> },
          { label: "Schedule & Duration", icon: <Calendar size={20} /> },
          { label: "CTR & Conversions", icon: <Calculator size={20} /> },
          { label: "Ticketing System", icon: <Users size={20} /> },
        ].map((item, index) => (
          <button
            key={index}
            title={isCollapsed ? item.label : ""}
            className={`flex ${isCollapsed ? "justify-center" : "justify-start gap-3"} items-center px-3 py-3 rounded-md transition duration-300 hover:bg-blue-100 text-sm font-medium`}
            onClick={() => handleNavigation(item.label)}
          >
            <span className="text-blue-700">{item.icon}</span>
            {!isCollapsed && item.label}
          </button>
        ))}
      </nav>


      {/* Footer */}
      <div className="flex flex-col gap-3 p-5 flex-shrink-0 px-3 py-5 border-t border-gray-300 space-y-2">
        <button
          title={isCollapsed ? "Settings" : ""}
          className={`flex ${isCollapsed ? "justify-center" : "justify-start gap-3"} items-center px-3 py-3 w-full hover:bg-blue-100 text-sm font-medium`}
          onClick={() => handleNavigation("Settings")}
        >
          <Settings size={20} />
          {!isCollapsed && "Settings"}
        </button>
        <button
          title={isCollapsed ? "Logout" : ""}
          className={`flex ${isCollapsed ? "justify-center" : "justify-start gap-3"} items-center px-3 py-3 w-full bg-blue-900 hover:bg-blue-800 text-white rounded-md text-sm font-medium`}
          onClick={() => navigate("/admin-login")}
        >
          <LogOut size={18} />
          {!isCollapsed && "Logout"}
        </button>
      </div>
    </div>
  );
}
