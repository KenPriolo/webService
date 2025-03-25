import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../../firebaseConfig";

export default function SettingsPage() {
  const [adminProfile, setAdminProfile] = useState({ name: "", email: "" });
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAdminProfile({
          name: user.displayName || "Admin User",
          email: user.email,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchSettings = async () => {
      const docRef = doc(db, "admin_config", "settings");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setMaintenanceMode(data.maintenanceMode || false);
        setTheme(data.theme || "light");
      }
    };
    fetchSettings();
  }, []);

  const handleToggleMaintenance = async () => {
    const docRef = doc(db, "admin_config", "settings");
    const updated = !maintenanceMode;
    setMaintenanceMode(updated);
    await updateDoc(docRef, { maintenanceMode: updated });
  };

  const handleToggleTheme = async () => {
    const docRef = doc(db, "admin_config", "settings");
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    await updateDoc(docRef, { theme: newTheme });
  };

  return (
    <div className={`bg-gray-100 min-h-screen p-5 ${theme === "dark" ? "bg-gray-900 text-white" : ""}`}>
      {/* Header */}
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Admin Settings</h1>
      </header>

      <div className="bg-white p-6 rounded-lg shadow-md mt-5 border border-gray-300 space-y-5">
        {/* Admin Info */}
        <div>
          <h2 className="text-lg font-semibold text-black">Admin Profile</h2>
          <p className="text-sm text-gray-700">Name: {adminProfile.name}</p>
          <p className="text-sm text-gray-700">Email: {adminProfile.email}</p>
        </div>

        {/* Maintenance Toggle */}
        <div className="flex justify-between items-center">
          <span className="text-black font-medium">Maintenance Mode</span>
          <button
            className={`px-3 py-1 rounded-full ${maintenanceMode ? "bg-red-500" : "bg-green-500"}`}
            onClick={handleToggleMaintenance}
          >
            {maintenanceMode ? "ON" : "OFF"}
          </button>
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-between items-center">
          <span className="text-black font-medium">System Theme</span>
          <button
            className={`px-3 py-1 rounded-full ${theme === "light" ? "bg-blue-500" : "bg-purple-500"}`}
            onClick={handleToggleTheme}
          >
            {theme === "light" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </div>
  );
}
