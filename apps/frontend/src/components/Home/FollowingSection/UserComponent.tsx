import { useNavigate } from 'react-router-dom';
import { UserType } from '../../../../../../packages/types/userTypes.js';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import selectedUserAtom from '../../../store/user.js';
interface UserComponentProps {
    user: UserType
}
const UserComponent: React.FC<UserComponentProps> = ({ user }) => {
    const setSelectedUser = useSetRecoilState(selectedUserAtom);
    const navigate = useNavigate();
    return <div className='flex gap-2 items-center cursor-pointer hover:border hover:border-gray-500 rounded-xl p-2' onClick={() => {
        setSelectedUser(user);
        navigate("/home/user/" + user.id);
    }}>
        <div className='size-16 bg-zinc-200/30 rounded-full flex justify-center items-center text-2xl'>{user.name.split(' ')[0][0]}</div>
        <div className='flex flex-col gap-1 items-start'>
            <p className='text-lg font-sans'>{user.name}</p>
            <p className='text-sm font-sans'>@{user.username}</p>
        </div>
    </div>
}
export default UserComponent;