import React, { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { TodoType } from "@repo/types/Todo";
import { toast } from "sonner";
import todoAtom from "../store/todo";
import { createTodo } from "../actions/todoActions";
const TodoInputLayout: React.FC = () => {
  const setTodos = useSetRecoilState(todoAtom);
  const task = useRef<HTMLInputElement>(null);
  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let order = 0;
    if (task.current && task.current.value.trim() !== "") {
      //Updating the local state first
      setTodos((oldTodos) => {
        order = oldTodos.length;
        return [
          ...oldTodos,
          {
            id: Math.random().toString(36).substring(2, 9),
            order,
            task: task.current!.value,
            completed: false,
            postId: "1",
          } as TodoType,
        ];
      });
      //Updating the server
      const response: { success: boolean; data?: TodoType[]; error?: string } =
        await createTodo(task.current.value, order);
      if (response.success) {
        //Updating the local state with the correct values
        const newTodo: TodoType = response.data![order];
        setTodos((oldTodos) => {
          if (oldTodos) {
            return oldTodos.map((todo) => {
              if (todo.postId === "1") {
                return newTodo;
              } else return todo;
            });
          } else return [];
        });
        toast.success("Todo saved");
      } else {
        toast.error("Failed to save todo");
      }
      task.current.value = "";
    }
  };
  return (
    <div className="rounded-3xl bg-black/30 p-1 backdrop-blur-sm">
      <form className="flex gap-2 p-1 lg:p-3" onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Add a task"
          className="w-full bg-transparent p-1 text-xl text-white focus:outline-none"
          ref={task}
        />
        <button className="transform rounded-md bg-blue-600/90 p-2 px-4 text-white transition-transform duration-300 hover:scale-105 hover:ring-2">
          Add
        </button>
      </form>
    </div>
  );
};
export default TodoInputLayout;
