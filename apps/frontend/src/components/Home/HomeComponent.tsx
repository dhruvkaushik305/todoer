import React from "react";
import useHomeAuth from "../../hooks/useHomeAuth";
import NavigationComponent from "./NavigationSection/NavigationComponent";
import DisplaySection from "./DisplaySection/DisplaySection";
const HomeComponent: React.FC = () => {
  useHomeAuth();
  return <div className="flex h-full w-full">
    <NavigationComponent />
    <DisplaySection />
  </div>;
};
export default HomeComponent;
