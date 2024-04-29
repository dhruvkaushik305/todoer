import { SearchedUser } from "@repo/types/User";
import React from "react";
import { getUser } from "../../../actions/userActions";
import Display from "./Display";
interface UserProps {
    user: SearchedUser;
}
const User: React.FC<UserProps> = (props) => {
    const { user } = props;
    const handleClick = async () => {
        const response = await getUser(user.id);
        console.log(response);
    }
    return <div className="bg-gray-200 m-2 p-4 rounded-md cursor-pointer" onClick={handleClick}>
        <p className="text-2xl">{user.name}</p>
        <p className="text-sm">{`@${user.username}`}</p>
    </div>
}
export default User;