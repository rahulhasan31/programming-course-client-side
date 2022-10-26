import React from 'react';
import { Button, Card, CardGroup, Col, Container, Image, Row } from 'react-bootstrap';
import { FaIcons } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOutPage = () => {
    const checkouts= useLoaderData()
    console.log(checkouts);
    const{image_url , title
    }= checkouts
    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: "#fdccbc" }}>

                <Container className="h-100">
                 <Row className="justify-content-center align-items-center h-100">

                 <Col>
            <p>
              <span className="h2">Shopping Cart </span>
              <span className="h4">(1 item in your cart)</span>
            </p>
     <Card  className="mb-4">
      <Card.Body className="p-4">
           <Row lassName="align-items-center">
              <Col md="2">
              <Image  fluid
                      src={image_url
                      }
                      
            
                      
                      >

              </Image>
              </Col>

              <Col md="2" className="d-flex justify-content-center">
              <div>
                      <p className="small text-muted mb-4 pb-2">Name</p>
                      <p className="lead fw-normal mb-0">{title
}</p>
                    </div>
              </Col>
              <Col md="2" className="d-flex justify-content-center">
              <div>
                      <p className="small text-muted mb-4 pb-2">Quantity</p>
                      <p className="lead fw-normal mb-0">1</p>
                    </div>
              </Col>
              <Col md="2" className="d-flex justify-content-center">
              <div>
                      <p className="small text-muted mb-4 pb-2">Price</p>
                      <p className="lead fw-normal mb-0">$799</p>
                    </div>
              </Col>
              <Col md="2" className="d-flex justify-content-center">
              <div>
                      <p className="small text-muted mb-4 pb-2">Total</p>
                      <p className="lead fw-normal mb-0">$799</p>
                    </div>
              </Col>
            

           </Row>

      </Card.Body>

     </Card>
     <Card className="mb-5">
              <Card.Body className="p-4">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span>
                    <span className="lead fw-normal">$799</span>
                  </p>
                </div>
              </Card.Body>
            </Card>

            <div className="d-flex justify-content-end">
              <Link to={'/course'} ><Button color="light" size="lg" className="me-2">
                <Button color="light" size="lg" className="me-2">
                Continue shopping
              </Button>
              </Button></Link>
              <Button size="lg">Add to cart</Button>
            </div>
                  </Col>

                 </Row>

                </Container>
            </section>
        </div>
    );
};

export default CheckOutPage;