import React, { useState } from "react";
import FollowingAsideLayout from "./FollowingAsideLayout";
import SearchLayout from "./SearchLayout";
const RightAsideLayout: React.FC = () => {
    const [following, setFollowing] = useState<boolean>(true);
    return <div className="flex min-w-[35rem] flex-col items-center p-3 gap-5">
        <div className="flex text-2xl w-full border-b border-gray-700 justify-around">
            <header className={`cursor-pointer ${following?"":"text-slate-600"}`} onClick={()=>setFollowing(true)}>Following</header>
            <header className={`cursor-pointer ${following?"text-slate-600":""+"cursor-pointer"}`} onClick={()=>setFollowing(false)}>Search</header>
        </div>
        <div className="w-full h-full">
        {following?<FollowingAsideLayout/>:<SearchLayout/>}
        </div>
    </div>;
}
export default RightAsideLayout;