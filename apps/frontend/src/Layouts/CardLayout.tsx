import React from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { userDataAtom } from "../store/authStore";
import ProgressBarLayout from "./ProgressBarLayout";

const CardLayout: React.FC = () => {
  const user = useRecoilValue(userDataAtom);
  return (
    <div className="flex flex-col gap-5 rounded-lg bg-slate-700 p-5">
      <div className="flex w-full items-center gap-5">
        <Link to={`/home/profile/${user?.id}`}>
          <div className="flex size-24 items-center justify-center rounded-full bg-blue-600 p-1 text-4xl">
            {user?.name.split(" ")[0][0]}
          </div>
        </Link>
        <div className="flexflex-col">
          <p className="text-3xl">{user?.name}</p>
          <p className="text-lg">@{user?.username}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ProgressBarLayout />
      </div>
    </div>
  );
};
export default CardLayout;
