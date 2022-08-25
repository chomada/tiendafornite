import { Container, Row, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MercadoPago from "../assets/mercadoPago.png";
import TransferenciaBancaria from "../assets/transferencia-bancaria.jpg";

export const PaymentMethods = () => {
  const navigate = useNavigate();

  const redirigir = () => {
    navigate('/transferencia-bancaria')
  }
  document.body.style = 'background: linear-gradient(black, #472c4a 60%, #472c4a) !important';
  return (
    <>
      <Container>
        <Row>
          <Col>
                <h2 className="contenedor-metodosPagos">Métodos de Pago</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="contenedor-pago bg-dark">
              <div className="d-flex justify-content-center">
                <div className="d-flex justify-content-center">
                  <img
                      src={ TransferenciaBancaria }
                      alt="mercado pago"
                      className="img-thumbnail w-75 p-0 pointer"
                      onClick={()=> redirigir()}
                    />
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    src={ MercadoPago }
                    alt="mercado pago"
                    className="img-thumbnail w-75 p-0 pointer"
                  />
                  </div>
              </div>             
              <div className="col-12 text-center mt-5">
                <button
                  className="btn btn-primary text-center mt-5"
                  onClick={() => navigate(-1)}
                >
                  Volver
                </button>
              </div>
            </div>     
          </Col>
        </Row>
      </Container>
    </>
  );
};
