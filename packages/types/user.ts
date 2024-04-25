import { TodoType } from "./todo";

export type UserType = {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  todos?: TodoType[];
  joinedAt: Date;
};
