import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { db } from '../firebase/config';
import { doc, getDoc } from "firebase/firestore";
import NavBar from './NavBar';


const ItemDetailContainer = () => {

    const [personaje, setPersonaje] = useState([]);

    const { id } = useParams();



    useEffect(() => {

        (async () => {

            try {
                //desde la API
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                const data = await response.json();
                setPersonaje(data);
                
                // desde firebase
                // const docRef = doc(db, "personajes", id);
                // const docSnap = await getDoc(docRef);

                // if (docSnap.exists()) {
                    
                //     setPersonaje({id: docSnap.id, ...docSnap.data()})
                // } else {
                //     // doc.data() will be undefined in this case
                //     console.log("No such document!");
                // }


            } catch (error) {
                console.log(error);
            }

        })()

    }, [id])

    return (
        <>
             <NavBar />
            <ItemDetail
                personaje={personaje}


            />
        </>

    )
}

export default ItemDetailContainer;
