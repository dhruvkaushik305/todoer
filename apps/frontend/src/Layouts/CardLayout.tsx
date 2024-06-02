import React from "react";
import { useRecoilValue } from "recoil";
import { userDataAtom } from "../store/authStore";
import ProgressBarLayout from "./ProgressBarLayout";
import QuoteLayout from "./QuoteLayout";

const CardLayout: React.FC = () => {
  const userInfo = useRecoilValue(userDataAtom);

  return (
    <div className="flex flex-col gap-5 rounded-3xl bg-black/40 p-3 backdrop-blur-sm lg:p-5">
      <div className="flex w-full flex-col items-center gap-5">
        <p className="max-h-[6rem] w-full overflow-y-auto pe-3 text-2xl font-medium md:text-3xl lg:text-4xl">
          How are you doing today,{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-violet-400 bg-clip-text font-bold text-transparent">
            {userInfo?.name.split(" ")[0]}
          </span>{" "}
          ?
        </p>
        <QuoteLayout />
      </div>
      <div className="flex items-center gap-2">
        <ProgressBarLayout />
      </div>
    </div>
  );
};
export default CardLayout;
