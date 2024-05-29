import React from "react";
import { useParams } from "react-router-dom";
import useUserTodos from "../hooks/useUserTodos";
import { TodoType } from "@repo/types/Todo";
const ViewUserLayout: React.FC = () => {
  const { id } = useParams();
  if (!id) return <div>404</div>;
  const todos: TodoType[] = useUserTodos(id);
  console.log(todos);
  return <div className="h-full w-4/6 flex flex-col gap-5">
    <div>
      User ka card
    </div>
    <div className="flex flex-col gap-2">
      {todos.map((todo)=><div className="flex items-center gap-2 p-1">
        <input type="checkbox" readOnly checked={todo.completed} className="size-5"/>
        <span className={todo.completed? "line-through":""}>{todo.task}</span>
      </div>)}
    </div>
  </div>;
};
export default ViewUserLayout;
