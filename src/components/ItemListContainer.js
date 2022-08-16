import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { db } from '../firebase/config';
import { collection, getDocs, query } from "firebase/firestore";
import NavBar from './NavBar';



const ItemListContainer = () => {
    document.body.style = ' background: white !important;';
    const [products, setProducts] = useState([]);
    const { id } = useParams();


    useEffect(() => {

        (async () => {
            try {

                const queryCollection = query(collection(db, "tiendafornite"))
                const querySnapshot = await getDocs(queryCollection);
                const productos = []
                querySnapshot.forEach((doc) => {
                    const producto = { id: doc.id, ...doc.data() }
                    productos.push(producto)
                })

                productos.sort((a, b) => a.precio - b.precio)

                setProducts(productos)

            } catch (error) {
                console.log(error);
            }

        })()

    }, [id])



    return (
        <>
            
            <ItemList
                products={products}

            />
        </>


    )
}

export default ItemListContainer