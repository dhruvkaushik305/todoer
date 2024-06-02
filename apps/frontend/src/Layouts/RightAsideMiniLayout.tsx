import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdHomeFilled, MdPeopleAlt } from "react-icons/md";
import { Link } from "react-router-dom";
const RightAsideMiniLayout: React.FC = () => {
  const [isSelected, setIsSelected] = React.useState("home");
  return (
    <div className="absolute top-0 flex h-[3rem] w-full items-center justify-around gap-4 bg-black/40 backdrop-blur-sm lg:hidden">
      <Link
        to={"/home/following"}
        className={isSelected === "following" ? "text-white" : "text-gray-400"}
      >
        <MdPeopleAlt
          className="size-7"
          onClick={() => setIsSelected("following")}
        />
      </Link>
      <Link
        to={"/home"}
        className={isSelected === "home" ? "text-white" : "text-gray-400"}
      >
        <MdHomeFilled
          className="size-7"
          onClick={() => setIsSelected("home")}
        />
      </Link>
      <Link
        to={"/home/search"}
        className={isSelected === "search" ? "text-white" : "text-gray-400"}
      >
        <IoSearch className="size-7" onClick={() => setIsSelected("search")} />
      </Link>
    </div>
  );
};
export default RightAsideMiniLayout;
