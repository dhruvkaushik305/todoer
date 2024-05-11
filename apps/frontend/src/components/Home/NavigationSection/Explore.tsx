import React from "react";
import { IoSearchOutline } from "react-icons/io5";
const Explore: React.FC = () => {
    return <div className="text-white flex justify-center items-center gap-2 h-[4rem] p-2 lg:hover:border-none hover:border-2 hover:border-gray-700 lg:rounded-2xl rounded-full cursor-pointer">
        <IoSearchOutline className="size-9" />
        <p className="lg:block hidden">Explore</p>
    </div>
}
export default Explore;