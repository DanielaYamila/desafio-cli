import { useEffect, useState } from "react";
import getList from "../utils/getList";
import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList";

const ItemListContainer = (promp) => {
    const [arrayInfo, setData] = useState ([]);

    useEffect(() => {
        getList()
            .then((response) => setData(response))
            .catch((err) => console.error(err))
            .finally() 
    }, []);

    return (
        <div className="titulos">
            <h1>{promp.titulo}</h1>
            <h2>{promp.subtitulo}</h2>
            <section className="containerCards">
                < ItemList items={arrayInfo} />
            </section>
            <section>
                < ItemCount />
            </section>
        </div>
    );
}

export default ItemListContainer;