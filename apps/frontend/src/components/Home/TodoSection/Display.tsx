import React, { useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Todo from "./Todo";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { TodoType } from "@repo/types/Todo";
import { editOrder } from "../../../actions/todoActions";
import { toast } from "sonner";
import todoAtom from "../../../store/todo";
import selectedUserAtom from "../../../store/user";
import useGetTodos from "../../../hooks/useGetTodos";
const Display: React.FC = () => {
    useGetTodos();
    let timeout = useRef<NodeJS.Timeout>();
    const selectedUser = useRecoilValue(selectedUserAtom);
    const [todos, setTodos] = useRecoilState<TodoType[]>(todoAtom);
    const dragHandler = (event: any) => {
        const { active, over } = event;
        if (active.id === over.id) return;
        const oldIndex = todos.findIndex((todo) => todo.id === active.id);
        const newIndex = todos.findIndex((todo) => todo.id === over.id);
        setTodos(() => {
            return arrayMove(todos, oldIndex, newIndex)
        });
        clearTimeout(timeout.current);
        timeout.current = setTimeout(async () => {
            const update1 = editOrder(active.id, newIndex);
            const update2 = editOrder(over.id, oldIndex);
            await Promise.all([update1, update2]).then(() => {
                toast.success("Changes saved");
            }).catch((err) => {
                toast.error("Failed to save changes");
                console.error("Error while updating the order of the todo", err);
            })
        }, 2000);
    }
    //TODO: If no user is selected, show feed
    if (!selectedUser) return null;
    return (
        <div className="h-full p-5 flex flex-col gap-2">
            <DndContext collisionDetection={closestCorners} onDragEnd={dragHandler}>
                <SortableContext items={todos} strategy={verticalListSortingStrategy}>
                    {todos.length === 0 && <div className="text-center text-2xl">No tasks yet</div>}
                    {todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
                </SortableContext>
            </DndContext>
        </div>
    );
};
export default Display;
