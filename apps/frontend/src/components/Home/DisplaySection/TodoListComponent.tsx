import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { DndContext, closestCorners, useSensors, useSensor, PointerSensor, TouchSensor } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { TodoType } from "@repo/types/Todo";
import { editOrder } from "../../../actions/todoActions";
import { toast } from "sonner";
import todoAtom from "../../../store/todo";
import useGetTodos from "../../../hooks/useGetTodos";
import TodoComponent from "./TodoComponent";
const TodoListComponent: React.FC = () => {
    useGetTodos();
    let timeout = useRef<NodeJS.Timeout>();
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
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
    )
    if (!todos) return <div className="text-red-500 text-xl">[Critical]Todos is undefined.</div>
    return (
        <div className="p-5 flex flex-col gap-2 text-white">
            <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={dragHandler}>
                <SortableContext items={todos} strategy={verticalListSortingStrategy}>
                    {todos.length === 0 && <div className="text-center text-2xl">No tasks yet</div>}
                    {todos.map((todo) => <TodoComponent key={todo.id} todo={todo} />)}
                </SortableContext>
            </DndContext>
        </div>
    );
};
export default TodoListComponent;
