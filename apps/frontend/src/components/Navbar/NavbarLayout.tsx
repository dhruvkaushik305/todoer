import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLayout: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed w-full flex bg-darkBlue justify-between md:justify-around p-3 items-center">
      <div className="md:text-4xl text-3xl text-offWhite font-Pacifico">
        Todo Link
      </div>
      <div className="flex justify-between gap-3">
        <button
          className="md:text-xl font-Sriracha text-lg bg-blue text-white md:py-2 md:px-3 py-1 px-2 rounded-lg"
          onClick={() => navigate("/auth/signup")}
        >
          Signup
        </button>
        <button className="md:text-xl text-lg bg-blue font-Sriracha text-white md:py-2 md:px-3 py-1 px-2 rounded-lg" onClick={()=>navigate("/auth/login")}>
          Login
        </button>
      </div>
    </div>
  );
};
export default NavbarLayout;