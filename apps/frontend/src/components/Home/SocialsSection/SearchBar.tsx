import React from "react";
import { SearchUser } from "../../../actions/userActions";
import { SearchedUser } from "@repo/types/User";
interface SearchBarProps {
    setUsers: React.Dispatch<React.SetStateAction<SearchedUser[]>>;
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
                console.log(response);
                if (response.success) {
                    setUsers(response.data!);
                } else {
                    setUsers([]);
                }
            }
        }, 1000)
    }
    return <div>
        <input type="text" placeholder="Search by username" className="focus: outline-none border-2 border-gray-300 w-full rounded-md p-2" ref={inputRef} onChange={searchHandler} />
    </div>
}
export default SearchBar