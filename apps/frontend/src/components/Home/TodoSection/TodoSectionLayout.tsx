import React from "react";
import Display from "./Display";
import Input from "./Input";
import useGetTodos from "../../../hooks/useGetTodos";
import { useRecoilValue } from "recoil";
import { userData } from "../../../store/auth";
const TodoSectionLayout: React.FC = () => {
    const user = useRecoilValue(userData);
    if (!user) return null;
    useGetTodos();
    return <div className="w-1/3 flex flex-col">
        <Display />
        <Input />
    </div>;
}
export default TodoSectionLayout;