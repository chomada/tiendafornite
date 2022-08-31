import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { CartContext } from '../context/CartProvider.jsx'



import "../index.css";
import { IconButton } from "@chakra-ui/react";
import { FaGitlab } from "react-icons/fa";

const NavBar = () => {
  const { infoProduct } = useContext(CartContext)
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
           
            <Link className="linkeado marginR pointer" to="/productos">
              Productos
            </Link>
          </Nav>

          <Nav className="d-flex ">
           
            <Link className="linkeado marginR pointer" to="/como-comprar">
              Cómo comprar?
            </Link>
            <div className="d-flex align-items-center contador-carrito mt-2 mt-lg-0">
              <span className="contador">{infoProduct.length}</span>
              <Link className="pointer text-light" to="/productos/carrito">
                <AiOutlineShoppingCart className="carrito-icon" />
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
