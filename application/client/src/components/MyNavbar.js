import React from 'react';
import '../styling/nav.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="my-navbar">
      <div className="left-section">
        <Nav.Link href="/home" className="nav-link">
          All Tours
        </Nav.Link>
      </div>
      <div className="right-section">
        <Nav.Link href="/login" className="nav-link">
          Login
        </Nav.Link>
        <Nav.Link href="/signup" className="nav-link">
          Sign Up
        </Nav.Link>
      </div>
    </Navbar>
  );
}

export default MyNavbar;
