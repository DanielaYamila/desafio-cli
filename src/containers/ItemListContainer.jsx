import { useEffect, useState } from "react";
// import getList from "../utils/getList";
import ItemList from "../components/ItemList";
import { useParams } from 'react-router';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';

const ItemListContainer = (promp) => {
    const [arrayInfo, setData] = useState ([]);
    const { id } = useParams();

    useEffect(() => {
        const firestoreFetch = async () => {
            let v
            if (id) {
                v = query(collection(db, "products"), where('idSection', '==', parseInt(id)))
            } else {
                v = query(collection(db, "products"))
            }
            const querySnapshot = await getDocs(v);
            const firestoreData = querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            }))
            return firestoreData
        }
        firestoreFetch()
    }, [id]);

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