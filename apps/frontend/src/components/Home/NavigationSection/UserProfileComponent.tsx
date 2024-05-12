import React from 'react'
import { useRecoilValue } from 'recoil';
import { userData } from '../../../store/auth';

const UserProfileComponent: React.FC = () => {
    const currentUser = useRecoilValue(userData);
    //TODO: Add a handler on the username to navigate to the profile of the user
    //TODO: Profile should have a graph and description and profile image
    return (
        <div className="lg:p-3 bg-gray-600 lg:rounded-2xl flex gap-4 items-center rounded-full p-1 w-fit lg:w-full" >
            <div className="transition ease-in-out bg-stone-500/55 border-2 border-stone-500/55 hover:bg-stone hover:border-2 hover:border-zinc-400 hover:scale-95 duration-300 rounded-full flex items-center justify-center lg:size-14 size-12 text-white cursor-pointer"
            >{currentUser?.name[0].toUpperCase()}</div>
            <div className='grow text-zinc-200 hidden lg:block'>
                <p className="text-2xl">{currentUser?.name}</p>
                <p>{`@${currentUser?.username}`}</p>
            </div>
        </div>
    )
}

export default UserProfileComponent