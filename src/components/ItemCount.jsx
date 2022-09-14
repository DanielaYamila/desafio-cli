import { useState } from "react";

const ItemCount = () => {
    const [rate, setRate] = useState(3);

    const restar = () => {
        if (rate >= 1) {
            setRate(rate-1);
        }
    }

    const sumar = () => {
        if (rate <= 7) {
            setRate(rate+1);
        }
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