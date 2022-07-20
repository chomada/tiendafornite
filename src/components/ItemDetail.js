import React, { useState, useContext,useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import { Card, Alert } from 'react-bootstrap';
import { Button,Modal,ModalContent,ModalHeader,ModalBody,ModalFooter,ModalOverlay,ModalCloseButton,Text,useDisclosure } from '@chakra-ui/react'
import ItemCount from './ItemCount';
import '../index.css';
import { Team } from '../context/TeamProvider'


const ItemDetail = ({ personaje }) => {

    
    const navigate = useNavigate();

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )

    const [initial, setInitial] = useState(1);
    const { addToTeam,contador,equipo,totalPower} = useContext(Team)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    const [buy, setBuy] = useState(false);
    const [title,setTitle]= useState('');
    const [text,setText]= useState('');
    useEffect(() => {
      totalPower()
    }, [totalPower])
    
    const add = (cant) => {
     
      let verdad=false;
      equipo.forEach(pers =>{


       if (pers.id === personaje.id) {
             verdad=true
         }
     });
    
       if ((contador<2)&&(!verdad)){
        
        setBuy(true);
        personaje.power=cant;
        addToTeam(personaje);
        
        

        
       }else{
         if(contador===2){
          setTitle('Team complete!');
          setText('Toca PLAY para empezar a jugar...');
          setOverlay(<OverlayOne />)
          onOpen()
          

         }else{
           setTitle('Personaje repetido!');
           setText('No puedes elegir el mismo personaje dos veces...');
          setOverlay(<OverlayOne />)
          onOpen()
          
         }
       
      
       } 
       
        
    }


    return (
        <>
            <Card border="success" className="personajes-principal card-detail2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={personaje.image} />
                <Card.Body>
                    <Card.Title>{personaje.name}</Card.Title>
                    <Card.Text>
                        Ajusta el poder de tu personaje, dependiendo de la situacion puede convenirte tener un poder alto o bajo.
                    </Card.Text>

                    {buy ?

                        <Alert className="personajes-principal" variant="warning">Personaje agregado</Alert >

                        : <ItemCount
                            initial={initial}
                            setInitial={setInitial}

                            add={add} />}
                     


                </Card.Body>
                


                <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>{text}</Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="warning"onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
            </Card>
            
            
        </>

    )
}

export default ItemDetail