import React from 'react';
import {GiShoppingCart} from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {

    const {totalItems} = useCartContext();
    
    return (
        <div>
           <Link to="/carrito"><GiShoppingCart className="icono" /></Link><Badge bg="secondary">{totalItems()}</Badge>
        </div>
    )
}

export default CartWidget;