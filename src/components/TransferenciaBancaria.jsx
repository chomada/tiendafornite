import { useState } from "react";
import ModalCompra from "./ModalCompra";

export const TransferenciaBancaria = () => {

  const [modal, setModal] = useState(false);

  return (
    <>
      <h1>TransferenciaBancaria</h1>
      <div className="btn btn-primary" onClick={()=>setModal(true)}>Confirmar pago</div>
      <ModalCompra modal={modal} setModal={setModal}/>
    </>
  );
};
