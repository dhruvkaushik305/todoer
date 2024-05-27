import React from "react";
import DashboardLayout from "./DashboardLayout";
import { Route, Routes } from "react-router-dom";
import ViewUserLayout from "./ViewUserLayout";
const DisplayLayout: React.FC = () => {
  return (
    <div className="flex h-full grow flex-col items-center border-r border-gray-800">
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/view/:id" element={<ViewUserLayout />} />
      </Routes>
    </div>
  );
};
export default DisplayLayout;
