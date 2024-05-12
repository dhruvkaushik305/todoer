import React from "react";
import { UserType } from "@repo/types/User";
import UserComponent from "./UserComponent";
interface SearchedUsersComponentProps {
    users: UserType[];
}
const SearchedUsersComponent: React.FC<SearchedUsersComponentProps> = (props) => {
    const { users } = props;
    return <div className="grow">
        {users.map((user) => <UserComponent key={user.id} user={user} />)}
    </div>
}
export default SearchedUsersComponent;