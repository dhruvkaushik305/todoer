import React from "react"
import SearchBar from "./SearchBar";
import Display from "./Display";
import { UserType } from "@repo/types/User";
const SocialSectionLayout: React.FC = () => {
    const [users, setUsers] = React.useState<UserType[]>([]);
    return <div className="w-1/3 h-full p-5 bg-black/60 border-l border-gray-500 flex flex-col gap-4">
        <SearchBar setUsers={setUsers} />
        <Display users={users} />
    </div>;
}
export default SocialSectionLayout;