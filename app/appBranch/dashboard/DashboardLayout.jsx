import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../appBranch/dashboard/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar - Always Visible */}
      <Sidebar />
      {/* Main Content - Changes Based on Route */}
      <div className="flex-1 p-5 h-screen overflow-y-auto bg-gray-100">
        <Outlet /> {/* Dynamically loads the selected page */}
      </div>
    </div>
  );
}
