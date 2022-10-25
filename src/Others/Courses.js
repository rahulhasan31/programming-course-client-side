import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSide from '../Component/LeftSide/LeftSide';
import Course from './Course';

const Courses = () => {
   const courses= useLoaderData()
    return (
        <div>
              <Container>
               <Row>
               <Col lg={4} className='d-none d-lg-block'>
               <LeftSide></LeftSide>
                </Col>
                <Col
                 lg={8}>
                {
                courses.map(course=> <Course 
                    course={course}
                    key={course._id}
                ></Course> )
            }
                </Col>
               
               </Row>
                
            </Container>
            
          
        </div>
    );
};

export default Courses;