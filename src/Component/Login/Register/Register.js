import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Register = () => {

    const handleRegisterSubmit=event=>{
        event.preventDefault()
        const form= event.target
        const name= form.name.value
        const photoURL=form.photoURL.value
        const email= form.email.value
        const password= form.password.value

        console.log(name ,photoURL, email, password);

    }
    
    return (
        <div>
    <Form onSubmit={handleRegisterSubmit}>
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

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </div>
    );
};

export default Register;