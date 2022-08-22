import { useState } from "react";
import ModalCompra from "./ModalCompra";
import { Toaster } from "react-hot-toast";
import { CopyClipboard } from "./CopyClipboard";
import { CopyClipboardCheck } from "./CopyClipboardCheck";

export const TransferenciaBancaria = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="container w-50">
      <h1>Transferencia Bancaria</h1>
      <div className="row">
        <div className="col-12">
          <hr />
          <h3 className="text-center">Federico Machado</h3>
          <div className="list-group list-group-flush">
            <div className="list-group-item d-flex justify-content-between">
              <div>
                <b>Mi CBU:</b> <span>11111111111111111111111111</span>
              </div>
              <div>
                <CopyClipboard
                  value="11111111111111111111111111"
                  className="text-end"
                >
                  <CopyClipboardCheck />
                </CopyClipboard>
              </div>
            </div>
            <div className="list-group-item d-flex justify-content-between">
              <div>
                <b>Alias:</b> <span>goku.vegeta.broly</span>
              </div>
              <div>
                <CopyClipboard
                  value="goku.vegeta.broly"
                  className="text-end"
                >
                  <CopyClipboardCheck />
                </CopyClipboard>
              </div>
            </div>
            <div className="list-group-item d-flex justify-content-between">
              <div>
                <b>Cuit:</b> <span>20-20528695-1</span>
              </div>
              <div>
                <CopyClipboard
                  value="20-20528695-1"
                  className="text-end"
                >
                  <CopyClipboardCheck />
                </CopyClipboard>
              </div>
            </div>
            <div className="list-group-item d-flex justify-content-between">
              <div>
                <b>Número de cuenta:</b> <span>1010101010</span>
              </div>
              <div>
                <CopyClipboard
                  value="aaa"
                  className="text-end"
                >
                  <CopyClipboardCheck />
                </CopyClipboard>
              </div>
            </div>
            
          </div>

          <Toaster />
          <button className="btn btn-primary" onClick={() => setModal(true)}>
            Confirmar pago
          </button>
        </div>
      </div>
      <ModalCompra modal={modal} setModal={setModal} />
    </div>
  );
};
