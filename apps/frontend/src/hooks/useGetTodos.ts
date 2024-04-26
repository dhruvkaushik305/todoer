import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import todoAtom from "../store/todo";

const useGetTodos = () => {
  const setTodos = useSetRecoilState(todoAtom);
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(`${import.meta.env.VITE_BACKEND}/todo/read`, {
        method: "GET",
        credentials: "include",
      });
      const response = await res.json();
      if (response.success) {
        setTodos(response.data);
      }
    };
    fetchTodos();
  });
};
export default useGetTodos;
