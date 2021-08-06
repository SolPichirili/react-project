import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [compra, setCompra] = useState([])

    const guardarCart = (item) => {
        const idCompra = compra.findIndex(it => item.item.id === it.item.id)
        if (idCompra === -1) {
            setCompra([...compra, item])
        } else {
            const nuevaCantidad = compra[idCompra].cantidad + item.cantidad
            const listaAnterior = compra.filter(it => it.item.id !== item.item.id)
            setCompra([...listaAnterior, { item: item.item, cantidad: nuevaCantidad }])
        }
    }

    const precioItem = () => {
        return compra[0].cantidad * compra[0].item.precio2
    }

    const eliminarItem = () => {
    }

    const precioTotal = () => {
        return compra.reduce((acum, valor) => (acum + (valor.cantidad * valor.item.precio2)), 0)
    }

    const totalItems = () => {
        return compra.reduce((acum, valor) => acum + valor.cantidad, 0)
    }

    function borrarTodo() {
        setCompra([])
    }

    return (
        <CartContext.Provider
            value={{
                compra,
                guardarCart,
                precioItem,
                precioTotal,
                totalItems,
                eliminarItem,
                borrarTodo
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;