import React,{useState} from "react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
    Button
  } from '@chakra-ui/react'
  


  const ModalCompra = ({ modal,setModal }) => {
 
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

        const cerrar=()=>{
            setModal(false)
        }

    return (
      <>
        <Button
          onClick={() => {
            setModal(true)
            
          }}
        >
          Use Overlay one
        </Button>

      
        <Modal closeOnOverlayClick={false} isCentered isOpen={modal} onClose={cerrar}>
          {overlay}
          <ModalContent>
            <ModalHeader >Confirmacion de pago</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Envianos el comprobante de pago por Instagram, recordandonos tu usuario en el juego y el producto de la tienda que elegiste, al instante vas a estar recibiendolo como regalo!</Text>
              
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='yellow' onClick={cerrar}>Cerrar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default ModalCompra;