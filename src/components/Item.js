import React from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
//import { useNavigate } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
import { alertConfirmationSuccess } from "../alerts/alerts";
import { useNavigate } from "react-router-dom";

import "../index.css";
const Item = ({ products }) => {
  const navigate = useNavigate();
//prueba
  const handlePurchase = () => {
    navigate("/productos/metodo-pago");
    alertConfirmationSuccess();
  };


  return (
    <Col>
      <Card border="success" className="personajes-principal card-detail">
        <Card.Img variant="top" src="https://res.cloudinary.com/chomada/image/upload/v1660619263/4_szqp8p.png" />
      

      
        <Card.Body>
        <Card.Title className="personaje-titulo">
            {products.nombre}
          </Card.Title>
        <ListGroup  className="list-group-flush listGroup">
            <ListGroupItem className="listItem">{products.descripcion}</ListGroupItem>
          
            <ListGroupItem ><p className="negrita">Precio en pesos: ${products.precio}</p></ListGroupItem>
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
