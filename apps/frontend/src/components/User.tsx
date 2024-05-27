import { UserType } from "@repo/types/User";
import React from "react";
import { useSetRecoilState } from "recoil";
import selectedUserAtom from "../store/user";
interface UserProps {
  user: UserType;
}
const User: React.FC<UserProps> = ({ user }) => {
  const setSelectedUser = useSetRecoilState(selectedUserAtom);
  return (
    <div
      className="flex cursor-pointer items-center gap-3 rounded-lg bg-gray-500 p-3"
      onClick={() => setSelectedUser(user)}
    >
      <div className="flex size-16 items-center justify-center rounded-full bg-zinc-200/30 text-2xl">
        {user.name.split(" ")[0][0]}
      </div>
      <div className="flex flex-col items-start gap-1">
        <p className="font-sans text-lg">{user.name}</p>
        <p className="font-sans text-sm">@{user.username}</p>
      </div>
    </div>
  );
};
export default User;
