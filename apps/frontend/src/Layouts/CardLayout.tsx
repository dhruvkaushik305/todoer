import React from "react";
import { useRecoilValue } from "recoil";
import { userDataAtom } from "../store/authStore";
import ProgressBarLayout from "./ProgressBarLayout";
import { getRandom } from "@anilseervi/inspirational-quotes";

const CardLayout: React.FC = () => {
  const userInfo = useRecoilValue(userDataAtom);
  const quote = getRandom();
  return (
    <div className="flex flex-col gap-5 rounded-lg bg-slate-800/85 p-5">
      <div className="flex w-full flex-col items-center gap-5">
        <p className="w-full text-4xl font-medium">
          How are you doing today,{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-violet-400 bg-clip-text font-bold text-transparent">
            {userInfo!.name.split(" ")[0]}
          </span>{" "}
          ?
        </p>
        <div className="w-[90%] divide-y-2 divide-dashed rounded-lg bg-black/50 p-5">
          <p className="h-[4rem] w-full overflow-y-auto overflow-x-hidden text-xl italic">
            {quote.quote}
          </p>
          <p className="w-full p-1 text-right">~{quote.author}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ProgressBarLayout />
      </div>
    </div>
  );
};
export default CardLayout;
