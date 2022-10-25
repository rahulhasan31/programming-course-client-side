import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'


const Course = ({course}) => {
    console.log(course);
    const{title, image_url, details, _id
    }=course
    return (
        <div className='row row-col-lg-2'>
     <Card className="mt-4 text-center shadow p-3 mb-5 bg-body rounded">
      <Card.Header>
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
            details?.length> 100 ?
  <>{details.slice(0, 100)+'...'} <Link className='text-decoration-none'  to={`/course/${_id}`}>Reed More</Link> </>
            :
            <>{details}</>

          }
        </Card.Text>
       <Link to={`/course/${_id}`}> <Button variant="primary">Go Details</Button></Link>
      </Card.Body>
     
    </Card>
        </div>
    );
};

export default Course;