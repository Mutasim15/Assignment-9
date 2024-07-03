import React from 'react';

import { Outlet } from 'react-router-dom';
import HeaderTitle from '../HeaderTitle/HeaderTitle';

const Main = () => {
    return (
        <div>
           <HeaderTitle></HeaderTitle>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;