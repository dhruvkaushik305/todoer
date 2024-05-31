import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdHomeFilled, MdPeopleAlt } from "react-icons/md";
import { Link } from "react-router-dom";
const RightAsideMiniLayout: React.FC = () => {
  return (
    <div className="absolute top-0 flex h-[3rem] w-full items-center justify-around gap-4 bg-black/40 backdrop-blur-sm">
      <Link to={"/home/following"}>
        <MdPeopleAlt className="size-7" />
      </Link>
      <Link to={"/home"}>
        <MdHomeFilled className="size-7" />
      </Link>
      <Link to={"/home/search"}>
        <IoSearch className="size-7" />
      </Link>
    </div>
  );
};
export default RightAsideMiniLayout;
