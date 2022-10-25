import React from 'react';
import Header from '../Component/Header/Header';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSide from '../Component/LeftSide/LeftSide';
import Footer from '../Component/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer> 
           

        </div>
    );
};

export default Main;