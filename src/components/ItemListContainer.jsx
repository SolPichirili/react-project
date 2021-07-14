import React from 'react';
import ItemCount from './ItemCount';

const agregarCarrito = (cant) => {
    alert(`Usted ha agregado ${cant}`)
}

const ItemListContainer = (props) => {
    return (
        <div>
            <h1>{props.saludo}</h1>
            <ItemCount stock={5} inicial={1} onAdd={agregarCarrito}/>
        </div>
    )
}

export default ItemListContainer;