import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [infoProduct, setInfoProduct] = useState([]);
  

  const agregarProducto = (info)=>{
    setInfoProduct([ ...infoProduct, info  ])
  }

  const modificarPrecio = (item, contador)=>{
    let newPrecio = item.precio * contador
    setInfoProduct([
      ...infoProduct,
      { precio: newPrecio }
    ])
  }

  const eliminarProducto = (id)=>{
    const newData = infoProduct.filter( product => product.id !== id )
    setInfoProduct(newData)
  }




  return <CartContext.Provider value={{ infoProduct, agregarProducto, eliminarProducto, modificarPrecio }}>{ children }</CartContext.Provider>;
};

export default CartProvider;
