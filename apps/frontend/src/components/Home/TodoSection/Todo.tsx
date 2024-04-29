import React, { useRef, useState } from 'react'
import { GoGrabber } from "react-icons/go";
import { useSetRecoilState } from 'recoil';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TodoType } from '@repo/types/Todo';
import { TiDeleteOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import { toast } from 'sonner';
import { deleteTodo, editState, editTodo } from '../../../actions/todoActions';
import todoAtom from '../../../store/todo';
const Todo: React.FC<{ todo: TodoType }> = (props) => {
    const { todo } = props;
    const [edit, setEdit] = useState(false);
    const setTodos = useSetRecoilState<TodoType[]>(todoAtom);
    const editRef = useRef<HTMLInputElement | null>(null);
    let timeout = useRef<NodeJS.Timeout | undefined>();
    const deleteHandler = async () => {
        setTodos((oldTodos) => oldTodos!.filter((oldTodo) => oldTodo.id !== todo.id));
        const response: { success: boolean, data?: TodoType } = await deleteTodo(todo.id);
        if (response.success) {
            toast.success("Todo deleted");
        } else {
            toast.error("Failed to delete todo");
        }
    }
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
    const markAsCompleted = () => {
        let state = !todo.completed;
        //Updating the local state
        setTodos((oldTodos) => oldTodos?.map((oldTodo) => {
            if (oldTodo.id === todo.id) {
                state = !oldTodo.completed;
                console.log("The todo should be", state);
                return { ...oldTodo, completed: !oldTodo.completed }
            } else return oldTodo
        }))
        clearTimeout(timeout.current);
        timeout.current = setTimeout(async () => {
            //Updating the server state
            const response: { success: boolean, data?: TodoType } = await editState(todo.id, state);
            if (response.success) {
                toast.success("Marked as completed");
            }
            else {
                toast.error("Failed to mark as completed");
            }
        }, 500)
    }
    const editTodoInput = () => {
        editRef.current!.disabled = false;
        editRef.current!.focus();
        setEdit(true);
    }
    const editTodoOutput = async () => {
        const newTask: string = editRef.current!.value;
        editRef.current!.disabled = true;
        setEdit(false);
        setTodos((oldTodos) => oldTodos?.map((oldTodo) => {
            if (oldTodo.id === todo.id) {
                return { ...oldTodo, task: newTask }
            } else return oldTodo
        })
        );
        const response: { success: boolean, data?: TodoType } = await editTodo(todo.id, newTask);
        if (response.success) {
            toast.success("Todo updated");
        }
        else {
            toast.error("Failed to update todo");
        }
    }
    const keyboardHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == "Enter") {
            editTodoOutput();
        }
        if (event.key == "Escape") {
            editRef.current!.disabled = true;
            setEdit(false);
        }
        if (event.key == "Delete") {
            deleteHandler();
        }
    }
    return <div key={todo.id} className='flex items-center gap-3 bg-sky-300 rounded-lg p-2'  {...attributes} ref={setNodeRef} style={style}>
        <GoGrabber className='size-8 text-black cursor-grab' {...listeners} />
        <label className='flex items-center gap-3 grow'>
            <input type='checkbox' checked={todo.completed} className='size-5' onChange={markAsCompleted} />
            <input className='text-xl w-full p-2 rounded-md' defaultValue={todo.task} disabled ref={editRef} onKeyDown={keyboardHandler} />
        </label>
        <div className='flex gap-4 items-center'>
            {edit ? (<IoMdCheckmark onClick={editTodoOutput} className='size-6' />) : (<CiEdit onClick={editTodoInput} className='size-6' />)}
            <TiDeleteOutline className='cursor-pointer size-6' onClick={deleteHandler} />
        </div>
    </div>


}

export default Todo