import { UserType } from "@repo/types/User";
import { atom } from "recoil";

const selectedUserAtom = atom({
  key: "selectedUser",
  default: null as UserType | null,
});

export default selectedUserAtom;
