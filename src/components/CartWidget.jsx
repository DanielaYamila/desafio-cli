import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <>
            <img src="https://img.icons8.com/fluency-systems-filled/70/ffffff/favorite-cart.png"/>
            {
                (totalQuantity() !=0) && <span className="contador"><strong>{totalQuantity()}</strong></span>
            }
            
        </>
    );
}

export default CartWidget;