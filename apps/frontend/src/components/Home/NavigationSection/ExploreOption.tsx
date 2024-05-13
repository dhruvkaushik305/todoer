import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const ExploreOption: React.FC = () => {
    const navigate = useNavigate();
    return <div className="flex justify-center items-center gap-2 lg:h-[4rem] lg:w-full size-12 lg:p-2 p-2 lg:hover:border-none hover:border-2 hover:border-gray-500 lg:rounded-md rounded-full cursor-pointer bg-zinc-500/40 aspect-square"
        onClick={() => navigate("/home/explore")}
    >
        <IoSearchOutline className="size-9" />
        <p className="lg:block hidden">Explore</p>
    </div>
}
export default ExploreOption;