import { Button } from "@chakra-ui/react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React from "react";
import Swal from "sweetalert2";

import "../index.css";

const Item = ({ products }) => {
  const navigate = useNavigate();
  const handlePurchase = () => {
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
        navigate("/productos/metodo-pago");
      } else if (result.isDismissed) {
        navigate("/como-comprar");
      }
    });
  };

  return (
    <Col>
      <Card border="success" className="personajes-principal card-detail">
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/chomada/image/upload/v1660619263/4_szqp8p.png"
        />

        <Card.Body>
          <Card.Title className="personaje-titulo negrita">
            {products.nombre}
          </Card.Title>
          <ListGroup className="list-group-flush listGroup negrita">
            <ListGroupItem className="listItem">
              {products.descripcion}
            </ListGroupItem>

            <ListGroupItem>
              <p className="negrita">Precio en pesos: ${products.precio}</p>
            </ListGroupItem>
          </ListGroup>

          <Button
            colorScheme="purple"
            className="addButton"
            onClick={() => handlePurchase()}
          >
            Comprar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
//prueba
