import { useState} from 'react';
import ItemCount from '../components/ItemCount';

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(1)
    const [pulsar, setPulsar] = useState(false)

    const agregarAlCarrito = (count) => {
        setCount(count)
        setPulsar(true)
    }

    console.log(count)
    console.log(pulsar)

    return (<div>
        <img src={item.img2} alt="imagen-comic" className="img-fluid imgThanos"></img>
        <h1>{item.título}</h1>
        <p>{item.precio}</p>
        <p>{item.descripción2}</p>
        <div>
            <ItemCount stock={5} inicial={1} onAdd={agregarAlCarrito}/>
        </div>
    </div>)
}

export default ItemDetail;