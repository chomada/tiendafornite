import React from 'react'
import { Card, Col, ListGroup,ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react'

import '../index.css'
const Item = ({ products }) => {
    const navigate = useNavigate();

    return (

        <Col >
            <Card border="success"className="personajes-principal card-detail"  >
                <Card.Img variant="top" src={products.imagen} />
                <Card.Body>
                    <Card.Title className="personaje-titulo">{products.nombre}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem >Descripcion</ListGroupItem>
                        <ListGroupItem >Precio en pesos: ${products.precio}</ListGroupItem>
                        

                    </ListGroup>
                    <Button  colorScheme='purple' className="addButton" >Comprar</Button>

                </Card.Body>

            </Card>
        </Col>


    )
}

export default Item