import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useGlobalContext } from "../../context-providerr/context-provider";
import { useAuthContext } from "../../context-providerr/auth-provider";
import "./NavBar.css";

const NavBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const changePage = (currentPage) => {
        setIsExpanded(!!isExpanded);
        setPage(currentPage);
    };
    const handleAuthButtonClick = () => {
        setIsExpanded(!!isExpanded);
        openSignModal();
    };

    const { openSignModal, page, setPage } = useGlobalContext();
    const { isLoggedIn, user } = useAuthContext();

    const path = useLocation();
    const pathname = path.pathname.substring(1, path.pathname.length);
    console.log(pathname);
    if (!pathname) {
        setPage("home");
    } else {
        setPage(pathname);
    }

    return (
        <Navbar
            collapseOnSelect
            expand='md'
            expanded={isExpanded}
            className='navbar'
            sticky='top'>
            <Container>
                <Link
                    to='/'
                    href='https://fredemy-test.netlify.app'
                    target='_top'>
                    <Navbar.Brand className='app-title'>
                        <span className='title-first'>Free</span>
                        <span className='title-second'>Demy</span>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle
                    onClick={() => setIsExpanded()}
                    aria-controls='responsive-navbar-nav'
                    className='hamburger ml-auto'
                />

                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto ml-auto'>
                        <Link
                            to='/'
                            className='text-color text-decoration-none'
                            onClick={() => changePage("home")}>
                            <button
                                className={`${
                                    page === "home"
                                        ? "nav-button nav-button-highlight"
                                        : "nav-button"
                                }`}>
                                Home
                            </button>
                        </Link>
                        <Link
                            to='/favourites'
                            className='text-color text-decoration-none'
                            onClick={() => changePage("favourites")}>
                            <button
                                className={`${
                                    page === "favourites"
                                        ? "nav-button nav-button-highlight"
                                        : "nav-button"
                                }`}>
                                Favourites
                            </button>
                        </Link>
                        <Link
                            to='/about'
                            className='text-color text-decoration-none'
                            onClick={() => changePage("about")}>
                            <button
                                className={`${
                                    page === "about"
                                        ? "nav-button nav-button-highlight"
                                        : "nav-button"
                                }`}>
                                About
                            </button>
                        </Link>

                        <Link
                            to='/api'
                            className='d-none d-md-block text-color text-decoration-none mr-5'
                            onClick={() => changePage("api")}>
                            <button
                                className={`${
                                    page === "api"
                                        ? "nav-button nav-button-highlight"
                                        : "nav-button"
                                }`}>
                                API
                            </button>
                        </Link>
                        <button
                            className='login-button'
                            onClick={() => handleAuthButtonClick()}>
                            {isLoggedIn ? `${user.name}` : 'Login'} 
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
