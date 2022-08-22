import React, { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
} from "@chakra-ui/react";

const ModalCompra = ({ modal, setModal }) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const [overlay] = useState(<OverlayOne />);

  const cerrar = () => {
    setModal(false);
  };

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isCentered
        isOpen={modal}
        onClose={cerrar}
      >
        {overlay}
        <ModalContent>
          <ModalHeader>Último paso!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Envianos el comprobante de pago por Instagram, recordándonos tu
              usuario en el juego y el producto de la tienda que elegiste. Al
              instante vas a estar recibiéndolo como regalo!
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="yellow" onClick={cerrar}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalCompra;
