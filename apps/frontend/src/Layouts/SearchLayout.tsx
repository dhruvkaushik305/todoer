import { UserType } from "@repo/types/User";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { SearchUser } from "../actions/userActions";
import SearchedUserLayout from "./SearchedUserLayout";
let timeout: NodeJS.Timeout | undefined;
interface SearchedUser extends UserType {
  following: boolean;
}
const SearchLayout: React.FC = () => {
  const [users, setUsers] = useState<SearchedUser[] | null>(null);
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
    }, 1000);
  };
  return (
    <div className="flex h-full w-full flex-col items-center gap-5 px-2">
      <div className="flex w-full items-center gap-2 rounded-lg bg-sky-300/40 p-1">
        <IoSearch className="size-8 p-1" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent p-2 text-xl focus:outline-none"
          ref={inputRef}
          onChange={searchHandler}
        />
      </div>
      <div className="flex w-full flex-col gap-3">
        {users &&
          (users.length > 0 ? (
            users.map((user) => (
              <SearchedUserLayout key={user.id} user={user} />
            ))
          ) : (
            <div className="text-center">No users found</div>
          ))}
      </div>
    </div>
  );
};
export default SearchLayout;
