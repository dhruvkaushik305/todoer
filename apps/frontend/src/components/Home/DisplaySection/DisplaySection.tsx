import React from "react";
import { Route, Routes } from "react-router-dom";
import MyTodosComponent from "./MyTodosComponent";
import ExploreComponent from "./ExploreComponent";
import UserTodosComponent from "./UserTodosComponent";
import FollowingSection from "../FollowingSection/FollowingSection";
const DisplaySection: React.FC = () => {
    return <div className="w-full h-full flex justify-center">
        <Routes>
            <Route path="/" element={<MyTodosComponent />} />
            <Route path="/explore" element={<ExploreComponent />} />
            <Route path="/user/:id" element={<UserTodosComponent />} />
            <Route path="/following/*" element={<FollowingSection />} />
        </Routes>
    </div>;
}
export default DisplaySection;