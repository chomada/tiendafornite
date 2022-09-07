import React from "react";
import Item from "./Item";
import "../index.css";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ItemList = ({ products }) => {

  return (
    <><div id='prod' className="marginProd"></div>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-4  personajes-principal">
        {products.map((prod) => {
          return <Item key={prod.id} products={prod} />;
        })}
      </Row>
      <div className="col-12 text-center mt-5">
        <button
          className="btn btn-primary text-center me-2"
          onClick={() => window.location.replace("#prod")}
        >
          Inicio
        </button>
       
        
      </div>
       {/* <LinkScroll className="linkeado marginR pointer" to="productos" spy={true} smooth={true} offset={-90} duration={500}>
              Productos
            </LinkScroll> */}
    </>
  );
};

export default ItemList;

