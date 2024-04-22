import React from 'react'
import { GoGrabber } from "react-icons/go";
import { useSetRecoilState } from 'recoil';
import todosAtom from '../../../store/todo';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
interface TodoProps {
    id: number,
    task: string,
    completed: boolean
}
const Todo: React.FC<TodoProps> = (props) => {
    const setTodos = useSetRecoilState(todosAtom);
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: props.id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }
    const { id, task, completed } = props;
    const changeHandler = () => {
        setTodos((oldTodos) => oldTodos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }
    return <div key={id} className='flex items-center gap-2 bg-fuchsia-300 rounded-lg p-2'  {...attributes} ref={setNodeRef} style={style}>
        <GoGrabber className='size-7 text-black cursor-grab' {...listeners} />
        <label className='flex items-center gap-2'>
            <input type='checkbox' checked={completed} className='size-4' onChange={changeHandler} />
            <span className='text-xl'>{task}</span>
        </label>

    </div>


}

export default Todo