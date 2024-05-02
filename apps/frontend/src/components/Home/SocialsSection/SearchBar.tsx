import React from "react";
import { SearchUser } from "../../../actions/userActions";
import { UserType } from "@repo/types/User";
import { CiSearch } from "react-icons/ci";
interface SearchBarProps {
    setUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
}
let timeout: NodeJS.Timeout | undefined;
const SearchBar: React.FC<SearchBarProps> = (props) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const { setUsers } = props;
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
    return <div className="flex bg-gray-700 items-center gap-2 px-2 py-1 rounded-3xl border border-zinc-500">
        <CiSearch className="size-7 text-zinc-300" />
        <input type="text" placeholder="Search by username" className="focus: outline-none w-full rounded-md p-2 bg-gray-700 text-zinc-200" ref={inputRef} onChange={searchHandler} />
    </div>
}
export default SearchBar