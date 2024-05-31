import { UserType } from "@repo/types/User";
import React from "react";
import { Link } from "react-router-dom";
interface UserProps {
  user: UserType;
}
const FollowingUserLayout: React.FC<UserProps> = ({ user }) => {
  return (
    <Link to={`/home/view/${user.id}`}>
      <div className="flex cursor-pointer items-center gap-3 rounded-lg bg-black/50 p-3 transition-colors duration-200 hover:bg-black/60">
        <div className="flex size-16 items-center justify-center rounded-full bg-slate-700/30 text-2xl">
          {user.name.split(" ")[0][0]}
        </div>
        <div className="flex flex-col items-start">
          <p className="font-sans text-xl">{user.name}</p>
          <p className="font-sans text-sm">@{user.username}</p>
        </div>
      </div>
    </Link>
  );
};
export default FollowingUserLayout;
