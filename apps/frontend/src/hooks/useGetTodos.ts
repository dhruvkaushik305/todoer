import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import todoAtom from "../store/todo";
import selectedUserAtom from "../store/user";
import { readTodos } from "../actions/todoActions";

const useGetTodos = () => {
  const selectedUser = useRecoilValue(selectedUserAtom);
  const setTodos = useSetRecoilState(todoAtom);
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await readTodos(selectedUser!.id);
      if (response.success) {
        setTodos(response.data!);
      }
    };
    if (selectedUser) {
      fetchTodos();
    }
  }, [selectedUser]);
};
export default useGetTodos;
