import { atom } from "recoil";
const todosArray = [
  { id: 1, task: "Make notes", completed: false },
  { id: 2, task: "Make dinner", completed: false },
  { id: 3, task: "Make bed", completed: false },
];
const todosAtom = atom({
  key: "todosAtom",
  default: todosArray,
});
export default todosAtom;
