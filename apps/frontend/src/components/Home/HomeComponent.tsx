import React from "react";
import useHomeAuth from "../../hooks/useHomeAuth";
import DisplaySection from "./DisplaySection/DisplaySection";
import NavigationSection from "./NavigationSection/NavigationSection";
const HomeComponent: React.FC = () => {
  useHomeAuth();
  return <div className="lg:flex lg:flex-row h-full w-full flex flex-col-reverse">
    <NavigationSection />
    <DisplaySection />
  </div>;
};
export default HomeComponent;
