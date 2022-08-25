import React from 'react';
import BannerCarousel from './BannerCarousel';

const Header = () => {

  document.body.style = 'background: linear-gradient(black, #472c4a 60%, #472c4a) !important';
  return (
    <>
      <h1 className="display-1 text-center titulo-principal">Tienda Fornite</h1>
      <BannerCarousel /> 
    </>
  );
}

export default Header;