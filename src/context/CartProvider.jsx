import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [infoProduct, setInfoProduct] = useState([]);

  const inicioCarritoStorage = (data) => {
    setInfoProduct(data);
  };

  const validarCarrito = (producto) => {
    return infoProduct.find((item) => item.id === producto.id);
  };
  var verCarrito = function () {
    if (localStorage.carrito) {
      setInfoProduct(JSON.parse(localStorage.carrito));
    }
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
  };

  const totalCompra = () => {
    const precios = infoProduct.map((item) => item.cantidad * item.precio);
    return precios.reduce((a, b) => a + b);
  };

  const vaciarCarrito = ()=>{
    setInfoProduct([])
    localStorage.clear()
  }

  const eliminarProducto = (id) => {
    const newData = infoProduct.filter((product) => product.id !== id);
    setInfoProduct(newData);

    const localCarrito = JSON.parse(localStorage.carrito);
    if (localCarrito.length === 1) {
      console.log("entre al remove 1");
      localStorage.clear();
    }
    console.log("carrito actual con remove: ", infoProduct);
  };
  useEffect(() => {
    if (infoProduct.length !== 0) {
      localStorage.carrito = JSON.stringify(infoProduct);
    } else {
      verCarrito();
    }
  }, [infoProduct]);

  return (
    <CartContext.Provider
      value={{
        infoProduct,
        agregarProducto,
        eliminarProducto,
        totalCompra,
        inicioCarritoStorage,
        vaciarCarrito
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
