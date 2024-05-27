import React from "react";
import FollowingAsideLayout from "./FollowingAsideLayout";
import useHomeAuth from "../hooks/useHomeAuth";
import DisplayLayout from "./DisplayLayout";
const HomeLayout: React.FC = () => {
  useHomeAuth();
  return (
    <div className="flex h-full w-full text-white">
      <DisplayLayout />
      <FollowingAsideLayout />
    </div>
  );
};
export default HomeLayout;
