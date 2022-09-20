import { Link } from "react-router-dom";

let Item = ({items}) => {
    return (
        <div className="cards">
            <img src={items.pictureUrl} alt={items.id} />
            <p>{items.title}</p>
            <p>{items.description}</p>
            <p>${items.price}</p>
            <Link to={`/item/` + items.id}>Conocer más</Link>
        </div>
    );
}

export default Item;