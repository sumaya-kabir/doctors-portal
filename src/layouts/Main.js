import React from 'react';
import { Outlet } from 'react-router-dom';
import PageFooter from '../Pages/CommonPage/Footer/PageFooter';
import Header from '../Pages/CommonPage/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <PageFooter></PageFooter>
        </div>
    );
};

export default Main;