import React from "react";
import Item from "./Item";
import "../index.css";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ItemList = ({ products }) => {
  const navigate = useNavigate();

  return (
    <>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-4 personajes-principal">
        {products.map((prod) => {
          return <Item key={prod.id} products={prod} />;
        })}
      </Row>
      <div className="col-12 text-center mt-5">
        <button
          className="btn btn-primary text-center me-2"
          onClick={() => navigate("/")}
        >
          Inicio
        </button>
        <button
          className="btn btn-primary text-center"
          onClick={() => navigate("/productos/carrito")}
        >
          Ver el carrito
        </button>
      </div>
    </>
  );
};

export default ItemList;

