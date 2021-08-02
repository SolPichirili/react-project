import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, onAdd, cantidad, setCantidad }) => {
    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    const manejarOnAdd = () => {
        onAdd(cantidad)
    }

    return (
        <div>
            <ButtonGroup className="botonCompra">
                <Button onClick={decrementar}>-</Button>
                <label className="alert alert-white">{cantidad}</label>
                <Button onClick={incrementar}>+</Button>
            </ButtonGroup>
            <Button onClick={manejarOnAdd} className="botonAgregar">Agregar al Carrito</Button>
        </div>
    )
}

export default ItemCount;
