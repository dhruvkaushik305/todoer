import React from "react";
import DashboardLayout from "./DashboardLayout";
const Display: React.FC = () => {
  return (
    <div className="flex h-full grow flex-col items-center border-r border-gray-800">
      <DashboardLayout />
    </div>
  );
};
export default Display;
