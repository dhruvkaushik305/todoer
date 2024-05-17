import { UserType } from "../../../../packages/types/userTypes.js";
import { atom } from "recoil";

const selectedUserAtom = atom({
  key: "selectedUser",
  default: null as UserType | null,
});

export default selectedUserAtom;
