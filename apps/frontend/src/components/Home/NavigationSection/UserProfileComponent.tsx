import React from "react";
import { useRecoilValue } from "recoil";
import { userData } from "../../../store/authStore";

const UserProfileComponent: React.FC = () => {
  const currentUser = useRecoilValue(userData);
  //TODO: Add a handler on the username to navigate to the profile of the user
  //TODO: Profile should have a graph and description and profile image
  return (
    <div className="flex w-fit items-center gap-4 rounded-full bg-gray-600 p-1 lg:w-full lg:rounded-md lg:p-3">
      <div className="hover:bg-stone flex size-12 cursor-pointer items-center justify-center rounded-full border-2 border-stone-500/55 bg-stone-500/55 text-white transition duration-300 ease-in-out hover:scale-95 hover:border-2 hover:border-zinc-400 lg:size-14">
        {currentUser?.name[0].toUpperCase()}
      </div>
      <div className="hidden grow text-zinc-200 lg:block">
        <p className="text-2xl">{currentUser?.name}</p>
        <p>{`@${currentUser?.username}`}</p>
      </div>
    </div>
  );
};

export default UserProfileComponent;
