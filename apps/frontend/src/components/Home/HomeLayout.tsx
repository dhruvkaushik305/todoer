import React from "react";
import NavigationSectionLayout from "./NavigationSection/NavigationSectionLayout";
import TodoSectionLayout from "./TodoSection/TodoSectionLayout";
import SocialSectionLayout from "./SocialsSection/SocialSectionLayout";
import useHomeAuth from "../../hooks/useHomeAuth";
const HomeLayout: React.FC = () => {
  useHomeAuth();
  return <div className="flex h-full w-full">
    <NavigationSectionLayout />
    <TodoSectionLayout />
    <SocialSectionLayout />
  </div>;
};
export default HomeLayout;
