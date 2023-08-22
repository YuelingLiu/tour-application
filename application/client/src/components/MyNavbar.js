import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../styling/nav.css'; // Importing the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNavbar() {
  return (
    <Navbar expand="lg" style={{ padding: '20px' }}>
      <Navbar.Brand
        href="/"
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginLeft: '50px',
          color: '#89CFF0',
          textTransform: 'capitalize',
        }}
      >
        Natours
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
              textTransform: 'capitalize',
            }}
          >
            Login
          </Nav.Link>
          <Nav.Link
            href="/register"
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              textTransform: 'capitalize',
              marginRight: '100px',
            }}
          >
            Sign up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
