import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const [cart, setCart ] = useState([])

    function toggleCart() {
        setIsCartOpen(!isCartOpen);
    }



    function addToCart(item){
        const existingItemIndex = cart.findIndex(
            (cartItem) => cartItem.id === item.id
        )

        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cart];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCart(updatedCartItems);
        } else {
            setCart([...cart, { ...item, quantity: 1 }])
        }
    }

    function removeFromCart(item) {
        const index = cart.findIndex(
            (cartItem) => cartItem.id === item.id
        )

        const clone = [...cart]
        if (clone[index].quantity > 0) {
            clone[index].quantity -= 1;
            if (clone[index].quantity === 0){
                clone.splice(index, 1);
            }
        } 
        setCart(clone)

    }

    return (
        <CartContext.Provider value={{isCartOpen, setIsCartOpen, toggleCart, addToCart, cart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}