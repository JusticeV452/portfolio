import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

function SiteNav() {
  return (
    <Navbar id="site-nav" expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark" style={{
        position: "sticky",
        top: "0"
      }}>
      <Container>
        <Navbar.Brand href="/">Justice Vidal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="https://github.com/JusticeV452">GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/justice-vidal-838471121/">LinkedIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="https://github.com/JusticeV452/portfolio" style={{color: "white"}}>Source Code</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default SiteNav;
