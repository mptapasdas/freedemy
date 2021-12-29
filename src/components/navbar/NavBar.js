import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='md' className='navbar' sticky='top'>
      <Container>
        <Link href='https://fredemy-test.netlify.app' target='_parent'>
          <Navbar.Brand className='title'>
            <span className='title-first'>Free</span>
            <span className='title-second'>Demy</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          className='hamburger ml-auto'
        />

        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto ml-auto'>
            <Link to='/' className='text-color text-decoration-none'>
              <button className='nav-button'>Home</button>
            </Link>
            <Link to='/favourites' className='text-color text-decoration-none'>
              <button className='nav-button'>Favourites</button>
            </Link>
            <Link to='/about' className='text-color text-decoration-none'>
              <button className='nav-button'>About</button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
