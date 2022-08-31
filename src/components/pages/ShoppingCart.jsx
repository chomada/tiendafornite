import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import { useNavigate } from "react-router-dom";

import { Button } from "@chakra-ui/react";
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { Badge,Text } from '@chakra-ui/react'

export const ShoppingCart = () => {
  const navigate = useNavigate();
  const { infoProduct, eliminarProducto, totalCompra } = useContext(CartContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {

    if (infoProduct.length > 0) {
      
      setTotal(totalCompra())
    }
    


  }, [infoProduct]);



  const finalizarCompra = ()=>{
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
        // const newItem = modificarPrecio(product,contadorProductos)
        navigate("/productos/metodo-pago")
        
        
      } else if (result.isDismissed) {
        navigate("/como-comprar");
      }
    });
  }

  return (
    <div className="container">
      {infoProduct.length > 0 ? (
        <>
          <Row xs={1} sm={2} lg={3} xl={4} className="g-4 personajes-principal">
            {infoProduct.map((product) => (
              
              <Col key={product.id}>

                <Card border="success" className="card-producto">
                  <Card.Img
                    variant="top"
                    src="https://res.cloudinary.com/chomada/image/upload/v1660619263/4_szqp8p.png"
                  />

                  <Card.Body>
                    <Card.Title className="producto-titulo">
                     {product.nombre}
                    </Card.Title>
                    <ListGroup className="list-group-flush listGroup negrita">
                      <ListGroupItem className="listItem4">
                        {product.descripcion}
                        <p>Cantidad: { product.cantidad } </p>
                      </ListGroupItem>

                      <ListGroupItem className="listItem3">
                        <p className="negrita">
                          Precio en pesos: ${product.precio * product.cantidad}
                        </p>
                      </ListGroupItem>
                    </ListGroup>

                    <Button
                      colorScheme="purple"
                      className="addButton"
                      onClick={() => eliminarProducto(product.id)}
                    >
                      Eliminar del carrito
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="col-12 text-center mt-5">
          <Text fontWeight='bold'>
      <Badge  >
      Total compra: {total}
      </Badge>
      
    </Text>
          </div>
          <div className="col-12 text-center mt-2">
           
            <button
              
              className="btn btn-warning text-center"
              onClick={() => finalizarCompra()}
            >
              Finalizar compra
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="contenedor-carrito-sin-elementos">
            <h2 className="text-light">No posee elementos en el carrito</h2>
          </div>
          <div className="col-12 text-center mt-5">
            <button
              className="btn btn-primary text-center mt-5"
              onClick={() => navigate("/productos")}
            >
              Volver a productos
            </button>
          </div>
        </>
      )}
    </div>
  );
};
