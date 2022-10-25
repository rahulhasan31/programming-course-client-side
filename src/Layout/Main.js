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
            <Container>
               <Row>
               <Col lg={4}>
                <LeftSide></LeftSide>
                </Col>
                <Col lg={8}>
                 <Outlet></Outlet>
                </Col>
               
               </Row>
                 <Footer></Footer> 
            </Container>

        </div>
    );
};

export default Main;