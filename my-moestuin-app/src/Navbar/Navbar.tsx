import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MenuContainer = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">
        <img
          src="../android-chrome-192x192.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="React Planten logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
          <Nav.Link as={Link} to="./Planten">
            Planten
          </Nav.Link>
          <Nav.Link as={Link} to="./Plant-toevoegen">
            Plant toevoegen
          </Nav.Link>
          <Nav.Link as={Link} to="./Iets-anders">
            Iets anders
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
