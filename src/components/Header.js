import React from 'react';
import NavBar from './NavBar';
import logo from '../assets/fornite.gif'

const Header = () => {

  document.body.style = 'background: linear-gradient(black, #472c4a 60%, #472c4a) !important';
  return (
    <>
      
      <h1 className="display-1 centrado tituloBatalla batalla5">Tienda Fornite</h1>
      <img className="imageRick" src={logo} alt="loading..." />
    </>
  )
}

export default Header