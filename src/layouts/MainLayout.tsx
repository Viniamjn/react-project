import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/Menu/menu";

const MainLayout = () => {
    return (
        <div>
            <Menu/>

            <Outlet/>
        </div>
    );
};

export default MainLayout;