import ItemCount from "./ItemCount";

const ItemListContainer = (promp) => {
    return (
        <div className="titulos">
            <h1>{promp.titulo}</h1>
            <h2>{promp.subtitulo}</h2>
            < ItemCount />
        </div>
    );
}

export default ItemListContainer;