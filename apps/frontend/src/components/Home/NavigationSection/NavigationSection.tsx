import React from "react";
import OptionsComponent from "./OptionsComponent";
import UserProfileComponent from "./UserProfileComponent";
const NavigationSection: React.FC = () => {
    return <div className="lg:w-1/4 lg:p-4 p-2 lg:border-r border-t border-gray-500 flex lg:flex-col lg:justify-between justify-center lg:h-full">
        <div className="flex lg:h-full lg:flex-col lg:justify-between gap-2">
            <OptionsComponent />
            <UserProfileComponent />
        </div>
    </div>;
}
export default NavigationSection;