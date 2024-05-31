import React from "react";
import TodoListLayout from "./TodoListLayout";
import CardLayout from "./CardLayout";
import TodoInputLayout from "./TodoInputLayout";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-full max-w-[65rem] grow flex-col gap-5 p-3">
      <CardLayout />
      <TodoInputLayout />
      <TodoListLayout />
    </div>
  );
};
export default DashboardLayout;
