import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid lg:grid-cols-6">
      <div className="hidden lg:col-span-1 lg:block min-h-screen">
        <Sidebar />
      </div>
      <div className="lg:col-span-5">
        <Navbar />
        <div className="px-4 py-16 md:px-8 lg:px-12">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
