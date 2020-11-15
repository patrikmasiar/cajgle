import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Menu = () => (
  <Navbar bg="light" variant="light" expand="lg">
    <Navbar.Brand as={Link} to="/">Cajgle</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/map">Mapa</Nav.Link>
        <Nav.Link as={Link} to="/friends">Moji kamaráti</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default React.memo(Menu);
