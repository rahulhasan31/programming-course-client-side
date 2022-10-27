import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup, Card, Col, Container, FormCheck, FormControl, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';


const Register = () => {
    const{createUser, googleProvider, gitProvider, updateProfileUser}= useContext(AuthContext)
    const provider= new GoogleAuthProvider()
    const signinGithub= new GithubAuthProvider()
    const [error, setError]= useState('')
    const navigate= useNavigate()
    const location= useLocation()

    const from= location.state?.from?.pathname || '/'


    const handleRegisterSubmit=event=>{
        event.preventDefault()
        const form= event.target
        const name= form.name.value
        const photoURL=form.photoURL.value
        const email= form.email.value
        const password= form.password.value

        // console.log(name ,photoURL,);
        createUser(email, password)
        .then(result=>{
            const user= result.user
            console.log(user);
            form.reset()
            handleUpdateUse(name, photoURL)
            navigate(from , {replace: true})
        })
        .catch(e=>{
          const msg= e.message
          setError(msg)
        })

    }
    const handleUpdateUse=(name, photoURL)=>{

      const profile={
        displayName:name,
        photoURL: photoURL
      }
      updateProfileUser(profile)
      .then(result=>{})
      .catch(e=>console.error(e))
       
    }
    // const handleGoogleLogin=()=>{
    //   googleProvider(provider)
    //   .then(result=>{
    //     const user= result.user
    //     console.log(user);
    //   })
    //   .catch(e=>console.error(e))
    // }

    // const handleGithubLogin=()=>{
    //   gitProvider(signinGithub)
    //   .then(result=>{
    //     const user= result.user
    //     console.log(user);
    //   })
    //   .catch(e=>console.error(e))
    // }

    return (
        <div>
    {/* <Form onSubmit={handleRegisterSubmit} className='w-50'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' type="name" placeholder="Enter Your Name" />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name='photoURL' type="name" placeholder="Enter Your Photo Url" />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>

      <p>
      Have an account? <Link to={'/login'}>Login here</Link>
       </p>
      <Button variant="primary" type="submit">
        Sing Up
      </Button>

     
    </Form> */}
    {/* ---------- */}

   <Container fluid className='p-4 bg-success p-2 text-white bg-opacity-75overflow-hidden '>

<Row>

  <Col md='6' className='text-center text-md-start d-flex flex-column justify-content-center '>

    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
    The best offer<br />
      <span style={{color: 'hsl(218, 81%, 75%)'}}> for your</span>
    </h1>

   

  </Col>

  <Col md='6' className='position-relative'>

    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

    <Card className='my-5 bg-glass shadow-lg p-3 mb-5 bg-body rounded '>
      <Card.Body className='p-5'>
     <Form onSubmit={handleRegisterSubmit} className='w-50'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-info fw-bold">Name</Form.Label>
        <Form.Control name='name' type="name" placeholder="Enter Your Name" />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-info fw-bold">Photo URL</Form.Label>
        <Form.Control name='photoURL' type="name" placeholder="Enter Your Photo Url" />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-info fw-bold">Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email"  required/>
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-info fw-bold">Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>

      <p className="text-info fw-bold">
      Have an account? <Link  to={'/login'}>Login here</Link>
       </p>
       <p className='text-danger' >{error}</p>
      
      <Button   variant="primary" type="submit">
        Sing Up
      </Button>
   

     
    </Form>
      

      </Card.Body>
    </Card>

  </Col>

</Row>

</Container>
        </div>
    );
};

export default Register;