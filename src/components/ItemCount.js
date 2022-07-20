import React from 'react'

import { Button } from '@chakra-ui/react'
//import { FaMinus,IoIosAdd} from 'react-icons/fa';
import '../index.css'



const ItemCount = ({ initial, setInitial,add }) => {

    const plus = () => {
        if (initial < 10) setInitial(initial + 1);


    }
    const min = () => {
        if (initial > 1) setInitial(initial - 1);
    }
    return (
        <>
            <Button variant="outline"

                colorScheme='teal'
                className="iconos"


                onClick={min}>-</Button>{' '}{initial}{' '}<Button className="iconos" colorScheme='teal' variant="outline" onClick={plus}>+</Button>
             <Button  colorScheme='teal' className="addButton" onClick={()=> add(initial) }>Add to Team</Button>
        </>

    )
}

export default ItemCount