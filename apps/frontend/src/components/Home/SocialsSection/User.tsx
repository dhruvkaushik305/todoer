import { UserType } from "@repo/types/User";
import React from "react";
import { useSetRecoilState } from "recoil";
import selectedUserAtom from "../../../store/user";
interface UserProps {
    user: UserType;
}
const User: React.FC<UserProps> = (props) => {
    const setSelectedUser = useSetRecoilState(selectedUserAtom);
    const { user } = props;
    const handleClick = async () => {
        setSelectedUser(user);
    }
    return <div className="bg-gray-200 m-2 p-4 rounded-md cursor-pointer" onClick={handleClick}>
        <p className="text-2xl">{user.name}</p>
        <p className="text-sm">{`@${user.username}`}</p>
    </div>
}
export default User;