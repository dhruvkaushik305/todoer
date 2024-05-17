import React, { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { TodoType } from "@repo/types/Todo";
import { toast } from "sonner";
import { createTodo } from "../../../actions/todoActions";
import todoAtom from "../../../store/todo";
const AddTodoComponent: React.FC = () => {
    const setTodos = useSetRecoilState(todoAtom);
    const task = useRef<HTMLInputElement>(null);
    const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let order = 0;
        if (task.current && task.current.value.trim() !== "") {
            //Updating the local state first
            setTodos((oldTodos) => {
                order = oldTodos.length
                return [...oldTodos, {
                    id: Math.random().toString(36).substring(2, 9),
                    order,
                    task: task.current!.value,
                    completed: false,
                    postId: "1"
                } as TodoType
                ]
                if (oldTodos) {

                } else return [];
            })
            //Updating the server
            const response: { success: boolean, data?: TodoType[], error?: string } = await createTodo(task.current.value, order);
            if (response.success) {
                //Updating the local state with the correct values
                const newTodo: TodoType = response.data![order];
                setTodos((oldTodos) => {
                    if (oldTodos) {
                        return oldTodos.map((todo) => {
                            if (todo.postId === "1") {
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
    return <div className="border-t border-gray-500 p-3">
        <form className="flex gap-2" onSubmit={handleAddTodo}>
            <input type="text" placeholder="What're you doing today?" className="p-2 rounded-md w-full focus:outline-none focus:outline-gray-600 text-xl bg-gray-700 text-white" ref={task} />
            <button className="p-2 px-3 text-white rounded-md text-nowrap transition ease-in-out bg-blue hover:bg-navyBlue hover:scale-95 duration-300">Add Task</button>
        </form>
    </div>;
}
export default AddTodoComponent;