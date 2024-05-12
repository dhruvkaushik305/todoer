import React from "react";
import { Route, Routes } from "react-router-dom";
import MyTodosComponent from "./MyTodosComponent";
import ExploreComponent from "./ExploreComponent";
import UserTodosComponent from "./UserTodosComponent";
const DisplaySection: React.FC = () => {
    //TODO: The user searched should be set as the selected user
    return <div className="w-full flex flex-col">
        <Routes>
            <Route path="/mytodos" element={<MyTodosComponent />} />
            <Route path="/explore" element={<ExploreComponent />} />
            <Route path="/user/:id" element={<UserTodosComponent />} />
        </Routes>
    </div>;
}
export default DisplaySection;