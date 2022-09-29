import { useEffect, useState } from "react";
import { useParams } from "react-router";
//import getList from "../utils/getList";
import ItemDetail from "../components/ItemDetail";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';

const ItemDetailContainer = () => {
    const [arrayInfo, setDato] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const docFetch = async () => {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);
            setDato(docSnap.data())
        }
        docFetch()
    }, [id]);
    
    return (
        <ItemDetail item={arrayInfo} />
    );
}

export default ItemDetailContainer;