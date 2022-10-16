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
            <section >
                <div className="container">
                    <img className="containerImg" src="https://images.squarespace-cdn.com/content/v1/50966567e4b06cb30505fcb7/1535636021573-8S3F11PK8WC53VHZYUTZ/DSC07966-Edit.JPG?format=1500w" alt="" />
                </div>
            </section>
            <h1>{promp.titulo}</h1>
            <h2>{promp.subtitulo}</h2>
            <section className="containerCards">
                < ItemList items={arrayInfo} />
            </section>
            <section className="productos">
                <h4>NUESTRA FORMA DE HACER LOS PRODUCTOS</h4>
                <div className="productosInfo">
                    <div>
                        <p>CONTRA LAS PRUEBAS EN ANIMALES</p>
                        <img src="https://img.icons8.com/ios/40/000000/dog-paw-print.png" alt="Icono amigable con los animales"/>
                    </div>
                    <div> 
                        <p>FORMATOS NATURALES</p>
                        <img src="https://img.icons8.com/external-basicons-line-edtgraphics/40/000000/external-circle-signs-basicons-line-edtgraphics.png" alt="Icono de formatos naturales"/>
                    </div>
                    <div>
                        <p>CUIDADO DESDE EL ORIGEN</p>
                        <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/40/000000/external-care-sauna-flatart-icons-outline-flatarticons-3.png" alt="Icono de cuidado de productos"/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ItemListContainer;