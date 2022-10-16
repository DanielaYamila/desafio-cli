import { Link } from "react-router-dom";

let Item = ({items}) => {
    return (
        <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" className="cards">
            <img src={items.pictureUrl} alt={items.id} />
            <h3>{items.title}</h3>
            <p>${items.price}</p>
            <Link to={`/producto/` + items.id}><button>Conocer más</button></Link>
        </div>
    );
}

export default Item;