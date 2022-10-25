import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const {user, logout}= useContext(AuthContext)
    return (
        <div>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>Programming Future</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/course">Courses</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">  {
                  user?.uid ?
                  <>
                  <span className='me-2 '>{user?.displayName}</span>
                  <Button onClick={logout} variant="primary" type="submit">
                  Logout
                  </Button>    
                  </>
                  :
                  <>
                  <Link to={'/login'}>Login</Link>
                  </>
                  
                }
                </Nav.Link>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;