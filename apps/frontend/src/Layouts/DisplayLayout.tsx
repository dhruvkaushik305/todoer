import React from "react";
import DashboardLayout from "./DashboardLayout";
import { Route, Routes } from "react-router-dom";
import ViewUserLayout from "./ViewUserLayout";
import UserProfile from "./UserProfile";
import FollowingMiniLayout from "./FollowingMiniLayout";
import SearchMiniLayout from "./SearchMiniLayout";
const DisplayLayout: React.FC = () => {
  return (
    <div className="flex h-full grow justify-center border-r border-gray-700 pt-[3rem] lg:p-0">
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/view/:id" element={<ViewUserLayout />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/following" element={<FollowingMiniLayout />} />
        <Route path="/search" element={<SearchMiniLayout />} />
      </Routes>
    </div>
  );
};
export default DisplayLayout;
