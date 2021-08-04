import { useCartContext } from '../context/CartContext';

const Cart = () =>{

    const {compra} = useCartContext;

    return(
        <div>
            <h1 className="text-center">Carrito</h1>
            <h2>{compra}</h2>
        </div>
    )

}

export default Cart;