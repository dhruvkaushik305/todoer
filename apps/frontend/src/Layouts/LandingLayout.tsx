import React from "react";
import { useNavigate } from "react-router-dom";
const LandingLayout: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-gradient-to-b from-black via-black/95 to-black/90 text-xl text-white">
      <header className="text-wrap text-center font-sans text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        Todo Lists, Now Socialised 😍
      </header>
      <button
        className="md:text-md rounded-md bg-blue px-3 py-2 text-sm text-white hover:ring-4 hover:ring-gray-800 lg:text-lg"
        onClick={() => navigate("/auth/signup")}
      >
        Join Today
      </button>
    </div>
  );
};
export default LandingLayout;
