import React from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedInAtom } from "../store/authStore";
import { useRecoilValue } from "recoil";
import { IoSearch } from "react-icons/io5";

const NavbarLayout: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  return (
    <div className="sticky flex h-[4rem] w-full items-center justify-center border-b border-gray-900 bg-black p-3 md:justify-around">
      <div
        className="cursor-pointer font-Pacifico text-3xl text-white md:text-4xl"
        onClick={() => (isLoggedIn ? navigate("/home") : navigate("/"))}
      >
        Todoer
      </div>
      {isLoggedIn && (
        <div className="flex items-center gap-3 rounded-md bg-slate-600 p-2">
          <IoSearch className="size-6 text-white" />
          <input
            type="text"
            placeholder="Search"
            className="min-w-[20rem] bg-slate-600 text-white focus:outline-none"
          />
        </div>
      )}
    </div>
  );
};
export default NavbarLayout;
