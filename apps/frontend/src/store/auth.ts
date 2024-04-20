import { atom } from "recoil";
type User = {
    id: string;
    name: string;
    email: string;
    joinedAt: string;
    password: string;
    username: string;
}
export const userData = atom({
    key: "userData",
    default: null as User | null
});