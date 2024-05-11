import React from "react";
import TodoSectionLayout from "./TodoSection/TodoSectionLayout";
import SocialSectionLayout from "./SocialsSection/SocialSectionLayout";
import useHomeAuth from "../../hooks/useHomeAuth";
import NavigationComponent from "./NavigationSection/NavigationComponent";
const HomeComponent: React.FC = () => {
  useHomeAuth();
  return <div className="flex h-full w-full">
    <NavigationComponent />
    <TodoSectionLayout />
    <SocialSectionLayout />
  </div>;
};
export default HomeComponent;
