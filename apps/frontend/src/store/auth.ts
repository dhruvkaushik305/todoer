import { UserType } from "../../../../packages/types/userTypes.js";
import { atom } from "recoil";
export const userData = atom({
  key: "userData",
  default: null as UserType | null,
});
