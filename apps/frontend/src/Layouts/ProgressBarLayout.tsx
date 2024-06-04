import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { getPercentageCompletedSelector } from "../store/todo";
import confetti from "canvas-confetti";
const ProgressBarLayout: React.FC = () => {
  const percentageCompleted = useRecoilValue(getPercentageCompletedSelector);
  useEffect(() => {
    if (percentageCompleted == 100) {
      const end = Date.now() + 1 * 1000;
      const colors = ["#22c55e", "#d1d5db"];
      (function frame() {
        confetti({
          particleCount: 7,
          angle: 60,
          spread: 50,
          origin: { x: 0 },
          colors: colors,
          gravity: 2,
        });
        confetti({
          particleCount: 7,
          angle: 120,
          spread: 50,
          origin: { x: 1 },
          colors: colors,
          gravity: 2,
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  }, [percentageCompleted]);

  const percentage = parseFloat(percentageCompleted.toFixed(0));
  return (
    <div className="flex w-full items-center gap-2">
      <div className="h-3 w-full rounded-full bg-slate-400/30">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-violet-700 via-indigo-700 to-fuchsia-700"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-nowrap">{percentage}% there</p>
    </div>
  );
};
export default ProgressBarLayout;
