import React from "react";
import NavigationSectionLayout from "./NavigationSection/NavigationSectionLayout";
import TodoSectionLayout from "./TodoSection/TodoSectionLayout";
import SocialSectionLayout from "./SocialsSection/SocialSectionLayout";
const DashboardLayout: React.FC = () => {
  return <div className="flex h-full w-full">
    <NavigationSectionLayout/>
    <TodoSectionLayout/>
    <SocialSectionLayout/>
  </div>;
};
export default DashboardLayout;
