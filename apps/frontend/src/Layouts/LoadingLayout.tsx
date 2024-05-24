import React from "react";
import { HashLoader } from "react-spinners";
const LoadingLayout: React.FC = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10 bg-gradient-to-b from-black via-slate-950 to-slate-900">
      <HashLoader color="#94a3b8" size={80} />
      <div className="text-3xl text-white">Just a moment, hold on...</div>
    </div>
  );
};
export default LoadingLayout;
