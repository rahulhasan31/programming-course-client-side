import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    console.log(course);
    const{title, image_url, details, _id
    }=course
    return (
        <div className='row row-col-lg-2'>
             <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {
            details?.length> 100 ?
  <p>{details.slice(0, 100)+'...'} <Link to={`/course/${_id}`}>Reed More</Link> </p>
            :
            <p>{details}</p>

          }
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
        </div>
    );
};

export default Course;