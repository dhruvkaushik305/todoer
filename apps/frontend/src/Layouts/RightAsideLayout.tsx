import React, { useState } from "react";
import FollowingAsideLayout from "./FollowingAsideLayout";
import SearchLayout from "./SearchLayout";
const RightAsideLayout: React.FC = () => {
  const [following, setFollowing] = useState<boolean>(true);
  return (
    <div className="flex min-w-[35rem] flex-col items-center divide-y divide-solid divide-slate-600">
      <div className="flex w-full items-center gap-1 p-2 text-2xl">
        <header
          className={`w-full cursor-pointer rounded-lg p-2 px-4 text-center ${following ? "bg-slate-500/20" : "text-slate-600"}`}
          onClick={() => setFollowing(true)}
        >
          Following
        </header>
        <header
          className={`w-full cursor-pointer rounded-lg p-2 px-4 text-center ${following ? "text-slate-600" : "bg-slate-500/20"}`}
          onClick={() => setFollowing(false)}
        >
          Search
        </header>
      </div>
      <div className="h-full w-full p-4">
        {following ? <FollowingAsideLayout /> : <SearchLayout />}
      </div>
    </div>
  );
};
export default RightAsideLayout;
