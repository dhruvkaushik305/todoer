import { atom } from "recoil";
//TODO: Remove this hardcoded type
type User = {
  id: string;
  name: string;
  email: string;
  joinedAt: string;
  password: string;
  username: string;
};
export const userData = atom({
  key: "userData",
  default: null as User | null,
});
