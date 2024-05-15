import React from "react";
import { useNavigate } from "react-router-dom";
const LandingComponent: React.FC = () => {
  const navigate = useNavigate();
  return <div className="text-white text-xl h-full w-full flex flex-col justify-center items-center gap-5 bg-gradient-to-br from-black via-gray-900 to-gray-700">
    <h1 className="font-mono font-bold xl:text-7xl text-4xl text-wrap text-center md:text-5xl lg:text-6xl">Todo Lists, Now Socialised</h1>
    <button className="bg-blue rounded-md text-white px-3 py-2 hover:ring-4 hover:ring-gray-800 lg:text-lg md:text-md text-sm" onClick={() => navigate("/auth/signup")}>Get Started</button>
  </div>;
};
export default LandingComponent;
