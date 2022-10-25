import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle , FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaYoutube} from "react-icons/fa";

import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';



const Login = () => {

    const{loginUser, googleProvider}= useContext(AuthContext)
    const provider= new GoogleAuthProvider()
    const [error, setError]= useState('')

    const handleLoginSubmit=event=>{
        event.preventDefault()
        const form= event.target
        const email= form.email.value
        const password= form.password.value
        console.log(email, password);
          
        loginUser(email, password)
        .then(result=>{
            const user=result.user
            console.log(user);
            form.reset()
            setError('')
        })
        .catch(e=>{
          const msg= e.message
          setError(msg)
        }
          )
      

    }
    const handleGoogleLogin=()=>{
      googleProvider(provider)
      .then(result=>{
        const user= result.user
        console.log(user);
      })
      .catch(e=>console.error(e))
    }


    
    return (
        <div>
       
         
   <Form onSubmit={handleLoginSubmit} className="mt-5">
   <Container>
              <Row>
                <Col col='10' md='6'>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
                </Col>
                <Col col='4' md='6'>
            
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
       <p className='mt-2'>
      Don't have an account? <Link to={'/register'}>Register here</Link>
       </p>
       <p className='text-danger'>{error}</p>
      <Button variant="primary" type="submit">
        Login
      </Button>
      
      
          </Col>
     <ButtonGroup vertical>
      <Button className='mb-2 w-50 mt-2' variant="outline-primary" onClick={handleGoogleLogin}><FaGoogle/> Log In With Google</Button>
      <Button className='w-50' variant="outline-dark"><FaGithub/> Log In With Github</Button>
      </ButtonGroup>
              </Row>
            </Container>
   </Form>

        </div>
    );
};

export default Login;