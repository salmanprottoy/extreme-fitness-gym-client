import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const AdminHeader = () => {
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggerInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link className="nav-link mr-4 text-white" to="/">
          <i>Extreme Fitness GYM</i>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      {isAdmin && (
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="">
              <Link className="nav-link mr-4 text-white" to="/admin">
                Admin Dashboard
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link className="nav-link mr-4 text-white" to="/addCourse">
                Add Course
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link className="nav-link mr-4 text-white" to="/manageCourses">
                Manage Courses
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link className="nav-link mr-4 text-white" to="/addTrainer">
                Add Trainer
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link className="nav-link mr-4 text-white" to="/manageTrainers">
                Manage Trainers
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link className="nav-link mr-4 text-white" to="/addAdmin">
                Add Admin
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              {loggerInUser.name ? (
                <Link className="nav-link mr-4 text-white" to="/logout">
                  Logout
                </Link>
              ) : (
                <Link className="nav-link mr-4 text-white" to="/login">
                  Login
                </Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
};

export default AdminHeader;
