import React from "react";
import { UserType } from "../../../../../../packages/types/userTypes.js";
import { getFollowingAction } from "../../../actions/userActions";
import UserComponent from "./UserComponent";
import { Route, Routes } from "react-router-dom";
const FollowingSection: React.FC = () => {
    const [following, setFollowing] = React.useState<{ followers: UserType }[] | null>(null);
    //TODO: Create a hook to get the user's following
    React.useEffect(() => {
        getFollowingAction().then((res) => {
            if (res.success) {
                setFollowing(res.data!);
            } else { setFollowing(null); }
        })
    }, []);
    return <Routes>
        <Route path="*" element={<div className="w-1/3 xl:flex xl:flex-col p-2 xl:border-l xl:border-gray-600 text-white hidden">
            <h1 className="text-3xl text-center font-sans border-b border-gray-600 pb-2">Following</h1>
            <div className="flex flex-col gap-4 text-center p-2 overflow-scroll overflow-x-hidden">
                {following && following.length === 0 && <p className="text-lg font-sans">You are not following anyone</p>}
                {following && following.map((follower) => (
                    <UserComponent key={follower.followers.id} user={follower.followers} />
                ))}
            </div>
        </div>} />
    </Routes>
}
export default FollowingSection;