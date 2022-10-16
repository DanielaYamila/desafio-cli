import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [rate, setRate] = useState(initial);

    const restar = () => {
        if (rate >= initial) {
            setRate(rate-1);
        }
    }

    const sumar = () => {
        if (rate < stock) {
            setRate(rate+1);
        }
    }

    return (
        <div className="boton">
            <div className="controles">
                <button onClick={restar}> <strong>-</strong> </button>
                <span> <strong>{rate}</strong> </span>
                <button onClick={sumar}> <strong>+</strong> </button>
            </div>
            <button onClick={() => onAdd(rate)}>Comprar</button>
        </div>
    );
}

export default ItemCount;