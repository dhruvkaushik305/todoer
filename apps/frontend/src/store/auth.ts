import { UserType } from "@repo/types/User";
import { atom } from "recoil";
export const userData = atom({
  key: "userData",
  default: null as UserType | null,
});
