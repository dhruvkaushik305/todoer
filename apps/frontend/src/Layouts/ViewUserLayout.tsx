import React from "react";
import { useParams } from "react-router-dom";
import useUserTodos from "../hooks/useUserTodos";
import { TodoType } from "@repo/types/Todo";
const ViewUserLayout: React.FC = () => {
  const { id } = useParams();
  if (!id) return <div>404</div>;
  const todos: TodoType[] = useUserTodos(id);
  console.log(todos);
  return <div className="h-full w-full">{id}</div>;
};
export default ViewUserLayout;
