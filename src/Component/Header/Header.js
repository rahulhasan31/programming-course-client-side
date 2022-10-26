import React, { useContext, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import LeftSide from '../LeftSide/LeftSide';
import 'react-toastify/dist/ReactToastify.css';
import './Header.css'


const Header = () => {
    const {user, logout}= useContext(AuthContext)
    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode]= useState(false)
  
    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <div>
        <div >
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
      
    </div>
        </div>
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

            <Nav.Link as={Link}>

             {
              user?.photoURL?
              <>
             <div className='d-flex' onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
             <Image  src={user?.photoURL}
              roundedCircle
              style={{height:'30px'}}
              >
                
              </Image>
              <div className='ms-4'>
             {open ? user?.displayName  : '' }
             </div>
             </div>
            
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