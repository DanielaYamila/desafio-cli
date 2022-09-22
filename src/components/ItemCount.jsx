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

    const compra = () => {
        if(rate !== 0){
            alert(`Se ha agregado al carrito ${rate} producto/s.`)
            setRate(rate);
            onAdd(rate);
        }
    }

    return (
        <div className="boton">
            <p>Seleccionar unidad:</p>
            <div className="controles">
                <button onClick={restar}> <strong>-</strong> </button>
                <span> <strong>{rate}</strong> </span>
                <button onClick={sumar}> <strong>+</strong> </button>
            </div>
            <button onClick={compra}>Comprar</button>
        </div>
    );
}

export default ItemCount;