import { TodoType } from "@repo/types/Todo";
import { atom, selector } from "recoil";

const todoAtom = atom({
  key: "todo",
  default: [] as TodoType[],
});
export const getPercentageCompletedSelector = selector({
  key: "getPercentageCompleted",
  get: ({ get }) => {
    const todos: TodoType[] = get(todoAtom);
    return (todos.filter((todo) => todo.completed).length / todos.length) * 100;
  },
});
export default todoAtom;
