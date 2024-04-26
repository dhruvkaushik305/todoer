import React, { useRef } from "react";
import { useSetRecoilState } from "recoil";
import todoSelector from "../../../store/todo";
import { TodoType } from "@repo/types/Todo";
import { toast } from "sonner";
import { createTodo } from "../../../actions/todoActions";
const Input: React.FC = () => {
    const setTodos = useSetRecoilState(todoSelector);
    const task = useRef<HTMLInputElement>(null);
    const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (task.current && task.current.value.trim() !== "") {
            setTodos((oldTodos) => {
                if (oldTodos) {
                    return [...oldTodos, {
                        id: Math.random().toString(36).substring(2, 9),
                        order: oldTodos.length,
                        task: task.current!.value,
                        completed: false,
                        userId: "1"
                    } as TodoType
                    ]
                } else return [];
            })
            const response: { success: boolean, data?: TodoType } = await createTodo(task.current.value);
            if (response.success) {
                const newTodo: TodoType = response.data!;
                setTodos((oldTodos) => {
                    if (oldTodos) {
                        return oldTodos.map((todo) => {
                            if (todo.userId === "1") {
                                return newTodo;
                            } else return todo;
                        })
                    } else return [];
                })
                toast.success("Todo saved");
            }
            else {
                toast.error("Failed to save todo");
            }
            task.current.value = "";
        }
    }
    return <div className=" p-2">
        <form className="flex gap-2" onSubmit={handleAddTodo}>
            <input type="text" placeholder="What're you doing today?" className="p-2 rounded-md w-full focus:outline-none text-xl border-2" ref={task} />
            <button className="p-2 px-3 text-white rounded-md transition ease-in-out bg-black hover:bg-gray-700 hover:scale-90 duration-700">Add</button>
        </form>
    </div>;
}
export default Input;