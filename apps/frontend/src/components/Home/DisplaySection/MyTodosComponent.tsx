import React from "react";
import TodoListComponent from "./TodoListComponent";
import AddTodoComponent from "./AddTodoComponent";
import { useRecoilValue, useSetRecoilState } from "recoil";
import selectedUserAtom from "../../../store/user";
import { userData } from "../../../store/auth";
const MyTodosComponent: React.FC = () => {
    //TODO: Set the selected user as the current user
    const currentUser = useRecoilValue(userData);
    const setSelectedUser = useSetRecoilState(selectedUserAtom);
    setSelectedUser(currentUser);
    return <div className="h-full flex flex-col justify-between max-w-3/4">
        <TodoListComponent />
        <AddTodoComponent />
    </div>
};
export default MyTodosComponent;