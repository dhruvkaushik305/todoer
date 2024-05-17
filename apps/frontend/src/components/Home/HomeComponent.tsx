import React from "react";
import useHomeAuth from "../../hooks/useHomeAuth";
import DisplaySection from "./DisplaySection/DisplaySection";
import NavigationSection from "./NavigationSection/NavigationSection";
import FollowingSection from "./FollowingSection/FollowingSection";
const HomeComponent: React.FC = () => {
  useHomeAuth();
  return <div className="lg:flex lg:flex-row h-full w-full flex flex-col-reverse">
    <NavigationSection />
    <DisplaySection />
    <FollowingSection />
  </div>;
};
export default HomeComponent;
