import { UserType } from "@repo/types/User";
import { atom } from "recoil";
//TODO: Eliminate null user type
export const userData = atom({
  key: "userData",
  default: null as UserType | null,
});
