import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../appBranch/dashboard/Sidebar";
import { SidebarProvider } from "../components/ui/SidebarContext";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 p-5 h-screen overflow-y-auto bg-gray-100">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
}