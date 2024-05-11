import React from "react";
import UserProfile from "./UserProfile";
import Explore from "./Explore";
const NavigationComponent: React.FC = () => {
    return <div className="lg:w-1/3 p-3 border-r border-gray-500 flex flex-col gap-4">
        <UserProfile />
        <Explore />
    </div>;
}
export default NavigationComponent;