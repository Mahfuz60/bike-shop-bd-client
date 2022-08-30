import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './NavBar.css';

const NavBar = () => {
  const { user, logOut } = useFirebase();

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand className='navHeader'>
          <span>BikeShop </span> BD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Link className='navLink' to='/'>
              Home
            </Link>
            <Link className='navLink' to='/products'>
              Explore BikeShop
            </Link>
            <Link className='navLink' to='/home'>
              DashBoard
            </Link>
            {/* {user?.email && (
              <span style={{ fontWeight: 'bold', fontSize: '18px', color: 'orange' }}>
                {user.displayName}
              </span>
            )} */}
            {user?.email ? (
              <button onClick={logOut} className='logout-btn px-2'>
                LogOut<i className='fas fa-sign-out-alt mx-1'></i>
              </button>
            ) : (
              <Link className='navLink' to='/login'>
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
