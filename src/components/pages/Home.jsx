import { Col, Container, Row } from "react-bootstrap";
import ComoComprar from "../ComoComprar";
import Header from "../Header";
import ItemListContainer from "../ItemListContainer"

const Home = () => {
    return(
        <>
            <Header/>
            <Container>
                <Row>
                    <Col className="contenedor-productos">
                        <h2>Productos</h2> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="contenedor-gesto">
                            <div className="titulo-gesto bg-dark">
                                <h3>Gestos</h3>
                            </div>
                            <div className="contenedor-cards">
                                <ItemListContainer/>
                            </div>
                        </div>
                    </Col>
                </Row>         
            </Container>
            <Container fluid>
                <Row>
                    <Col className="parallax">
                    </Col>
                </Row>
            </Container>
            <ComoComprar/>   
        </>
    );
    
}


export default Home;