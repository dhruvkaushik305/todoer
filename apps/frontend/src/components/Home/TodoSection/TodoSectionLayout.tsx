import React from "react";
import Display from "./Display";
import Input from "./Input";
import { useRecoilValue } from "recoil";
import { userData } from "../../../store/auth";
import selectedUserAtom from "../../../store/user";
const TodoSectionLayout: React.FC = () => {
    const user = useRecoilValue(userData);
    const selectedUser = useRecoilValue(selectedUserAtom);
    return <div className="w-2/4 flex flex-col bg-black/60">
        <Display />
        {selectedUser?.id === user?.id && <Input />}
    </div>;
}
export default TodoSectionLayout;