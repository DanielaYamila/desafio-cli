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
                    cartList == 0
                    ?  <div  className="containerCarrito">  
                        <h2> NO HAY PRODUCTOS EN EL CARRITO </h2> 
                        <Link to='/'> <button>Volver al INICIO</button></Link>
                      </div>
                    : <div  className="containerCarrito">
                        <h2> Productos seleccionados: </h2>
                        <span>Total compra: ${totalPrice()}</span>
                        <button onClick={clear}>BORRAR TODO</button>
                        <button onClick={createOrder}>COMPRAR TODO</button>
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
                                <p>{item.description}</p>
                                <p>${item.price}</p>
                                <p>Ha elegido {item.quantity}.</p>
                                <p>Subtotal: ${item.quantity * item.price}</p>
                                <button onClick={() => removeItem(item.id)}>ELIMINAR</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Cart;