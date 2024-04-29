import React from "react"
import SearchBar from "./SearchBar";
import Display from "./Display";
const SocialSectionLayout: React.FC = () => {
    return <div className="w-1/3 h-full p-5">
        <SearchBar />
        <Display />
    </div>;
}
export default SocialSectionLayout;