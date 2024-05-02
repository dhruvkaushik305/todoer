import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import selectedUserAtom from "../../../store/user";
import { userData } from "../../../store/auth";
const NavigationSectionLayout: React.FC = () => {
    const currentUser = useRecoilValue(userData);
    const setSelectedUser = useSetRecoilState(selectedUserAtom);
    const myTodosHandler = () => {
        setSelectedUser(currentUser);
    }
    return <div className="w-1/3 bg-white p-3">
        <div className="p-5 bg-gray-300 rounded-md cursor-pointer" onClick={myTodosHandler}>
            <p className="text-2xl">{currentUser?.name}</p>
            <p>{`@${currentUser?.username}`}</p>
        </div>
    </div>;
}
export default NavigationSectionLayout;