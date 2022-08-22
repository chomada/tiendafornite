import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

import "../index.css";
import { IconButton } from "@chakra-ui/react";
import { FaGitlab } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="linkeado " to="/">
            <IconButton
              colorScheme="steal"
              aria-label="lab"
              icon={<FaGitlab />}
            ></IconButton>{" "}
            <span className="titulo-portada">Tienda Fornite</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="linkeado marginR" to="/productos">
              Productos
            </Link>
          </Nav>

          <Nav>
            <Link className="linkeado marginR" to="/como-comprar">
              Cómo comprar?
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
