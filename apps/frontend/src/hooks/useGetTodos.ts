import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import todoAtom from "../store/todo";
import { readTodos } from "../actions/todoActions";

const useGetTodos = (id: string) => {
  const setTodos = useSetRecoilState(todoAtom);
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await readTodos(id);
      if (response.success) {
        setTodos(response.data!);
      }
    };
    if (id) {
      fetchTodos();
    }
  }, [id]);
};
export default useGetTodos;
