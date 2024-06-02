import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { LuMinusCircle } from "react-icons/lu";
import { FiRefreshCcw } from "react-icons/fi";
import { getRandom } from "@anilseervi/inspirational-quotes";
type Quote = {
  quote: string;
  author: string;
};
const QuoteLayout: React.FC = () => {
  const [expandQuote, setExpandQuote] = useState(true);
  const [quote, setQuote] = useState<Quote>({} as Quote);
  useEffect(() => {
    setQuote(getRandom());
  }, []);
  const refreshQuote = () => setQuote(getRandom());
  return (
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
              <LuMinusCircle className="size-5" />
            ) : (
              <IoAddCircleOutline className="size-5" />
            )}
          </p>
          <FiRefreshCcw
            className="size-5 cursor-pointer"
            onClick={refreshQuote}
          />
        </div>

        <p className="w-full p-1 text-right">~{quote.author}</p>
      </div>
    </div>
  );
};
export default QuoteLayout;
