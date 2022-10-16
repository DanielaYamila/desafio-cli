import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({item}) => {
    const [counter, setCounter] = useState(0);
    const {addItem, isInCart, removeItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        alert("Producto añadido al carrito.");
        setCounter(quantity);
        addItem(item, quantity);
    }

    return (
        <section className="cardIndividual">
            <div>
                <img src={item.pictureUrl} alt={item.id} />
            </div>
            <div className="info">
                <h3>{item.title}</h3>
                <p> <strong>{item.description}</strong> </p>
                <p> <strong>${item.price}</strong></p>
                {
                    isInCart(item.id)
                    ? <div>
                        <p>Chequee su producto en el carrito!</p>
                        <button onClick={() => removeItem(item.id)}>Borrar producto del carrito</button>
                    </div>
                    :  <p><strong>¡Solo quedan {item.stock} unidades!</strong></p>
                }
                {
                    counter === 0
                    ? < ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    : <div>
                        <Link to='/carrito' > <button>Terminar compra</button> </Link>
                        <Link to={'/seccion/' + item.idSection} > <button>Volver a la seccion</button> </Link>
                    </div>
                }
            </div>
        </section>
    );
}
    
export default ItemDetail;