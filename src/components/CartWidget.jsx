import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <>
            <img src="https://img.icons8.com/windows/60/ffffff/favorite-cart.png"/>
            {
                (totalQuantity() !=0) && <span className="contador">{totalQuantity()}</span>
            }
            
        </>
    );
}

export default CartWidget;