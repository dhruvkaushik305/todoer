import { UserType } from "@repo/types/User";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { SearchUser } from "../actions/userActions";
import SearchedUserLayout from "./SearchedUserLayout";
let timeout: NodeJS.Timeout | undefined;
interface SearchedUser extends UserType{ 
    following: boolean;
}
const SearchLayout: React.FC = () => {
    const [users,setUsers] = useState<SearchedUser[] | null>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const searchHandler = () => {
        clearTimeout(timeout);
        timeout = setTimeout(async () => {
            if (inputRef.current && inputRef.current.value !== "") {
                const response = await SearchUser(inputRef.current.value);
                if (response.success) {
                    setUsers(response.data!);
                } else {
                    setUsers([]);
                }
            }
        }, 1000)
    }
  return <div className="w-full h-full flex flex-col items-center px-5 gap-5">
    <div className="flex bg-slate-600 items-center p-1 rounded-lg w-full gap-2">
        <IoSearch className="size-7" />
        <input type="text" placeholder="Search" className="bg-transparent p-2 w-full focus:outline-none" ref={inputRef} onChange={searchHandler}/>
    </div>
    <div className="flex flex-col gap-3 w-full">
        {users && (users.length > 0?users.map((user)=>(<SearchedUserLayout key={user.id} user={user} />)):<div className="text-center">No users found</div>)}
    </div>
  </div>;
};
export default SearchLayout;