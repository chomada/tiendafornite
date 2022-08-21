import { useNavigate } from "react-router-dom";
import MercadoPago from "../assets/mercadoPago.png";

export const PaymentMethods = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center flex-column align-items-center mb-4">
              <h1 className="fw-bold mb-2 size-title">Métodos de Pago</h1>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center animate__animated animate__fadeIn">
            <img
              src={MercadoPago}
              alt="mercado pago"
              className="img-thumbnail w-75 p-0"
            />
          </div>
          <div className="col-12 col-lg-6 animate__animated animate__fadeIn"></div>
          <div className="col-12 text-center mt-5">
            <button
              className="btn btn-primary w-25 text-center"
              onClick={() => navigate("/productos")}
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
