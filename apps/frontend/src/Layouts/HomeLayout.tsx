import React from "react";
import Display from "./Display";
import FollowingLayout from "./FollowingLayout";
const HomeLayout: React.FC = () => {
  return (
    <div className="flex h-full w-full text-white">
      <Display />
      <FollowingLayout />
    </div>
  );
};
export default HomeLayout;
