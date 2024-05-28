import React from "react";
import useHomeAuth from "../hooks/useHomeAuth";
import DisplayLayout from "./DisplayLayout";
import RightAsideLayout from "./RightAsideLayout";
const HomeLayout: React.FC = () => {
  useHomeAuth();
  return (
    <div className="flex h-full w-full">
      <DisplayLayout />
      <RightAsideLayout/>
    </div>
  );
};
export default HomeLayout;
