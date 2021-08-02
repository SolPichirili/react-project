import { Button } from 'react-bootstrap';
import { useState} from 'react';
import ItemCount from '../components/ItemCount';

const ItemDetail = ({ título, precio, descripción, img }) => {
    const [count, setCount] = useState (1)

    const agregarAlCarrito = () => {
        setCount(count);
    }

    return (<div>
        <img src={img} alt="imagen-comic" className="img-fluid imgThanos"></img>
        <h1>{título}</h1>
        <p>{precio}</p>
        <p>{descripción}</p>
        <div>
            <ItemCount stock={5} onAdd={agregarAlCarrito} cantidad={count} setCantidad={setCount}/>
        </div>
        <div>
            <Button>Terminar mi compra</Button>
        </div>
    </div>)
}

export default ItemDetail;