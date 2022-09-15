let Item = ({items}) => {
    return (
        <div className="cards">
            <img src={items.pictureUrl} alt={items.id} />
            <p>{items.title}</p>
            <p>{items.description}</p>
            <p>${items.price}</p>
            <button>Conocer más</button>
        </div>
    );
}

export default Item;