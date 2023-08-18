import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../styling/nav.css'; // Importing the CSS file
function MyNavbar() {
  return (
    <Navbar
      className="custom-navbar"
      variant="dark"
      expand="lg"
      style={{ padding: '20px' }}
    >
      <Navbar.Brand
        href="/"
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginLeft: '10px',
          color: '#333333',
        }}
      >
        TOUR-VISTA
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            href="/login"
            style={{
              fontSize: '20px',
              marginRight: '10px',
              fontWeight: 'bold',
              color: '#333333',
            }}
          >
            Login
          </Nav.Link>
          <Nav.Link
            href="/register"
            style={{ fontSize: '20px', fontWeight: 'bold', color: '#333333' }}
          >
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
