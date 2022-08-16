import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

export const PaymentMethods = () => {
  const navigate = useNavigate();

  return (
    <>
      
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center flex-column align-items-center">
              <h1 className="fw-bold mb-2 size-title">Métodos de Pago</h1>
              <button
                className="btn btn-primary w-25 text-center"
                onClick={() => navigate("/productos")}
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
