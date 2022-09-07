import React, { createContext, useState } from "react";



export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [ infoProduct, setInfoProduct ] = useState([]);

  const inicioCarritoStorage = (data)=>{
    setInfoProduct(data)
  }

  

  const validarCarrito = (producto) => {
    return infoProduct.find((item) => item.id === producto.id);
  };

  const agregarProducto = (info, contador) => {
    if (validarCarrito(info)) {
      const infoNuevo = infoProduct.filter((item) => item.id === info.id);

      infoNuevo[0].cantidad = infoNuevo[0].cantidad + contador;

      const nuevoCarritoFiltrado = infoProduct.filter(
        (item) => item.id !== info.id
      );

      nuevoCarritoFiltrado.push(infoNuevo[0]);

      setInfoProduct(nuevoCarritoFiltrado);
      
    } else {
      setInfoProduct([...infoProduct, { ...info, cantidad: contador }]);
      
    }
    localStorage.setItem('productos', JSON.stringify(infoProduct))
  };

  const totalCompra = () => {
    const precios = infoProduct.map((item) => item.cantidad * item.precio);
    return precios.reduce((a, b) => a + b);
  };

  const eliminarProducto = (id) => {
    const newData = infoProduct.filter((product) => product.id !== id);
    setInfoProduct(newData);
    
  };

  const vaciarCarrito = ()=>{
    setInfoProduct([])
    localStorage.removeItem('productos')
  }

  return (
    <CartContext.Provider
      value={{
        infoProduct,
        agregarProducto,
        eliminarProducto,
        totalCompra,
        vaciarCarrito,
        inicioCarritoStorage
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
