import { useState } from "react";
import ModalCompra from "./ModalCompra";
import { Toaster, toast } from "react-hot-toast";
import { CopyClipboard } from "./CopyClipboard";
import { RiClipboardLine } from "react-icons/ri";

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
                <CopyClipboard value="11111111111111111111111111">
                  <RiClipboardLine
                    onClick={() => toast.success("copiado al portapapeles")}
                    className="pointer"
                  />
                </CopyClipboard>
              </div>
            </div>
            <div className="list-group-item d-flex justify-content-between">
              <div>
                <b>Alias:</b> <span>goku.vegeta.broly</span>
              </div>
              <div>
                <CopyClipboard value="goku.vegeta.broly">
                  <RiClipboardLine
                    onClick={() => toast.success("copiado al portapapeles")}
                    className="pointer"
                  />
                </CopyClipboard>
              </div>
            </div>
            <div className="list-group-item d-flex justify-content-between">
              <div>
                <b>Cuit:</b> <span>20-20528695-1</span>
              </div>
              <div>
                <CopyClipboard value="20-20528695-1">
                  <RiClipboardLine
                    onClick={() => toast.success("copiado al portapapeles")}
                    className="pointer"
                  />
                </CopyClipboard>
              </div>
            </div>
            <div className="list-group-item d-flex justify-content-between">
              <div>
                <b>Número de cuenta:</b> <span>1010101010</span>
              </div>
              <div>
                <CopyClipboard value="1010101010">
                  <RiClipboardLine
                    onClick={() => toast.success("copiado al portapapeles")}
                    className="pointer"
                  />
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
