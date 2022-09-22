import { useState } from "react";
import ItemCount from "../components/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {
    const [counter, setCounter] = useState(0);

    const onAdd = (productos) => {
        setCounter(productos);
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