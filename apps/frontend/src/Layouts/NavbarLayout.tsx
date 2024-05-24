import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLayout: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="sticky flex h-[4rem] w-full items-center justify-center border-b border-gray-900 bg-black p-3 md:justify-around">
      <div
        className="cursor-pointer font-Pacifico text-3xl text-white md:text-4xl"
        onClick={() => navigate("/")}
      >
        Todoer
      </div>
    </div>
  );
};
export default NavbarLayout;
