import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { useParams } from 'react-router';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';

const ItemListContainer = (promp) => {
    const [arrayInfo, setData] = useState ([]);
    const { idSection } = useParams();

    useEffect(() => {
        async function firestoreFetch(){
            let q
            if (idSection) {
                q = query(collection(db, "products"), where ("idSection", "==", parseInt(idSection)))
            } else {
                q = query(collection(db, "products"))
            }
            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            }))
            return dataFromFirestore
        }

        firestoreFetch()
        .then(result => setData(result))
    }, [idSection])

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