import { useEffect, useState } from "react";
import getItem from "../utils/getItem";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setData] = useState ({});

    useEffect(() => {
        getItem()
            .then((response) => setData(response))
            .catch((err) => console.error(err))
            .finally() 
    }, []);

    return (
        <section className="containerCards">
            < ItemDetail item={product} />
        </section>
    );
}

export default ItemDetailContainer;