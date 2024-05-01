import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import todoAtom from "../store/todo";
import selectedUserAtom from "../store/user";

const useGetTodos = () => {
  console.log("Inside get todos");
  const selectedUser = useRecoilValue(selectedUserAtom);
  const setTodos = useSetRecoilState(todoAtom);
  useEffect(() => {
    const fetchTodos = async () => {
      console.log("Fetching todos");
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND}/todo/read/${selectedUser?.id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const response = await res.json();
      if (response.success) {
        console.log(response);
        console.log("Todos fetched");
        setTodos(response.data);
      }
    };
    console.log("The selected user is ", selectedUser);
    if (selectedUser) {
      fetchTodos();
    }
  }, [selectedUser]);
};
export default useGetTodos;
