import { useState } from "react";
import { createContext } from "react";
export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (product, quantity) => {
        if(isInCart(product.id)) {
            setCartList(cartList.map(item => {
                return item.id === item.id
                ? { ...item, quantity: item.quantity + quantity } : item
            }));
        } else {
            setCartList([...cartList, {...product, quantity}]);
        }
    }

    const removeItem = (id) => {
        setCartList(cartList.filter((product) => product.id !== id));
    }

    const clear = () => {
        setCartList([]);
    }

    const isInCart = (id) => cartList.find(product => product.id === (id)) ? true : false;

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;