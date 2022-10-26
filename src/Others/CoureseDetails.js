import React ,{ useRef }from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../Component/LeftSide/LeftSide';
import {useReactToPrint} from  'react-to-print'


const CoureseDetails = () => {
    const courseDetails= useLoaderData()
    const{title, image_url, details, _id
    }=courseDetails
    const componentRef= useRef()
    const handlePrint= useReactToPrint({
      content:()=>componentRef.current,
      documentTitle:'emp-data',
      onAfterPrint:()=>alert('success')
    })
    return (
        <div ref={componentRef}>
            <Container>
               <Row>
               <Col lg={4}>
               <LeftSide></LeftSide>
                </Col>
                <Col
                 lg={8}>
                 <Card className="mt-4 text-center">
      <Card.Header>
      <Link> <Button onClick={handlePrint} variant="primary">PDF Download</Button></Link>
        <Image
        src={image_url}
        roundedCircle
        style={{height:'30px'}}
        
        ></Image>
         <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={image_url} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {
            details

          }
        </Card.Text>
        
        <Link to={`/checkout/${_id}`}> <Button variant="primary">Get premium access.</Button></Link>
        <div >
       
        </div>
      </Card.Body>
     
    </Card>
                </Col>
               
               </Row>
                
            </Container>
       
        </div>
    );
};

export default CoureseDetails;