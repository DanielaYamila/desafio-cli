import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({item}) => {
    const [counter, setCounter] = useState(0);
    const {addItem} = useContext(CartContext);

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
                    counter === 0
                    ? < ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    : <Link to='/carrito' > <button>Ver productos</button> </Link>
                }
            </div>
        </section>
    );
}
    
export default ItemDetail;