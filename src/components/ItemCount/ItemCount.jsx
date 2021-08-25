import './ItemCount.css';
import { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const ItemCount = ({ stock, inicial, onAdd }) => {
    const [count, setCount] = useState(inicial)

    const increase = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrease = () => {
        if (count > inicial) {
            setCount(count - 1)
        }
    }

    const handleOnAdd = () => {
        onAdd(count)
    }

    return (
        <div>
            <ButtonGroup className="buyButton">
                <Button onClick={decrease}>-</Button>
                <label className="alert alert-white">{count}</label>
                <Button onClick={increase}>+</Button>
            </ButtonGroup>
            <Button className="addButton" onClick={handleOnAdd}>Agregar al Carrito</Button>
        </div>
    )
}

export default ItemCount;
