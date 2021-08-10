import { useState } from 'react';
import ItemCount from '../components/ItemCount';
import { useCartContext } from '../context/CartContext';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(1)
    const [pulsar, setPulsar] = useState(false)

    const { compra, guardarCart } = useCartContext()

    const agregarAlCarrito = (count) => {
        setCount(count)
        setPulsar(true)
        guardarCart({ item: item, cantidad: count })
    }

    console.log(count)
    console.log(compra)

    return (<div>
        <img src={item.url2} alt="imagen-comic" className="img-fluid imgThanos"></img>
        <h1>{item.titulo}</h1>
        <p>${item.precio}</p>
        <p>{item.descripcion2}</p>
        <div>{pulsar ? <Link to='/carrito'><Button className='botonAgregar'>Terminar</Button></Link> : <ItemCount stock={5} inicial={1} onAdd={agregarAlCarrito} />}
        </div>
    </div>)
}

export default ItemDetail;