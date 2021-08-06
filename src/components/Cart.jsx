import { useCartContext } from '../context/CartContext';

const Cart = () => {

    const { compra, totalItems, borrarTodo, precioTotal, precioItem, eliminarItem } = useCartContext();

    return (
        <div>
            <h1 className="text-center">Carrito</h1>
            {compra.length !== 0 && (
                <>
                    {compra.map(i => (
                        <div key={i.item.id} className='col-12 compra'>
                            <p>{i.item.título}</p>
                            <p>Cantidad: {i.cantidad}</p>
                            <p>Precio por unidad: {i.item.precio}</p>
                            <p>Subtotal: ${precioItem()}</p>
                            <button onClick={eliminarItem}>X</button>
                        </div>))}
                    <p>Productos en su carrito: {totalItems()}</p>
                    <p>Precio Total: ${precioTotal()}</p>
                    <button onClick={borrarTodo}>Borrar todo</button>
                </>
            )}
            {compra.length === 0 && <p>No hay productos en el carrito</p>}
        </div>
    )

}

export default Cart;