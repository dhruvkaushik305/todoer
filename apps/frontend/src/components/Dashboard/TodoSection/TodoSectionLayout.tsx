import React from "react";
import Display from "./Display";
import Input from "./Input";
const TodoSectionLayout: React.FC = () => {
    return <div className="w-1/3 bg-white flex flex-col">
        <Display/>
        <Input/>
    </div>;
}
export default TodoSectionLayout;