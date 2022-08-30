import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import TeamProvider from "./context/TeamProvider";
import CartProvider from "./context/CartProvider";

ReactDOM.render(
  <React.StrictMode>
    <TeamProvider>
      <CartProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </CartProvider>
    </TeamProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
