import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./NavBar.css";

const NavBar = () => {
  const [page, setPage] = useState("home");
  const changePage = (currentPage) => {
    setPage(currentPage);
  };
  return (
    <Navbar collapseOnSelect expand='md' className='navbar' sticky='top'>
      <Container>
        <Link to='/' href='https://fredemy-test.netlify.app' target='_top'>
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
              <button
                className={`${
                  page === "home"
                    ? "nav-button nav-button-highlight"
                    : "nav-button"
                }`}
                onClick={() => changePage("home")}>
                Home
              </button>
            </Link>
            <Link to='/favourites' className='text-color text-decoration-none'>
              <button
                className={`${
                  page === "favourites"
                    ? "nav-button nav-button-highlight"
                    : "nav-button"
                }`}
                onClick={() => changePage("favourites")}>
                Favourites
              </button>
            </Link>
            <Link to='/about' className='text-color text-decoration-none'>
              <button
                className={`${
                  page === "about"
                    ? "nav-button nav-button-highlight"
                    : "nav-button"
                }`}
                onClick={() => changePage("about")}>
                About
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
