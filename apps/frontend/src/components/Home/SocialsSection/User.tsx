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
    return <div className="bg-gray-200 m-2 p-4 rounded-md flex justify-between items-center" >
        <div className="cursor-pointer" onClick={handleClick}>
            <p className="text-2xl">{user.name}</p>
            <p className="text-sm">{`@${user.username}`}</p>
        </div>
        {follow ? <button className="px-3 py-2 rounded md border-2 border-black" onClick={unfollowHandler} disabled={disabled}>Unfollow</button> : <button className="px-3 py-2 bg-black rounded-md text-white" onClick={followHandler} disabled={disabled}>Follow</button>}
    </div>
}
export default User;