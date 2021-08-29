import './Purchase.css';
import { useCartContext } from '../../context/CartContext/CartContext';

const Purchase = () => {

    const { purchase, totalItems, removeAll, totalPrice, removeItem, priceItems } = useCartContext();

    return (
        <>
            {purchase.map(i => (
                <div key={i.item.id} className="buy">
                    <p>{i.item.titulo}</p>
                    <p>Cantidad: {i.cantidad}</p>
                    <p>Precio por unidad: $ {i.item.precio}</p>
                    <p>Subtotal: $ {priceItems(i.item.precio, i.cantidad)}</p>
                    <button onClick={() => removeItem(i.item.id)} className="remove">X</button>
                </div>))}
            <p className="cartParag">Productos en su carrito: {totalItems()}</p>
            <p className="cartParag">Precio Total: ${totalPrice()}</p>
            <button onClick={removeAll} className="removeAll">Borrar todo</button>
        </>
    )
}

export default Purchase;