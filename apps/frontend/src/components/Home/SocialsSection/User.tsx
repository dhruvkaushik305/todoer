import { UserType } from "@repo/types/User";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import selectedUserAtom from "../../../store/user";
import { FollowUser, UnfollowUser } from "../../../actions/userActions";
interface UserProps {
    user: UserType;
}
const User: React.FC<UserProps> = (props) => {
    const [follow, setFollow] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const setSelectedUser = useSetRecoilState(selectedUserAtom);
    const { user } = props;
    const handleClick = async () => {
        setSelectedUser(user);
    }
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
    //TODO: Redirect to user profile
    return <div className="p-4 bg-gray-600 rounded-2xl flex gap-4 items-center" >
        <div className="transition ease-in-out bg-stone-500/55 border-2 border-stone-500/55 hover:bg-stone hover:border-2 hover:border-zinc-400 hover:scale-95 duration-300 rounded-full flex items-center justify-center size-14 text-white cursor-pointer">{user?.name[0].toUpperCase()}</div>
        <div className="cursor-pointer grow text-zinc-200" onClick={handleClick}>
            <p className="text-2xl">{user.name}</p>
            <p className="text-sm">{`@${user.username}`}</p>
        </div>
        {follow ? <button className="px-3 py-2 bg-gray-800 rounded-md text-white transition-transform duration-150 hover:scale-95" onClick={unfollowHandler} disabled={disabled}>Unfollow</button> : <button className="px-3 py-2 bg-gray-800 rounded-md text-zinc-200 transition-transform duration-150 hover:scale-95" onClick={followHandler} disabled={disabled}>Follow</button>}
    </div>
}
export default User;