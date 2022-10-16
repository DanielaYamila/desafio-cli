import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { collection, increment, doc, updateDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"

const Cart = () => {
    const { cartList, clear , removeItem, totalPrice} = useContext(CartContext);
    async function createOrder() {
        let orderDB = cartList.map(item => ({
            id: item.id,
            price: item.price,
            title: item.title,
            quantity: item.quantity
        }))
        let order = {
            buyer: {
                name: "Wanda Nara",
                email: "wandanara@comercial.com", 
                phone: "+5644346786"
            },
            date: serverTimestamp(),
            items: orderDB,
            total: totalPrice()
        }

        const newDocumentRef = doc(collection(db, "orders"))
        await setDoc(newDocumentRef, order);

        cartList.forEach(async(item) => {
            const itemRef = doc(db, "products", item.id)
            await updateDoc(itemRef, {
                stock: increment(-item.quantity)
            })
        })

        clear()
        alert("Su orden de compra ha sido creada, visualice su pedido como: " + newDocumentRef.id + ". Gracias por elegirnos!")
    }

    return (
        <> 
            <div className="containerCarrito">
                {
                    cartList.length === 0
                    ?   <div  className="containerCarrito">  
                            <h2> NO HAY PRODUCTOS EN EL CARRITO </h2> 
                            <Link to='/'> <button>Volver al INICIO</button></Link>
                        </div>
                    :   <div  className="containerCarrito">
                            <h2> Productos seleccionados: </h2>
                            <button onClick={clear}>BORRAR TODO</button>
                            <button onClick={createOrder}>COMPRAR TODO</button>
                            <h2>Total compra: ${totalPrice()}</h2>
                        </div>
                }
            </div>
            <div className="contenedor">
                {
                    cartList.map(item =>
                        <div key={item.id} className="cardCompra">
                            <img width="300px" height="400px" src={item.pictureUrl} alt={item.id} />
                            <div className="infoCompra">
                                <p>{item.title}</p>
                                <p>${item.price}</p>
                                <p>Ha elegido {item.quantity}.</p>
                                <p>Subtotal: ${item.quantity * item.price}</p>
                                <button onClick={() => removeItem(item.id)}>ELIMINAR</button>
                            </div>
                        </div>
                    )
                }
            </div>
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
        </>
    )
}

export default Cart;