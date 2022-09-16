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

  const { agregarProducto } = useContext(CartContext);

  const restarProducto = ()=>{
    if(contadorProductos === 1) return
    setContadorProductos(contadorProductos - 1)
    
  }

  const sumarProducto = ()=>{
    
    if(contadorProductos === 10) return
    setContadorProductos(contadorProductos + 1)
    
  }



  const handlePurchase = (product, contadorProductos) => {
    agregarProducto(product, contadorProductos);
    Swal.fire({
      title: "Agregado con éxito al carrito",
      text: "",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#800080",
      cancelButtonColor: "#ecc94b",
      confirmButtonText: "Seguir comprando",
      cancelButtonText: "Ver carrito",
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then((result) => {
      if (result.isDismissed) {
        // const newItem = modificarPrecio(product,contadorProductos)
        navigate("/productos/carrito");        
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
            className="selected-none"
          />

          <Card.Body>
            <Card.Title className="producto-titulo selected-none">
             {products.nombre}
            </Card.Title>
            <ListGroup className="list-group-flush listGroup negrita">
              <ListGroupItem className="listItem selected-none">
                {products.descripcion}
              </ListGroupItem>

              <ListGroupItem>
                <p className="listItem2 negrita selected-none">Precio en pesos: ${products.precio * contadorProductos}</p>
              </ListGroupItem>
              <div className="contenedor-mas-menos">
                <AiOutlineMinusCircle className="fs-28 pointer" onClick={ ()=> restarProducto(products) }/>
                <span className="selected-none">{ contadorProductos }</span>
                <HiOutlinePlusCircle className="fs-28 pointer" onClick={ ()=> sumarProducto(products) }/>
              </div>
            </ListGroup>

            <Button
              colorScheme="purple"
              className="addButton"
              onClick={() => handlePurchase(products, contadorProductos)}
            >
              Agregar al carrito
            </Button>
            
          </Card.Body>
        </Card>
      </Col>
      
    </>
  );
};

export default Item;
