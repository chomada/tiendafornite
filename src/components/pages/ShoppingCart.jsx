import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { useNavigate } from "react-router-dom";

import { Button } from "@chakra-ui/react";
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";

export const ShoppingCart = () => {
  const navigate = useNavigate();
  const { infoProduct, eliminarProducto } = useContext(CartContext);

  console.log(infoProduct);

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
                      <ListGroupItem className="listItem">
                        {product.descripcion}
                      </ListGroupItem>

                      <ListGroupItem>
                        <p className="negrita">
                          Precio en pesos: ${product.precio}
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
                    <Button
                      colorScheme="purple"
                      className="addButton"
                      onClick={() => navigate("/productos/metodo-pago")}
                    >
                      Comprar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="col-12 text-center mt-5">
            <button
              className="btn btn-primary text-center mt-5"
              onClick={() => navigate("/productos")}
            >
              Volver a productos
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
