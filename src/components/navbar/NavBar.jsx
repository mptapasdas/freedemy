import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useGlobalContext } from "../../context-provider/context-provider";
import { useAuthContext } from "../../context-provider/auth-provider";
import "./NavBar.css";

const NavBar = () => {
  const { openSignModal, page, setPage } = useGlobalContext();
  const { isLoggedIn, user } = useAuthContext();

  const [isExpanded, setIsExpanded] = useState(false);

  const changePage = (currentPage) => {
    setIsExpanded(false);
    setPage(currentPage);
  };

  const handleAuthButtonClick = () => {
    setIsExpanded(false);
    openSignModal();
  };

  const path = useLocation();
  const pathname = path.pathname.substring(1, path.pathname.length);
  if (!pathname) {
    setPage("home");
  } else {
    setPage(pathname);
  }

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      expanded={isExpanded}
      className="navbar"
      sticky="top"
    >
      <Container>
        <Link to="/" href="https://fredemy.vercel.app" target="_top">
          <Navbar.Brand className="app-title">
            <span className="title-first">Free</span>
            <span className="title-second">Demy</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          onClick={() => setIsExpanded(!isExpanded)}
          aria-controls="responsive-navbar-nav"
          className="hamburger ml-auto"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ml-auto">
            <Link
              to="/"
              className="text-color text-decoration-none"
              onClick={() => changePage("home")}
            >
              <button
                className={`${
                  page === "home"
                    ? "nav-button nav-button-highlight"
                    : "nav-button"
                }`}
              >
                Home
              </button>
            </Link>
            <Link
              to="/favourites"
              className="text-color text-decoration-none"
              onClick={() => changePage("favourites")}
            >
              <button
                className={`${
                  page === "favourites"
                    ? "nav-button nav-button-highlight"
                    : "nav-button"
                }`}
              >
                Favourites
              </button>
            </Link>
            <Link
              to="/about"
              className="text-color text-decoration-none"
              onClick={() => changePage("about")}
            >
              <button
                className={`${
                  page === "about"
                    ? "nav-button nav-button-highlight"
                    : "nav-button"
                }`}
              >
                About
              </button>
            </Link>

            <Link
              to="/suggest"
              className="text-color text-decoration-none mr-md-5"
              onClick={() => changePage("suggest")}
            >
              <button
                className={`${
                  page === "suggest"
                    ? "nav-button nav-button-highlight"
                    : "nav-button"
                }`}
              >
                Suggest
              </button>
            </Link>
            <button
              className="login-button"
              onClick={() => handleAuthButtonClick()}
            >
              {isLoggedIn ? `${user.name}` : "Login"}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
