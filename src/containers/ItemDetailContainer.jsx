import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import obtenerItems from "../servicios/obtenerItems";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() => {

        obtenerItems()
            .then(resp => setItems(resp))
            .catch(err => console.log(err))
            .finally(console.log('Hubo un error pero continuamos'))

    }, [])

    let filtro = items.filter(item => item.id === '1')

    return (<div>
        {filtro.map(item => (
            <ItemDetail key={item.id} título={item.título} precio={item.precio} descripción={item.descripción} url={item.url} />
        ))}
    </div>)
}

export default ItemDetailContainer;