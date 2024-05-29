import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FollowUser, UnfollowUser } from "../actions/userActions";
import { UserType } from "@repo/types/User";
type UserComponentProps = {
    user: UserType & { following: boolean };
}
const SearchedUserLayout: React.FC<UserComponentProps> = ({user}) => {
    console.log(user);
    const [follow, setFollow] = useState(user.following);
    const [disabled, setDisabled] = useState(false);
    const followHandler = async () => {
        setDisabled(true);
        const response = await FollowUser(user.id);
        if (response.success) {
            setFollow(true);
        }
        setDisabled(false);
    }
    const unfollowHandler = async () => {
        setDisabled(true);
        const response = await UnfollowUser(user.id);
        if (response.success) {
            setFollow(false);
        }
        setDisabled(false);
    }
    return <div className="p-4 bg-gray-600 rounded-2xl flex gap-4 items-center justify-between">
        <Link to={"/home/profile/"+user.id} className="cursor-pointer">
        <div className="transition ease-in-out bg-stone-500/55 border-2 border-stone-500/55 hover:bg-stone hover:border-2 hover:border-zinc-400 hover:scale-95 duration-300 rounded-full flex items-center justify-center size-14 text-white cursor-pointer">{user?.name[0].toUpperCase()}</div>
        </Link>
        <div className="cursor-pointer grow text-zinc-200">
            <p className="text-2xl text-nowrap">{user.name}</p>
            <p className="text-sm">{`@${user.username}`}</p>
        </div>
        {follow ? <button className="px-3 py-2 bg-gray-800 rounded-md text-white transition-transform duration-150 hover:scale-95" onClick={unfollowHandler} disabled={disabled}>Unfollow</button> : <button className="px-3 py-2 bg-gray-800 rounded-md text-zinc-200 transition-transform duration-150 hover:scale-95" onClick={followHandler} disabled={disabled}>Follow</button>}
    </div>
}
export default SearchedUserLayout;