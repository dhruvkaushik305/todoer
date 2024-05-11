import React from 'react';
import Explore from './Explore';
import MyTodos from './MyTodos';
const Options: React.FC = () => {
    return <div className='flex flex-col gap-3 p-1'>
        <Explore />
        <MyTodos />
    </div>
}
export default Options;