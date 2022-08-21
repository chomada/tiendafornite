
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComoComprar from "./components/ComoComprar";
import Header from "./components/Header";

import Footer from "./components/Footer";
import { PaymentMethods } from "./components/PaymentMethods";
import NavBar from "./components/NavBar";
import { TransferenciaBancaria } from "./components/TransferenciaBancaria";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/metodo-pago" element={<PaymentMethods />} />
          <Route path="/como-comprar" element={<ComoComprar />} />
          <Route path="/transferencia-bancaria" element={<TransferenciaBancaria />} />

          <Route path="*" element={<Header />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
