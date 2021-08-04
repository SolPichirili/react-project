import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import obtenerItems from "../servicios/obtenerItems";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {

        obtenerItems()
            .then(resp => setItems(resp.filter(it => it.id === id)))
            .catch(err => console.log(err))
            .finally(console.log('Hubo un error pero continuamos'))

    }, [id])

    return (
        <div className="container detalle">
            {items.map(item => (
                <div>
                    <ItemDetail key={item.id} item={item} />
                </div>)
            )}
        </div>)
}

export default ItemDetailContainer;