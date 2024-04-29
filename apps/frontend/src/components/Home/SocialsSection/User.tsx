import { SearchedUser } from "@repo/types/User";
import React from "react";
interface UserProps {
    user: SearchedUser;
}
const User: React.FC<UserProps> = (props) => {
    const { user } = props;
    return <div className="bg-gray-200 m-2 p-4 rounded-md cursor-pointer">
        <p className="text-2xl">{user.name}</p>
        <p className="text-sm">{`@${user.username}`}</p>
    </div>
}
export default User;