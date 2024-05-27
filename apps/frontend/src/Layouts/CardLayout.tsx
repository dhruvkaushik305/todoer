import React from "react";
import { useRecoilValue } from "recoil";
import selectedUserAtom from "../store/user";
import ProgressBar from "../components/ProgressBar";
import { getPercentageCompletedSelector } from "../store/todo";
const CardLayout: React.FC = () => {
  const selectedUser = useRecoilValue(selectedUserAtom);
  const percentageCompleted = useRecoilValue(getPercentageCompletedSelector);
  return (
    <div className="flex flex-col gap-5 rounded-lg bg-slate-700 p-5">
      <div className="flex w-full items-center gap-5">
        <div className="flex size-24 items-center justify-center rounded-full bg-blue-600 p-1 text-4xl">
          {selectedUser?.name.split(" ")[0][0]}
        </div>
        <div className="flexflex-col">
          <p className="text-3xl">{selectedUser?.name}</p>
          <p className="text-lg">@{selectedUser?.username}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ProgressBar percentage={parseFloat(percentageCompleted.toFixed(0))} />
        <p className="text-nowrap">
          {percentageCompleted.toFixed(0)}% tasks completed
        </p>
      </div>
    </div>
  );
};
export default CardLayout;
