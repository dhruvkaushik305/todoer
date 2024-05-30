import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FollowUser, UnfollowUser } from "../actions/userActions";
import { UserType } from "@repo/types/User";
type UserComponentProps = {
  user: UserType & { following: boolean };
};
const SearchedUserLayout: React.FC<UserComponentProps> = ({ user }) => {
  const [follow, setFollow] = useState(user.following);
  const [disabled, setDisabled] = useState(false);
  const followHandler = async () => {
    setDisabled(true);
    const response = await FollowUser(user.id);
    if (response.success) {
      setFollow(true);
    }
    setDisabled(false);
  };
  const unfollowHandler = async () => {
    setDisabled(true);
    const response = await UnfollowUser(user.id);
    if (response.success) {
      setFollow(false);
    }
    setDisabled(false);
  };
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-lg bg-violet-400/80 p-3 hover:bg-violet-500/80">
      <Link to={"/home/profile/" + user.id} className="cursor-pointer">
        <div className="flex size-16 items-center justify-center rounded-full bg-indigo-800/30 text-2xl">
          {user?.name[0].toUpperCase()}
        </div>
      </Link>
      <div className="grow cursor-pointer text-zinc-200">
        <p className="text-nowrap text-2xl">{user.name}</p>
        <p className="text-sm">{`@${user.username}`}</p>
      </div>
      {follow ? (
        <button
          className="rounded-md bg-gray-800 px-3 py-2 text-white transition-transform duration-150 hover:scale-95"
          onClick={unfollowHandler}
          disabled={disabled}
        >
          Unfollow
        </button>
      ) : (
        <button
          className="rounded-md bg-gray-800 px-3 py-2 text-zinc-200 transition-transform duration-150 hover:scale-95"
          onClick={followHandler}
          disabled={disabled}
        >
          Follow
        </button>
      )}
    </div>
  );
};
export default SearchedUserLayout;
