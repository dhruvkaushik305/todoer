import React from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const MyTodos: React.FC = () => {
    const navigate = useNavigate();
    return <div className="text-white flex justify-center items-center gap-2 h-[4rem] p-2 lg:hover:border-none hover:border-2 hover:border-gray-600 lg:rounded-2xl rounded-full cursor-pointer bg-zinc-500/40 aspect-square" onClick={() => navigate("/home/mytodos")}>
        <MdOutlineEditNote className="size-9" />
        <p className="lg:block hidden">My Todos</p>
    </div>;
};
export default MyTodos;