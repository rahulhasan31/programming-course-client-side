import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';


const Register = () => {
    const{createUser, googleProvider, gitProvider}= useContext(AuthContext)
    const provider= new GoogleAuthProvider()
    const signinGithub= new GithubAuthProvider()

    const handleRegisterSubmit=event=>{
        event.preventDefault()
        const form= event.target
        const name= form.name.value
        const photoURL=form.photoURL.value
        const email= form.email.value
        const password= form.password.value

        console.log(name ,photoURL,);
        createUser(email, password)
        .then(result=>{
            const user= result.user
            console.log(user);
            form.reset()
        })
        .catch(e=>console.error(e))

    }
    const handleGoogleLogin=()=>{
      googleProvider(provider)
      .then(result=>{
        const user= result.user
        console.log(user);
      })
      .catch(e=>console.error(e))
    }

    const handleGithubLogin=()=>{
      gitProvider(signinGithub)
      .then(result=>{
        const user= result.user
        console.log(user);
      })
      .catch(e=>console.error(e))
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

      <p>
      Have an account? <Link to={'/login'}>Login here</Link>
       </p>
      <Button variant="primary" type="submit">
        Sing Up
      </Button>

     
    </Form>
  <div>
  <ButtonGroup vertical>
      <Button className='mb-2 mt-2' variant="outline-primary" onClick={handleGoogleLogin}><FaGoogle/> Log In With Google</Button>
      <Button onClick={handleGithubLogin} className='' variant="outline-dark"><FaGithub/> Log In With Github</Button>
      </ButtonGroup>
  </div>
        </div>
    );
};

export default Register;