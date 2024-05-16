export type UserType = {
  id: string;
  name: string;
  email: string;
  username: string;
  joinedAt: Date;
};
export interface UserRequest extends Request {
  user?: UserType;
}
