import React from "react";
import TodoListLayout from "./TodoListLayout";
import AddTodoComponent from "../components/Home/DisplaySection/AddTodoComponent";
import CardLayout from "./CardLayout";
const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-full min-w-[65rem] max-w-[65rem] flex-col gap-5 p-3">
      <CardLayout />
      <AddTodoComponent />
      <TodoListLayout />
    </div>
  );
};
export default DashboardLayout;
