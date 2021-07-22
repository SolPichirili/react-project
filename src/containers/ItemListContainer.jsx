import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';

const agregarCarrito = (cant) => {
    alert(`Usted ha agregado ${cant}`)
}

const ItemListContainer = () => {

    return (
        <div>
            <ItemCount stock={5} inicial={1} onAdd={agregarCarrito} />
            <ItemList />
        </div>
    )
}

export default ItemListContainer;