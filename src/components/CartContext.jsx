import { useState } from "react";
import { createContext } from "react";
export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {
        if(isInCart(item.id)) {
            setCartList(cartList.map(product => {
                return product.id === item.id
                ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCartList([...cartList, {...item, quantity}]);
        }
    }

    const removeItem = (id) => {
        setCartList(cartList.filter((product) => product.id !== id));
    }

    const clear = () => {
        setCartList([]);
    }

    const isInCart = (id) => cartList.find(product => product.id === (id)) ? true : false;

    const totalQuantity = () => {
        return cartList.reduce((prev, cur) => prev + cur.quantity, 0)
    }

    const totalPrice = () => {
        return cartList.reduce((prev, cur) => prev + (cur.price * cur.quantity), 0)
    }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, isInCart, totalQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;