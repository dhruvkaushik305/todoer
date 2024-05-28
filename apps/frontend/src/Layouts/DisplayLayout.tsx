import React from "react";
import DashboardLayout from "./DashboardLayout";
import { Route, Routes } from "react-router-dom";
import ViewUserLayout from "./ViewUserLayout";
import UserProfile from "./UserProfile";
const DisplayLayout: React.FC = () => {
  return (
    <div className="flex h-full grow flex-col items-center border-r border-gray-800">
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/view/:id" element={<ViewUserLayout />} />
        <Route path="/profile/:id" element={<UserProfile />} />
      </Routes>
    </div>
  );
};
export default DisplayLayout;
