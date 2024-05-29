import React from "react";
import { useRecoilValue } from "recoil";
import { getPercentageCompletedSelector } from "../store/todo";
const ProgressBarLayout: React.FC = () => {
    const percentageCompleted = useRecoilValue(getPercentageCompletedSelector);
    const percentage = parseFloat(percentageCompleted.toFixed(0));
  return (
    <div className="flex w-full items-center gap-2">
            <div className="h-3 w-full rounded-full bg-gray-200 dark:bg-slate-800">
      <div
        className="h-3 rounded-full bg-blue-400"
        style={{ width: `${percentage}%` }}
      />
    </div>
    <p className="text-nowrap">{percentage}% completed</p>
    </div>

  );
};
export default ProgressBarLayout;
