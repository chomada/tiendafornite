import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

import { Link as LinkScroll } from 'react-scroll'

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
            ></IconButton>
            <span className="titulo-portada">Tienda Fornite</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkScroll className="linkeado marginR pointer" to="productos" spy={true} smooth={true} offset={-90} duration={500}>
              Productos
            </LinkScroll>
          </Nav>

          <Nav>
            <LinkScroll className="linkeado marginR pointer" to="como-comprar" spy={true} smooth={true} offset={-90} duration={500}>
              Cómo comprar?
            </LinkScroll>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
