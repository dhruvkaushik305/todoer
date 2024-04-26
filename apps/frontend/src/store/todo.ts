import { TodoType } from "@repo/types/Todo";
import { atom } from "recoil";

const todoAtom = atom({
  key: "todo",
  default: [] as TodoType[],
});
export default todoAtom;
