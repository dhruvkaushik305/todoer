import React, { useState } from "react";
const Display: React.FC = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: "Todo 1", completed: false },
        { id: 2, title: "Todo 2", completed: false },
    ]);
    const changeHandler = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    return (
        <div className="h-full bg-red-200 p-5 flex flex-col gap-2">
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => changeHandler(todo.id)}
                            className="size-4"
                        ></input>
                        <span className="m-2">{todo.title}</span>
                    </label>
                </div>
            ))}
        </div>
    );
};
export default Display;
