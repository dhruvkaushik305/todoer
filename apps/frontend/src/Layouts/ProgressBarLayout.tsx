import React from "react";
import { useRecoilValue } from "recoil";
import { getPercentageCompletedSelector } from "../store/todo";
const ProgressBarLayout: React.FC = () => {
  const percentageCompleted = useRecoilValue(getPercentageCompletedSelector);
  const percentage = parseFloat(percentageCompleted.toFixed(0));
  return (
    <div className="flex w-full items-center gap-2">
      <div className="h-3 w-full rounded-full bg-slate-400/30">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-violet-700 via-indigo-700 to-fuchsia-700"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-nowrap">{percentage}% completed</p>
    </div>
  );
};
export default ProgressBarLayout;
