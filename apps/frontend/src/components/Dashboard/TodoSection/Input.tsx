import React, { useRef } from "react";
const Input: React.FC = () => {
    const task = useRef<HTMLInputElement>(null);
    const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (task.current && task.current.value.trim() !== ""){
            console.log(task.current.value);
            task.current.value = "";
        }
    }
    return <div className=" p-2">
        <form className="flex gap-2" onSubmit={handleAddTodo}>
            <input type="text" placeholder="What're you doing today?"className="p-2 rounded-md w-full focus:outline-none text-xl border-2" ref={task}/>
            <button className="p-2 px-3 text-white rounded-md transition ease-in-out bg-black hover:bg-gray-700 hover:scale-90 duration-700">Add</button>
        </form>
    </div>;
}
export default Input;