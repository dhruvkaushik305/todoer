import React from 'react';
import MyTodosOption from './MyTodosOption';
import ExploreOption from './ExploreOption';
import FollowingOption from './FollowingOption';
const OptionsComponent: React.FC = () => {
    //TODO: Make it modular by passing the components as props
    return <div className='text-white flex lg:flex-col gap-3 p-1'>
        <ExploreOption />
        <MyTodosOption />
        <FollowingOption />
    </div>
}
export default OptionsComponent;