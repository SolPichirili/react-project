import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const Cart = () => {

    const { compra, totalItems, borrarTodo, precioTotal, eliminarItem, precioPorItems } = useCartContext();

    return (
        <div>
            <h1 className="text-center">Carrito</h1>
            {compra.length !== 0 && (
                <>
                    {compra.map(i => (
                        <div key={i.item.id} className='col-12 compra'>
                            <p>{i.item.titulo}</p>
                            <p>Cantidad: {i.cantidad}</p>
                            <p>Precio por unidad: {i.item.precio}</p>
                            <p>Subtotal: $ {precioPorItems(i.item.precio, i.cantidad)}</p>
                            <button onClick={()=> eliminarItem(i.item.id)}>X</button>
                        </div>))}
                    <p>Productos en su carrito: {totalItems()}</p>
                    <p>Precio Total: ${precioTotal()}</p>
                    <button onClick={borrarTodo}>Borrar todo</button>
                </>
            )}
            {compra.length === 0 &&(
            <>
            <p>No hay productos en el carrito</p>
            <Link to="/" className="botonAgregar">Ir a comprar</Link>
            </>
            )}
        </div>
    )

}

export default Cart;