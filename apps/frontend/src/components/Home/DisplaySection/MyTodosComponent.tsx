import React from "react";
import TodoListComponent from "./TodoListComponent";
import AddTodoComponent from "./AddTodoComponent";
import { useRecoilValue, useSetRecoilState } from "recoil";
import selectedUserAtom from "../../../store/user";
import { userData } from "../../../store/authStore";
const MyTodosComponent: React.FC = () => {
  const currentUser = useRecoilValue(userData);
  const setSelectedUser = useSetRecoilState(selectedUserAtom);
  setSelectedUser(currentUser);
  return (
    <div className="flex h-full w-3/4 flex-col justify-between">
      <TodoListComponent />
      <AddTodoComponent />
    </div>
  );
};
export default MyTodosComponent;
