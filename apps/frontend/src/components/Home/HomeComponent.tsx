import React from "react";
import useHomeAuth from "../../hooks/useHomeAuth";
import DisplaySection from "./DisplaySection/DisplaySection";
import NavigationSection from "./NavigationSection/NavigationSection";
const HomeComponent: React.FC = () => {
  useHomeAuth();
  return <div className="flex h-full w-full">
    <NavigationSection />
    <DisplaySection />
  </div>;
};
export default HomeComponent;
