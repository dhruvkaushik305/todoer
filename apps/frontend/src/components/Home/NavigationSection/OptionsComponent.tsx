import React from 'react';
import MyTodosOption from './MyTodosOption';
import ExploreOption from './ExploreOption';
const OptionsComponent: React.FC = () => {
    return <div className='text-white flex lg:flex-col gap-3 p-1'>
        <ExploreOption />
        <MyTodosOption />
    </div>
}
export default OptionsComponent;