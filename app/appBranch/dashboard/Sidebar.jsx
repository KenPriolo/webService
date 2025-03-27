import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, BarChart, Video, Users, Settings, LogOut, CalendarCheck, ChevronsLeft, ChevronsRight, CloudUpload } from "lucide-react";
import { useSidebar } from "../components/ui/SidebarContext";
import { auth, db } from "../../../firebaseConfig"; // Update path if needed
import { doc, getDoc } from "firebase/firestore";

export default function Sidebar() {
  const navigate = useNavigate();
  const { isCollapsed, setIsCollapsed } = useSidebar();
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const fetchUserFullName = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "accounts", user.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFullName(docSnap.data().fullName || "");
        }
      }
    };

    fetchUserFullName();
  }, []);

  const handleNavigation = (page) => {
    const routes = {
      "Dashboard": "/branch-dashboard",
      "Ads Management": "/branch-dashboard/branch-advertisement-management",
      "Analytics & Reporting": "/branch-dashboard/branch-analytics-reporting",
      "Ticketing System": "/branch-dashboard/branch-ticketing-system",
      "Schedule & Duration": "/branch-dashboard/branch-schedule-duration",
      "Settings": "/branch-dashboard/branch-settings",
      "Uploads": "/branch-dashboard/branch-uploads",
    };
    navigate(routes[page] || "/branch-dashboard");
  };

  return (
    <div className={`h-screen ${isCollapsed ? "w-20" : "w-64"} bg-gradient-to-b from-white to-gray-100 text-blue-900 flex flex-col flex-shrink-0 border-r border-gray-200 shadow-lg transition-all duration-300`}>
      
      {/* Header Row: Toggle + Name */}
      <div className="flex justify-between items-center p-3">
        {!isCollapsed && (
          <span className="text-sm font-medium text-blue-900 truncate max-w-[200px]">Welcome, {fullName}</span>
        )}
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
          <h2 className="text-xl font-bold text-center">Branch Portal</h2>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-grow flex flex-col gap-2 px-3 py-6 overflow-y-auto">
        {[ 
          { label: "Dashboard", icon: <Home size={20} /> },
          { label: "Ads Management", icon: <Video size={20} /> },
          { label: "Uploads", icon: <CloudUpload size={20} /> },
          { label: "Analytics & Reporting", icon: <BarChart size={20} /> },
          { label: "Schedule & Duration", icon: <CalendarCheck size={20} /> },
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
      <div className="px-3 py-5 border-t border-gray-300 space-y-2">
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
          onClick={() => navigate("/login")}
        >
          <LogOut size={18} />
          {!isCollapsed && "Logout"}
        </button>
      </div>
    </div>
  );
}
