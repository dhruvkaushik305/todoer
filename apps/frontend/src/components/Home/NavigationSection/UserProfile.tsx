import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userData } from '../../../store/auth';
import selectedUserAtom from '../../../store/user';

const UserProfile: React.FC = () => {
    const currentUser = useRecoilValue(userData);
    const setSelectedUser = useSetRecoilState(selectedUserAtom);
    const myTodosHandler = () => {
        setSelectedUser(currentUser);
    }
    //TODO: Add a handler on the username to navigate to the profile of the user
    //TODO: Profile should have a graph and description and profile image
    return (
        <div className="p-4 bg-gray-600 rounded-2xl flex gap-4 items-center" >
            <div className="transition ease-in-out bg-stone-500/55 border-2 border-stone-500/55 hover:bg-stone hover:border-2 hover:border-zinc-400 hover:scale-95 duration-300 rounded-full flex items-center justify-center size-14 text-white cursor-pointer">{currentUser?.name[0].toUpperCase()}</div>
            <div className='grow text-zinc-200'>
                <p className="text-2xl">{currentUser?.name}</p>
                <p>{`@${currentUser?.username}`}</p>
            </div>
            <button className='px-3 py-2 bg-blue rounded-md text-white' onClick={myTodosHandler}>My todo's</button>
        </div>
    )
}

export default UserProfile