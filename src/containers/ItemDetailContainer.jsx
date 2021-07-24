import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import obtenerItems from "../servicios/obtenerItems";
import ItemCount from '../components/ItemCount';
import { useParams } from "react-router";

const agregarCarrito = (cant) => {
    alert(`Usted ha agregado ${cant}`)
}

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
                    <ItemDetail título={item.título} precio={item.precio} descripción={item.descripción2} img={item.img2} />
                </div>)
            )}
            <div>
                <ItemCount stock={5} inicial={1} onAdd={agregarCarrito} />
            </div>
        </div>)
}

export default ItemDetailContainer;