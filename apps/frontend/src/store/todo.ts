import { selector } from "recoil";
import { userData } from "./auth";
import { TodoType } from "@repo/types/Todo";
const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const user = get(userData);
    if (user) {
      return user.todos;
    } else {
      return [];
    }
  },
  set: ({ set }, newValue) => {
    set(userData, (oldUser) => {
      if (oldUser) return { ...oldUser, todos: newValue as TodoType[] };
      else return oldUser;
    });
  },
});
export default todoSelector;
