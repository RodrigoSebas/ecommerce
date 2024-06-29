//componer de su propio contexto y un proveedor

import { createContext, useState, useEffect } from "react";
import { getStorage, saveStorage } from "../utils/localStorage";
import { data } from "autoprefixer";

const CartContext = createContext();

//Proveedor
const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addProductToCart = (product) => {
        const existsIndex = cart.findIndex((prod) => prod.id===product.id)
        if(existsIndex === -1){
            product.cantidad = 1;
            const newCart = [...cart, product];
            setCart(newCart);
        }else{
            const copyCart = [...cart];
            copyCart[existsIndex].cantidad += 1;
            setCart(copyCart);
        }

    

    }


    const quantityTotal = cart.reduce((acc, prod) => acc+prod.cantidad,0);
    
    useEffect(() => {
        const dataStorage = getStorage("cart");
        if(dataStorage.length > 0){
            setCart(dataStorage);
        }
    },[])


    useEffect(() => {
        saveStorage('cart',cart)
    }, [cart]);


    //mediante value el contexto podra proveer lo que desee
    return <CartContext.Provider value={{cart, addProductToCart, quantityTotal}}>
        {props.children}
    </CartContext.Provider>
}

export {
    CartContext,
    CartContextProvider
}