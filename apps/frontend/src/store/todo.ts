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
    if (todos.length === 0) return 0;
    else {
      return (
        (todos.filter((todo) => todo.completed).length / todos.length) * 100
      );
    }
  },
});
export default todoAtom;
