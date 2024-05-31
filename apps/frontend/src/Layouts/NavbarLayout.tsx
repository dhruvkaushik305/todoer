import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedInAtom, userDataAtom } from "../store/authStore";
import { useRecoilValue } from "recoil";

const NavbarLayout: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userInfo = useRecoilValue(userDataAtom);
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  return (
    <div className="sticky flex h-[4rem] w-full items-center justify-between border-b border-gray-800 p-3 backdrop-blur-sm md:justify-around">
      <div
        className="cursor-pointer font-Pacifico text-3xl text-white md:text-4xl"
        onClick={() => (isLoggedIn ? navigate("/home") : navigate("/"))}
      >
        Todoer
      </div>
      {userInfo && (
        <div className="relative">
          <div
            className="flex cursor-pointer gap-1 rounded-lg border border-gray-500 bg-gray-200/20 p-1 hover:ring-2"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="flex size-8 items-center justify-center rounded-full bg-blue-600 text-xl text-zinc-200 md:size-10">
              {userInfo.name[0].toUpperCase()}
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-sm md:text-lg">@{userInfo.username}</p>
            </div>
          </div>
          {dropdownOpen && (
            <div className="absolute left-1/2 top-[4rem] flex min-w-[15rem] -translate-x-3/4 transform flex-col items-center gap-1 rounded-lg bg-slate-600/95 p-2 shadow-xl md:-translate-x-1/2 ">
              <div className="w-full cursor-pointer rounded-lg border border-gray-500/40 p-2 text-center transition-colors duration-200 hover:border-zinc-200/60 hover:font-semibold">
                My Profile
              </div>
              <div className="w-full cursor-pointer rounded-lg border border-gray-500/40 p-2 text-center transition-colors duration-200 hover:border-zinc-200/60 hover:font-semibold">
                Logout
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default NavbarLayout;
