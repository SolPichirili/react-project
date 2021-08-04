import { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, inicial, onAdd }) => {
    const [cantidad, setCantidad] = useState(inicial)
    const [pulsado, setPulsado] = useState(false)

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

    const manejarOnAdd = () => {
        onAdd(cantidad)
        setPulsado(true)
    }

    return (
        <div>
            <ButtonGroup className="botonCompra">
                <Button onClick={decrementar}>-</Button>
                <label className="alert alert-white">{cantidad}</label>
                <Button onClick={incrementar}>+</Button>
            </ButtonGroup>
            {pulsado ? 
            <Link to={`/carrito`} className="btn botonAgregar">Terminar mi Compra</Link> 
            : <button className="btn botonAgregar" onClick={manejarOnAdd}> Agregar al Carrito </button>}
        </div>
    )
}

export default ItemCount;
