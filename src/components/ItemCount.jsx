import { useState } from "react";

const ItemCount = () => {
    const [rate, setRate] = useState(0);

    const restar = () => {
        setRate(rate-1);
    }

    const sumar = () => {
        setRate(rate+1);
    }

    return (
        <div className="boton">
            <p>Seleccionar unidad</p>
            <div className="controles">
                <button onClick={restar}> <strong>-</strong> </button>
                <span> <strong>{rate}</strong> </span>
                <button onClick={sumar}> <strong>+</strong> </button>
            </div>
            <button>Comprar</button>
        </div>
    );
}

export default ItemCount;