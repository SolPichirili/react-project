import './Cart.css'
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext/CartContext';
import { getFirestore } from '../../services/firebaseService';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Swal from 'sweetalert2';
import Purchase from '../Purchase/Purchase';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';


const Cart = () => {
    const [buyer, setBuyer] = useState({ name: '', tel: '', email: '', email2: '' })
    const [id, setId] = useState('')

    const { purchase, totalPrice } = useCartContext();

    const date = firebase.firestore.Timestamp.fromDate(new Date());

    const order = { buyer, item: purchase, date, total: totalPrice(), state: 'Generada' }

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getFirestore()

        db.collection('order').add(order)
            .then(({ id }) => {
                setId(id)
                Swal.fire({
                    title: '¡Compra realizada!',
                    text: `Su orden de compra es ${id}`
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="flex">
            <h1 className="text-center cartTitle">Carrito</h1>
            {purchase.length === 0 ?
                <>
                    <p className="cartParag">No hay productos en el carrito.</p>
                    <Link to="/" className="addButtonCart">Ir a comprar</Link>
                </> :
                <>
                    < Purchase />
                    < Form change={handleChange} submit={handleSubmit} buyer={buyer} />
                    {id.length !== 0 && (
                        <div className="flex">
                            <p className="cartParag">Orden de compra: {id}</p>
                            <Link to="/" className="keepBuying">Seguir comprando</Link>
                        </div>
                    )}
                </>
            }
        </div>
    )
}

export default Cart;