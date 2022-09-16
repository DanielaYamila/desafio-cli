import ItemCount from "../components/ItemCount";

const ItemDetail = ({item}) => {
    return (
        <section className="cardIndividual">
            <div>
                <img src={item.pictureUrl} alt={item.id} />
            </div>
            <div className="info">
                <h3>{item.title}</h3>
                <p> <strong>{item.description}</strong> </p>
                <p> <strong>${item.price}</strong></p>
                <button>Conocer más</button>
                < ItemCount />
            </div>
        </section>
    );
}
    
export default ItemDetail;