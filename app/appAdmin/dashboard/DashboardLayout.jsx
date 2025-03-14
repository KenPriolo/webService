import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar - Always Visible */}
      <Sidebar />

      {/* Main Content - Changes Based on Route */}
      <div className="flex-1 p-5 h-screen overflow-y-auto bg-gray-100">
        <Outlet /> {/* This dynamically loads the selected dashboard page */}
      </div>
    </div>
  );
}
