import ItemCount from './ItemCount';
import ItemList from './ItemList';


const agregarCarrito = (cant) => {
    alert(`Usted ha agregado ${cant}`)
}

const ItemListContainer = () => {

    return (
        <div>
            <ItemCount stock={5} inicial={1} onAdd={agregarCarrito} />
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;