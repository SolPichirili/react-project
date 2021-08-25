import './CartWidget.css';
import { useCartContext } from '../../context/CartContext/CartContext';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {

    const { totalItems } = useCartContext();

    return (
        <div>
            <Link to="/cart"><GiShoppingCart className="icon" /><Badge className="number">{totalItems()}</Badge></Link>
        </div>
    )
}

export default CartWidget;