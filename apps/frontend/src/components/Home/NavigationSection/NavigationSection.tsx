import React from "react";
import OptionsComponent from "./OptionsComponent";
import UserProfileComponent from "./UserProfileComponent";
const NavigationSection: React.FC = () => {
    return <div className="lg:w-1/3 lg:p-4 p-1 border-r border-gray-500 flex flex-col justify-between">
        <OptionsComponent />
        <UserProfileComponent />
    </div>;
}
export default NavigationSection;