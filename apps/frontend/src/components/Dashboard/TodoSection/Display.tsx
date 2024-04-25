import React from "react";
import { useRecoilState } from "recoil";
import Todo from "./Todo";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import todoSelector from "../../../store/todo";
import { TodoType } from "@repo/types/Todo";
const Display: React.FC = () => {
    const [todos, setTodos] = useRecoilState<TodoType[] | undefined>(todoSelector);
    if (!todos) return null;
    const dragHandler = (event: any) => {
        const { active, over } = event;
        if (active.id === over.id) return;
        setTodos(() => {
            const oldIndex = todos.findIndex((todo) => todo.id === active.id);
            const newIndex = todos.findIndex((todo) => todo.id === over.id);
            return arrayMove(todos, oldIndex, newIndex)
        }
        );
    }
    return (
        <div className="h-full bg-gray-200 p-5 flex flex-col gap-2">
            <DndContext collisionDetection={closestCorners} onDragEnd={dragHandler}>
                <SortableContext items={todos} strategy={verticalListSortingStrategy}>
                    {todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
                </SortableContext>

            </DndContext>
        </div>


    );
};
export default Display;
