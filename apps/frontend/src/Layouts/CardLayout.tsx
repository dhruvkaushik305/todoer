import React from "react";
import { useRecoilValue } from "recoil";
import { userDataAtom } from "../store/authStore";
import ProgressBarLayout from "./ProgressBarLayout";
import { getRandom } from "@anilseervi/inspirational-quotes";
import { IoAddCircleOutline } from "react-icons/io5";
import { LuMinusCircle } from "react-icons/lu";
import { FiRefreshCcw } from "react-icons/fi";

const CardLayout: React.FC = () => {
  const [expandQuote, setExpandQuote] = React.useState(true);
  const userInfo = useRecoilValue(userDataAtom);
  const quote = getRandom();
  return (
    <div className="flex flex-col gap-5 rounded-3xl bg-black/40 p-3 backdrop-blur-sm lg:p-5">
      <div className="flex w-full flex-col items-center gap-5">
        <p className="max-h-[6rem] w-full overflow-y-auto pe-8 text-2xl font-medium lg:p-0 lg:text-4xl">
          How are you doing today,{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-violet-400 bg-clip-text font-bold text-transparent">
            {userInfo!.name.split(" ")[0]}
          </span>{" "}
          ? amet amet amet amet amet am et am et amet amet amet amet
        </p>
        <div className="flex w-full flex-col justify-between gap-1 rounded-2xl bg-black/40 p-2 lg:w-[90%] lg:p-5">
          {expandQuote && (
            <p className="max-h-[9rem] w-full overflow-y-auto overflow-x-hidden pe-3 text-xl italic">
              {quote.quote}
            </p>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p
                className="cursor-pointer"
                onClick={() => setExpandQuote(!expandQuote)}
              >
                {expandQuote ? (
                  <LuMinusCircle className="size-6" />
                ) : (
                  <IoAddCircleOutline className="size-6" />
                )}
              </p>
              <FiRefreshCcw className="size-6 cursor-pointer" />
            </div>

            <p className="w-full p-1 text-right">~{quote.author}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ProgressBarLayout />
      </div>
    </div>
  );
};
export default CardLayout;
