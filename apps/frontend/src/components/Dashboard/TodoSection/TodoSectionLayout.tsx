import React from "react";
import Display from "./Display";
import Input from "./Input";
import useGetTodos from "../../../hooks/useGetTodos";
const TodoSectionLayout: React.FC = () => {
    useGetTodos();
    return <div className="w-1/3 bg-white flex flex-col">
        <Display />
        <Input />
    </div>;
}
export default TodoSectionLayout;