import React from 'react';
import {GiShoppingCart} from 'react-icons/gi';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div>
           <Link to="/carrito"><GiShoppingCart className="icono" /></Link>
        </div>
    )
}

export default CartWidget;