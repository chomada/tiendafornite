import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import CartProvider from "./context/CartProvider";

ReactDOM.render(
  <React.StrictMode>
      <CartProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
