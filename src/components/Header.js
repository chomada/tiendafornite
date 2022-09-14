import React from "react";
import BannerCarousel from "./BannerCarousel";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  document.body.style =
    "background: linear-gradient(black, #472c4a 60%, #472c4a) !important";
  return (
    <div className="container">
      {/* <h1 className="display-1 text-center titulo-principal">Tienda Fornite</h1> */}
      <BannerCarousel />
      <div className="col-12 text-center py-3">
        <button
          className="btn btn-primary text-center"
          onClick={() => navigate("/productos")}
        >
          Productos
        </button>
      </div>
    </div>
  );
};

export default Header;
