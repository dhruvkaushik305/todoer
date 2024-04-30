import { TodoType } from "./todo";

export type UserType = {
  id: string;
  name: string;
  email: string;
  username: string;
  joinedAt: Date;
};
export type SearchedUser = {
  id: string;
  username: string;
  name: string;
};
