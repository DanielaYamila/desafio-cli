import { useEffect, useState } from "react";
import getList from "../utils/getList";
import ItemList from "../components/ItemList";
import { useParams } from 'react-router';
const { info } = require('../utils/info');

const ItemListContainer = (promp) => {
    const [arrayInfo, setData] = useState ([]);
    const { idSection } = useParams();

    useEffect(() => {
        getList(2000, info.filter(item => {
            if (idSection === undefined) return item;
            return item.idSection === parseInt(idSection)
        }))
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, [idSection]);

    return (
        <div className="titulos">
            <h1>{promp.titulo}</h1>
            <h2>{promp.subtitulo}</h2>
            <section className="containerCards">
                < ItemList items={arrayInfo} />
            </section>
        </div>
    );
}

export default ItemListContainer;