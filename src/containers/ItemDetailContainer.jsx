import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../components/ItemDetail";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';

const ItemDetailContainer = () => {
    const [arrayDetail, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        const docRef = doc(db, "products", idItem);
        getDoc(docRef)
        .then(result => setDato({
            id: result.id,
            ...result.data()
        }))
    }, [idItem]);
    
    return (
        <ItemDetail item={arrayDetail} />
    );
}

export default ItemDetailContainer;