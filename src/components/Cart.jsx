import { useCartContext } from '../context/CartContext';

const Cart = () =>{

    const {compra, totalItems, borrarTodo} = useCartContext();

    return(
        <div>
            <h1 className="text-center">Carrito</h1>
            {compra.map(i =>
            <div  key={i.item.id} className='col-12 compra'>
                <p>{i.item.título}</p>
                <p>{i.cantidad}</p>
                <p key={i.item.id}>{i.item.precio}</p>
            </div>)}
            <p>Total:{totalItems()}</p>
            <button onClick={borrarTodo}>Borrar todo</button>
        </div>
    )

}

export default Cart;