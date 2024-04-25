import React, { useRef } from 'react'
import { GoGrabber } from "react-icons/go";
import { useSetRecoilState } from 'recoil';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import todoSelector from '../../../store/todo';
import { TodoType } from '@repo/types/Todo';
import { TiDeleteOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { toast } from 'sonner';
const Todo: React.FC<{ todo: TodoType }> = (props) => {
    const { todo } = props;
    const setTodos = useSetRecoilState<TodoType[] | undefined>(todoSelector);
    let timeout = useRef<NodeJS.Timeout | undefined>();
    const deleteTodo = async () => {
        setTodos((oldTodos) => oldTodos!.filter((todo) => todo.id !== todo.id));
        const res = await fetch(`${import.meta.env.VITE_BACKEND}/todo/delete/${todo.id}`, {
            method: "DELETE",
            credentials: "include"
        });
        const response = await res.json();
        if (response.success) {
            toast.success("Todo deleted");
        } else {
            toast.error("Failed to delete todo");
        }
    }
    if (!setTodos) return null;
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: todo.id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }
    const changeHandler = () => {
        let state = !todo.completed;
        setTodos((oldTodos) => oldTodos?.map((oldTodo) => {
            if (oldTodo.id === todo.id) {
                state = !oldTodo.completed;
                console.log("The todo should be", state);
                return { ...oldTodo, completed: !oldTodo.completed }
            } else return oldTodo
        }))
        clearTimeout(timeout.current);
        timeout.current = setTimeout(async () => {
            const res = await fetch(`${import.meta.env.VITE_BACKEND}/todo/updateStatus`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id: todo.id, state }),
                credentials: "include"
            });
            const response = await res.json();
            if (response.success) {
                toast.success("Marked as completed");
            }
            else {
                toast.error("Failed to mark as completed");
            }
        }, 500)
    }
    return <div key={todo.id} className='flex items-center gap-2 bg-fuchsia-300 rounded-lg p-2 w-full'  {...attributes} ref={setNodeRef} style={style}>
        <GoGrabber className='size-7 text-black cursor-grab' {...listeners} />
        <label className='flex items-center gap-2'>
            <input type='checkbox' checked={todo.completed} className='size-4' onChange={changeHandler} />
            <span className='text-xl w-full'>{todo.task}</span>
        </label>
        <div className='flex gap-2'>
            <CiEdit onClick={() => console.log("clicked")} />
            <TiDeleteOutline className='cursor-pointer' onClick={deleteTodo} />
        </div>
    </div>


}

export default Todo