import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedInAtom, userDataAtom } from "../store/authStore";
import { useRecoilValue } from "recoil";

const NavbarLayout: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    console.log(dropdownOpen);
  }, [dropdownOpen]);
  const userInfo = useRecoilValue(userDataAtom);
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
      {userInfo && (
        <div className="relative">
          <div
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border-2 border-black bg-blue-600 text-xl text-zinc-200 transition-colors duration-300 hover:border-blue-400"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {userInfo.name.split(" ")[0][0]}
          </div>
          {dropdownOpen && (
            <div className="absolute left-1/2 top-[4rem] flex min-w-[15rem] -translate-x-1/2 transform flex-col items-center gap-1 rounded-lg bg-gray-400/95 p-2 shadow-xl ">
              <div className="w-full cursor-pointer rounded-lg border border-gray-400 p-2 text-center transition-colors duration-200 hover:border-zinc-200 hover:font-semibold">
                My Profile
              </div>
              <div className="w-full cursor-pointer rounded-lg border border-gray-400 p-2 text-center transition-colors duration-200 hover:border-zinc-200 hover:font-semibold">
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
