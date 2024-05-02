import React from "react";
import UserProfile from "./UserProfile";
const NavigationSectionLayout: React.FC = () => {
    return <div className="w-1/3 bg-black/60 p-3 border-r border-gray-500 flex flex-col-reverse">
        <UserProfile />
    </div>;
}
export default NavigationSectionLayout;