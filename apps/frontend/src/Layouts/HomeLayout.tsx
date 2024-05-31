import React from "react";
import useHomeAuth from "../hooks/useHomeAuth";
import DisplayLayout from "./DisplayLayout";
import RightAsideLayout from "./RightAsideLayout";
import RightAsideMiniLayout from "./RightAsideMiniLayout";
const HomeLayout: React.FC = () => {
  useHomeAuth();
  return (
    <div className="relative flex h-full w-full flex-col">
      <DisplayLayout />
      <RightAsideLayout />
      <RightAsideMiniLayout />
    </div>
  );
};
export default HomeLayout;
