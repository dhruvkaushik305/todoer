import React, { useState } from "react";
import SocialSearchComponent from "../NavigationSection/SocialSearchComponent";
import { UserType } from "../../../../../../packages/types/userTypes.js";
import SearchedUsersComponent from "../NavigationSection/SearchedUsersComponent";
const ExploreComponent: React.FC = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    return <div className="w-full flex flex-col p-5 gap-3">
        <SocialSearchComponent setUsers={setUsers} />
        <SearchedUsersComponent users={users} />
    </div>
}
export default ExploreComponent;