import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/logo.png";
import "./navbarstyle.css";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg " className="bg-body-tertiary animate__animated animate__fadeIn">
      <Container>
 <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="logo" className='logo-navbar' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navlinks">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/apps">One more date?</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
