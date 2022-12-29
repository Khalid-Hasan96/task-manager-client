import React from 'react';
import { Outlet } from 'react-router-dom';
import NavRoutes from '../Pages/NavRoutes/NavRoutes';

const Main = () => {
    return (
        <div>
            <NavRoutes></NavRoutes>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;