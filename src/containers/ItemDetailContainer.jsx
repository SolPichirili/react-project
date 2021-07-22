import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import obtenerItems from "../servicios/obtenerItems";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() => {

        obtenerItems()
            .then(resp => resp.filter(item => item.id === '1'))
            .then(resp => setItems(resp[0]))
            .catch(err => console.log(err))
            .finally(console.log('Hubo un error pero continuamos'))

    }, [])
    
    return (<div>
        <ItemDetail título={items.título} precio={items.precio} descripción={items.descripción} url={items.url} />
    </div>)
}

export default ItemDetailContainer;