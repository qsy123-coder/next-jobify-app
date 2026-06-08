import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>share content</div>
      {children}
    </div>
  );
};

export default DashboardLayout;
