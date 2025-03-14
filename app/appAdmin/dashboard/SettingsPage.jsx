import React from "react";

export default function SettingsPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Header */}
      <header className="flex justify-center items-center bg-gray-900 text-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">Settings</h1>
      </header>

      <div className="bg-white p-6 rounded-lg shadow-md mt-5 border border-gray-300">
        <h2 className="text-2xl font-semibold text-black">Settings Page</h2>
        <p className="text-gray-700 mt-2">
          This is the settings page where you can configure system settings.
        </p>
      </div>
    </div>
  );
}
