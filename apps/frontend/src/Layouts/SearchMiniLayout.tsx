import React from "react";
import SearchLayout from "./SearchLayout";
const SearchMiniLayout: React.FC = () => {
  return (
    <div className="block lg:hidden">
      <header className="m-2 flex w-full items-center justify-center text-2xl font-semibold">
        Search for users
      </header>
      <SearchLayout />
    </div>
  );
};
export default SearchMiniLayout;
