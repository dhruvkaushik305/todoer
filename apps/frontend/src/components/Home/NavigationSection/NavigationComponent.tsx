import React from "react";
import UserProfile from "./UserProfile";
import Options from "./Options";
const NavigationComponent: React.FC = () => {
    return <div className="lg:w-1/3 p-4 border-r border-gray-500 flex flex-col justify-between">
        <Options />
        <UserProfile />
    </div>;
}
export default NavigationComponent;