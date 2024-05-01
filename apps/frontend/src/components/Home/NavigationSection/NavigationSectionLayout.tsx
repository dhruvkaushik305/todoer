import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import selectedUserAtom from "../../../store/user";
import { userData } from "../../../store/auth";
const NavigationSectionLayout: React.FC = () => {
    const currentUser = useRecoilValue(userData);
    // const setSelectedUser = useSetRecoilState(selectedUserAtom);
    const [selectedUser, setSelectedUser] = useRecoilState(selectedUserAtom);
    console.log(currentUser);
    const myTodosHandler = () => {
        setSelectedUser(currentUser);
    }
    useEffect(() => {
        console.log(selectedUser);
    }, [selectedUser]);
    return <div className="w-1/3 bg-white">
        <button className="px-3 py-2 bg-black text-white rounded-md" onClick={myTodosHandler}>My todos</button>
    </div>;
}
export default NavigationSectionLayout;