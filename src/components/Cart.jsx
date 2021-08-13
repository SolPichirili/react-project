import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { useState } from 'react';
import { getFirestore } from '../servicios/firebaseServicio';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Cart = () => {
    const [comprador, setComprador] = useState({ nombre: '', telefono: '', email: '' })
    const [id, setId] = useState('')

    const { compra, totalItems, borrarTodo, precioTotal, eliminarItem, precioPorItems } = useCartContext();

    const fecha = firebase.firestore.Timestamp.fromDate(new Date());

    const orden = { comprador, item: compra, fecha, total: precioTotal() }

    const manejarChange = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }

    const manejarSubmit = (e) => {
        e.preventDefault();
        const db = getFirestore()

        db.collection('order').add(orden)
            .then(({ id }) => {
                setId(id)
            })
            .catch(err => console.log(err))
    }

    console.log(orden)
    console.log(id)

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
                            <button onClick={() => eliminarItem(i.item.id)}>X</button>
                        </div>))}
                    <p>Productos en su carrito: {totalItems()}</p>
                    <p>Precio Total: ${precioTotal()}</p>
                    <button onClick={borrarTodo}>Borrar todo</button>
                </>
            )}
            {compra.length === 0 && (
                <>
                    <p>No hay productos en el carrito</p>
                    <Link to="/" className="botonAgregar">Ir a comprar</Link>
                </>
            )}

            <form onChange={manejarChange} onSubmit={manejarSubmit}>
                <input type='text' placeholder='Nombre' name='nombre' value={comprador.nombre}></input>
                <input type='text' placeholder='Teléfono' name='telefono' value={comprador.telefono}></input>
                <input type='email' placeholder='E-mail' name='email' value={comprador.email}></input>
                <button className="botonAgregar">Enviar</button>
            </form>

            {id.length !==0 && (
                <div><p>Su orden de compra es: {id}</p></div>
            )}
        </div>
    )
}

export default Cart;