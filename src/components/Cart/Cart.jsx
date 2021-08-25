import './Cart.css'
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext/CartContext';
import { getFirestore } from '../../services/firebaseService';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';

const Cart = () => {
    const [buyer, setBuyer] = useState({ name: '', tel: '', email: '' })
    const [id, setId] = useState('')

    const { purchase, totalItems, removeAll, totalPrice, removeItem, priceItems } = useCartContext();

    const date = firebase.firestore.Timestamp.fromDate(new Date());

    const order = { buyer, item: purchase, date, total: totalPrice() }

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
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1 className="text-center">Carrito</h1>
            {purchase.length !== 0 && (
                <>
                    {purchase.map(i => (
                        <div key={i.item.id} className="col-12 buy">
                            <p>{i.item.titulo}</p>
                            <p>Cantidad: {i.cantidad}</p>
                            <p>Precio por unidad: {i.item.precio}</p>
                            <p>Subtotal: $ {priceItems(i.item.precio, i.cantidad)}</p>
                            <button onClick={() => removeItem(i.item.id)}>X</button>
                        </div>))}
                    <p>Productos en su carrito: {totalItems()}</p>
                    <p>Precio Total: ${totalPrice()}</p>
                    <button onClick={removeAll}>Borrar todo</button>
                </>
            )}
            {purchase.length === 0 && (
                <>
                    <p>No hay productos en el carrito</p>
                    <Link to="/" className="addButton">Ir a comprar</Link>
                </>
            )}

            < Form change={handleChange} submit={handleSubmit} buyer={buyer} />

            {id.length !== 0 && (
                <div><p>Su orden de compra es: {id}</p></div>
            )}
        </div>
    )
}

export default Cart;