import React from "react";
import { useNavigate } from "react-router-dom";

const ComoComprar = () => {
  document.body.style =
    "background: linear-gradient(black, #26272b 40%, #26272b) !important";

  const navigate = useNavigate();
  return (
    <>
      <div className="centradoTuto batalla5">
        <h2 className="centradoTuto">Importante!</h2>
        <p>
          1- Agregar como amigo en Fornite al usuario "DadorDeRegalos" (Es
          imprescindible este paso para poder continuar).
        </p>
        <p>
          2- Luego de que te aceptamos, esperar 48 hs (esta regla es de Epic
          Games para permitir los regalos entre amigos de Fornite).
        </p>
        <p>
          3- Elegir atuendo, pico, gesto, combo o lo que te guste de la tienda
          del juego.
        </p>
        <p>
          4- Ingresar a los productos de esta página o hablarnos por Instagram,
          para ver el precio en pesos de lo que elegiste.{" "}
        </p>
        <p>
          5- Pagar por medio de transferencia bancaria o mercado pago, desde
          esta pagina o poniendote en contacto con nosotros en Instagram.{" "}
        </p>
        <p>
          6- Al instante recibirás tu producto elegido como un regalo dentro del
          juego (a veces es necesario salir del juego y volver a entrar para que
          se complete el envío).{" "}
        </p>

        <button
          className="btn btn-primary text-center mt-5"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
    </>
  );
};

export default ComoComprar;
