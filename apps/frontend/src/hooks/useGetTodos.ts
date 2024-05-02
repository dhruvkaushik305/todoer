import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import todoAtom from "../store/todo";
import selectedUserAtom from "../store/user";

const useGetTodos = () => {
  const selectedUser = useRecoilValue(selectedUserAtom);
  const setTodos = useSetRecoilState(todoAtom);
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND}/todo/read/${selectedUser?.id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const response = await res.json();
      if (response.success) {
        setTodos(response.data);
      }
    };
    if (selectedUser) {
      fetchTodos();
    }
  }, [selectedUser]);
};
export default useGetTodos;
