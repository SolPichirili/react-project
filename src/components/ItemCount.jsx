import { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, inicial, onAdd }) => {
    const [cantidad, setCantidad] = useState(inicial)

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const decrementar = () => {
        if (cantidad > inicial) {
            setCantidad(cantidad - 1)
        }

    }

    return (
        <div>
            <ButtonGroup>
                <Button onClick={decrementar}>-</Button>
                <label className="alert alert-white">{cantidad}</label>
                <Button onClick={incrementar}>+</Button>
            </ButtonGroup>
            <Button onClick={() => onAdd(cantidad)}>Agregar al Carrito</Button>
        </div>
    )
}

export default ItemCount;
