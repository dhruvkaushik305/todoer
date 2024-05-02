import React from "react";
import Display from "./Display";
import Input from "./Input";
import { useRecoilValue } from "recoil";
import { userData } from "../../../store/auth";
import selectedUserAtom from "../../../store/user";
const TodoSectionLayout: React.FC = () => {
    const user = useRecoilValue(userData);
    const selectedUser = useRecoilValue(selectedUserAtom);
    return <div className="w-1/3 flex flex-col">
        <Display />
        {selectedUser?.id === user?.id && <Input />}
    </div>;
}
export default TodoSectionLayout;