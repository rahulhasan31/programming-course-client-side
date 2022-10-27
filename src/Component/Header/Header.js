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
        <div className=''>
     <Navbar className='shadow-sm p-3 mb-5 bg-body rounded bg-teal-400 bg-info' collapseOnSelect expand="lg" bg="info" variant="info">
      <Container>
      <div className='flex items-center justify-center w-12 h-12 rounded-full bg-cyan-200'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                fill='currentColor'
                className='d-flex-shrink-0 w-5 h-5 rounded-full text-cyan-600 text-decoration-non'
              >
                <path d='M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z'></path>
              </svg>
            </div>
        <div >
      <div className='container'>
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
      
        <Navbar.Brand as={Link} to='/' className='fw-bolder'>Programming Future</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link className='fw-bold text-black ' as={Link} to="/course">Courses</Nav.Link>
            <Nav.Link className='fw-bold text-black ' as={Link} to='/blog'>Blog</Nav.Link>
            <Nav.Link className='fw-bold text-black ' as={Link} to='/faq'>FAQ</Nav.Link>
           
            
          </Nav>
          <Nav>
            <>  {
                  user?.uid ?
                  <>
                  <span className='me-2 text-danger w-30 h-50 '>{user?.displayName}</span>
                  <Button className=' mt-3 w-30 h-50' onClick={logout} variant="primary" type="submit">
                  Logout
                  </Button>    
                  </>
                  :
                  <>
                  <Link to={'/login'} className="me-2"><Button>Login</Button></Link>
                  <br />
                  <Link className='' to={'/register'}><Button>Register</Button></Link>
                  </>
                  
                }
                </>

            <Nav.Link as={Link}>

             {
              user?.photoURL?
              <>
             <div className='d-flex' onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
             <Image className='mt-2' src={user?.photoURL}
              roundedCircle
              style={{height:'30px'}}
              >
                
              </Image>
              <div className='ms-4 mt-2'>
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