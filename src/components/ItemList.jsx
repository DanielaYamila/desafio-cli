import Item from "./Item";

let ItemList = ({items}) => {
    return (
        <>
        {
            items.map( (item) => 
                <Item
                key={item.id}
                items={item}
                />
            )
        }
        </>
    );
}


export default ItemList;