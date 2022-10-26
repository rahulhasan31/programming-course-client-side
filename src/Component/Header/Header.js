import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import LeftSide from '../LeftSide/LeftSide';


const Header = () => {
    const {user, logout}= useContext(AuthContext)
    return (
        <div>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'><Image 
            roundedCircle
            style={{height:'30px'}}
            src="/image/weblogo.jpg">

            </Image>Programming Future</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to="/course">Courses</Nav.Link>
            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
            <Nav.Link as={Link} to='/faq'>FAQ</Nav.Link>
           
            
          </Nav>
          <Nav>
            <>  {
                  user?.uid ?
                  <>
                  <span className='me-2 text-danger '>{user?.displayName}</span>
                  <Button onClick={logout} variant="primary" type="submit">
                  Logout
                  </Button>    
                  </>
                  :
                  <>
                  <Link to={'/login'} className="me-2"><Button>Login</Button></Link>
                  <Link to={'/register'}><Button>Register</Button></Link>
                  </>
                  
                }
                </>

            <Nav.Link eventKey={2} href="#memes">

             {
              user?.photoURL?
              <>
              <Image src={user?.photoURL}
              roundedCircle
              style={{height:'30px'}}
              >
              </Image>
              </>
              :
              <FaUser></FaUser>

             }

            </Nav.Link>
           
          </Nav>
          <div className='d-lg-none'>
            <LeftSide></LeftSide>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;