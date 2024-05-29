import React, { useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { TodoType } from "@repo/types/Todo";
import todoAtom from "../store/todo";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { editOrder } from "../actions/todoActions";
import { toast } from "sonner";
import {
  DndContext,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import TodoLayout from "./TodoLayout";
import { userDataAtom } from "../store/authStore";
import useGetTodos from "../hooks/useGetTodos";
const TodoListLayout: React.FC = () => {
  const user = useRecoilValue(userDataAtom);
  useGetTodos(user!.id);
  let timeout = useRef<NodeJS.Timeout>();
  const [todos, setTodos] = useRecoilState<TodoType[]>(todoAtom);
  const dragHandler = (event: any) => {
    const { active, over } = event;
    if (active.id === over.id) return;
    const oldIndex = todos.findIndex((todo) => todo.id === active.id);
    const newIndex = todos.findIndex((todo) => todo.id === over.id);
    setTodos(() => {
      return arrayMove(todos, oldIndex, newIndex);
    });
    clearTimeout(timeout.current);
    timeout.current = setTimeout(async () => {
      const update1 = editOrder(active.id, newIndex);
      const update2 = editOrder(over.id, oldIndex);
      await Promise.all([update1, update2])
        .then(() => {
          toast.success("Changes saved");
        })
        .catch((err) => {
          toast.error("Failed to save changes");
          console.error("Error while updating the order of the todo", err);
        });
    }, 2000);
  };
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));
  if (!todos)
    return (
      <div className="text-xl text-red-500">[Critical]Todos is undefined.</div>
    );
  return (
    <div className="flex h-full w-full flex-col gap-2 overflow-y-auto p-1 text-white">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={dragHandler}
      >
        <SortableContext items={todos} strategy={verticalListSortingStrategy}>
          {todos.length === 0 && (
            <div className="text-center text-2xl">No tasks yet</div>
          )}
          {todos.map((todo) => (
            <TodoLayout key={todo.id} todo={todo} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};
export default TodoListLayout;
