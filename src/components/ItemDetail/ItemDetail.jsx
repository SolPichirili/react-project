import './ItemDetail.css';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { Button } from 'react-bootstrap';


const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(1)
    const [pulse, setPulse] = useState(false)

    const { saveCart } = useCartContext()

    const addToCart = (count) => {
        setCount(count)
        setPulse(true)
        saveCart({ item: item, cantidad: count })
    }

    return (<div className="flex">
        <img src={item.url2} alt="imagen-comic" className="img-fluid rounded image" />
        <h1 className="row detailTitle">{item.titulo}</h1>
        <p className="detailParag">{item.descripcion2}</p>
        <p className="detailParag">${item.precio}</p>
        <div>{pulse ? <Link to="/cart"><Button className="addButton">Terminar</Button></Link> : <ItemCount stock={5} inicial={count} onAdd={addToCart} />}</div>
    </div>)
}

export default ItemDetail;