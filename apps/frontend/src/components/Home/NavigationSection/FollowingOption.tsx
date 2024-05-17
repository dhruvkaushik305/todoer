import React from 'react';
import { IoIosPeople } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const FollowingOption: React.FC = () => {
    const navigate = useNavigate();
    return <div className='xl:hidden flex justify-center items-center gap-2 lg:h-[4rem] lg:w-full size-12 lg:p-2 p-2 lg:hover:border-none hover:border-2 hover:border-gray-500 lg:rounded-md rounded-full cursor-pointer bg-zinc-500/40 aspect-square' onClick={() => navigate("/home/following")}>
        <IoIosPeople className="size-9" />
        <p className="lg:block hidden">Following</p>
    </div>
}
export default FollowingOption;