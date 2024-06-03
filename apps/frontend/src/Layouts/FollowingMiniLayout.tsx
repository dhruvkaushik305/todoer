import React from "react";
import FollowingAsideLayout from "./FollowingAsideLayout";
import { Link } from "react-router-dom";
const FollowingMiniLayout: React.FC = () => {
  return (
    <div className="block w-full p-2 pe-3 lg:hidden">
      <header className="m-2 flex w-full items-center justify-center text-2xl font-semibold">
        Following
      </header>
      <FollowingAsideLayout>
        <div className="flex w-full items-center justify-center p-3 text-xl">
          <Link to={"/home/search"}>
            <p className="underline">Search</p>
          </Link>
          <span> &nbsp; for users to follow</span>
        </div>
      </FollowingAsideLayout>
    </div>
  );
};
export default FollowingMiniLayout;
