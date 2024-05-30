import React from "react";
const ProgressBar: React.FC<{ percentage: number }> = (props) => {
  return (
    <div className="h-3 w-full rounded-full bg-slate-200">
      <div
        className="h-3 rounded-full bg-blue-400"
        style={{ width: `${props.percentage}%` }}
      />
    </div>
  );
};
export default ProgressBar;
