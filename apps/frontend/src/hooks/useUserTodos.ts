import { useEffect, useState } from "react";
import { readTodos } from "../actions/todoActions";
import { TodoType } from "@repo/types/Todo";

const useUserTodos = (id: string) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  useEffect(() => {
    readTodos(id)
      .then((res) => {
        console.log(res);
        if (res.success) {
          setTodos(res.data!);
        } else {
          console.error(res.error);
        }
      })
      .catch((err) => {
        console.error(err);
        setTodos([]);
      });
  }, []);
  return todos;
};
export default useUserTodos;
