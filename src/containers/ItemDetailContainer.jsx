import { useEffect, useState } from "react";
import { useParams } from "react-router";
import getList from "../utils/getList";
import ItemDetail from "../components/ItemDetail";
const { info } = require('../utils/info');

const ItemDetailContainer = () => {
    const [arrayInfo, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        getList(2000, info.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={arrayInfo} />
    );
}

export default ItemDetailContainer;