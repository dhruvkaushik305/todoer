import React from "react";
import Display from "./Display";
import FollowingAsideLayout from "./FollowingAsideLayout";
import useHomeAuth from "../hooks/useHomeAuth";
const HomeLayout: React.FC = () => {
  useHomeAuth();
  return (
    <div className="flex h-full w-full text-white">
      <Display />
      <FollowingAsideLayout />
    </div>
  );
};
export default HomeLayout;
