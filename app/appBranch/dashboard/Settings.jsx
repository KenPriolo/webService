import React, { useState, useEffect } from "react";
import { useSidebar } from "../components/ui/SidebarContext";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

export default function SettingsPage() {
  const { isCollapsed } = useSidebar();
  const auth = getAuth();

  const [profile, setProfile] = useState({
    companyName: "Your Company",
    email: "",
  });

  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState("light");

  // Fetch logged-in user's info on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setProfile((prev) => ({
          ...prev,
          email: user.email,
        }));
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => alert("You have been signed out!"))
      .catch((error) => console.error("Logout Error:", error));
  };

  return (
    <div className={`min-h-screen relative transition-all duration-300 ${isCollapsed ? 'pl-5' : 'pl-0'}`}>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('../../../../assets/geo.jpg')" }}></div>
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="relative z-10 p-5">
        {/* Header */}
        <header className="flex justify-center items-center bg-white text-blue-900 p-5 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Settings</h1>
        </header>

        {/* Profile Info */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-5 border border-gray-300">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Profile Info</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                value={profile.email}
                disabled
                className="w-full p-3 border border-gray-300 rounded text-gray-500 bg-gray-100"
              />
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-5 border border-gray-300 flex flex-col gap-3">
          <button
            className="w-full bg-yellow-600 text-white p-3 rounded hover:bg-yellow-700 transition font-semibold"
            onClick={() => alert("Redirect to Change Password Page")}
          >
            Change Password
          </button>
          <button
            className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700 transition font-semibold"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
