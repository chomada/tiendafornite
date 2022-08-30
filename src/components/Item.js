import React, { useContext, useState } from "react";

import { Button } from "@chakra-ui/react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../context/CartProvider.jsx";

import { HiOutlinePlusCircle } from "react-icons/hi";
import { AiOutlineMinusCircle } from "react-icons/ai";
// import { AlertSuccess } from '../alerts/AlertSuccess'

import "../index.css";

const Item = ({ products }) => {
  const navigate = useNavigate();

  const [contadorProductos, setContadorProductos] = useState(1);

  const { modificarInfoProduct } = useContext(CartContext);

  const handlePurchase = (item) => {
    Swal.fire({
      title: "Importante",
      text: "¿Ya pasaron 48 hs desde que nos agregó en el juego?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then((result) => {
      if (result.isConfirmed) {
        modificarInfoProduct(item);
        Swal.fire({
          title: "Agregado con éxito al carrito",
          icon: "success",
          // timer: 2000
        });
      } else if (result.isDismissed) {
        navigate("/como-comprar");
      }
    });
  };

  return (
    <>
      <Col>
        <Card border="success" className="card-producto">
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/chomada/image/upload/v1660619263/4_szqp8p.png"
          />

          <Card.Body>
            <Card.Title className="producto-titulo">
              {products.nombre}
            </Card.Title>
            <ListGroup className="list-group-flush listGroup negrita">
              <ListGroupItem className="listItem">
                {products.descripcion}
              </ListGroupItem>

              <ListGroupItem>
                <p className="negrita">Precio en pesos: ${products.precio}</p>
              </ListGroupItem>
              <div className="contenedor-mas-menos">
                <AiOutlineMinusCircle className="fs-28" />
                <span>{contadorProductos}</span>
                <HiOutlinePlusCircle className="fs-28" />
              </div>
            </ListGroup>

            <Button
              colorScheme="purple"
              className="addButton"
              onClick={() => handlePurchase(products)}
            >
              Agregar al carrito
            </Button>
            <Button
              colorScheme="purple"
              className="addButton"
              onClick={() => navigate("/productos/carrito")}
            >
              Ver el carrito
            </Button>
          </Card.Body>
        </Card>
      </Col>
      
    </>
  );
};

export default Item;
