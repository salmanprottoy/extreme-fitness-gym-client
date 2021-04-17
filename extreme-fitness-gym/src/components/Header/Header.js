import React from "react";
import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link className="nav-link mr-4 text-white" to="/">
          <i>Extreme Fitness GYM</i>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="">
            <Link className="nav-link mr-4 text-white" to="/home">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href="">
            <Link className="nav-link mr-4 text-white" to="/about">
              About us
            </Link>
          </Nav.Link>
          <Nav.Link href="">
            <Link class="nav-link mr-4 text-white" to="/courses">
              Courses
            </Link>
          </Nav.Link>
          <Nav.Link href="">
            <Link className="nav-link mr-4 text-white" to="/contact">
              Contact
            </Link>
          </Nav.Link>
          <Nav.Link href="">
            <Link className="nav-link mr-4 text-white" to="/blog">
              Blog
            </Link>
          </Nav.Link>
          <Nav.Link href="">
            <Link className="nav-link mr-4 text-white" to="/admin">
              Admin
            </Link>
          </Nav.Link>
          <Nav.Link href="">
            {loggerInUser.name ? (
              <Link className="nav-link mr-4 text-white" to="/profile">
                {/* {loggerInUser.name} */}
                User Profile
              </Link>
            ) : (
              <Link className="nav-link mr-4 text-white" to="/login">
                Login
              </Link>
            )}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
