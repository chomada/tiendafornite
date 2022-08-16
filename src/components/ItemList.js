import React from "react";
import Item from "./Item";
import "../index.css";
import { Row } from "react-bootstrap";

const ItemList = ({ products }) => {
 
  return (
    <Row xs={1} sm={2} md={2} lg={4} className="g-4 personajes-principal">
      {products.map((prod) => {
        return <Item key={prod.id} products={prod} />;
      })}
    </Row>
  );
};

export default ItemList;
