import React, { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { TodoType } from "@repo/types/Todo";
import { toast } from "sonner";
import { createTodo } from "../../../actions/todoActions";
import todoAtom from "../../../store/todo";
const Input: React.FC = () => {
    const setTodos = useSetRecoilState(todoAtom);
    const task = useRef<HTMLInputElement>(null);
    const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let order = 0;
        if (task.current && task.current.value.trim() !== "") {
            //Updating the local state first
            setTodos((oldTodos) => {
                if (oldTodos) {
                    order = oldTodos.length
                    return [...oldTodos, {
                        id: Math.random().toString(36).substring(2, 9),
                        order,
                        task: task.current!.value,
                        completed: false,
                        userId: "1"
                    } as TodoType
                    ]
                } else return [];
            })
            //Updating the server
            const response: { success: boolean, data?: TodoType } = await createTodo(task.current.value, order);
            if (response.success) {
                //Updating the local state with the correct values
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
    return <div className="bg-sky-200 p-2 border-t-2 border-gray-400">
        <form className="flex gap-2" onSubmit={handleAddTodo}>
            <input type="text" placeholder="What're you doing today?" className="p-2 rounded-md w-full focus:outline-none text-xl border-2" ref={task} />
            <button className="p-2 px-3 text-white rounded-md transition ease-in-out bg-black hover:bg-gray-700 hover:scale-90 duration-700 text-nowrap">Add Task</button>
        </form>
    </div>;
}
export default Input;