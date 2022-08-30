import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [infoProduct, setInfoProduct] = useState([]);
  

  const modificarInfoProduct = (info)=>{
    setInfoProduct([ ...infoProduct, info  ])
  }

  const eliminarProducto = (id)=>{
    const newData = infoProduct.filter( product => product.id !== id )
    setInfoProduct(newData)
  }




  return <CartContext.Provider value={{ infoProduct, modificarInfoProduct, eliminarProducto }}>{ children }</CartContext.Provider>;
};

export default CartProvider;
