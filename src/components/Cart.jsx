import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { cartList, clear , removeItem } = useContext(CartContext);

    return (
        <>
            <div className="containerCarrito">
                <h2> Productos seleccionados: </h2>
                <button onClick={clear}>BORRAR TODO</button>
            </div>
            <div className="contenedor">
                {
                    cartList.map(item =>
                        <div key={item.id} className="cardCompra">
                            <img width="300px" height="400px" src={item.pictureUrl} alt={item.id} />
                            <div className="infoCompra">
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                                <p>${item.price}</p>
                                <p>Ha elegido {item.quantity}.</p>
                                <button onClick={() => removeItem(item.id)}>Eliminar</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Cart;