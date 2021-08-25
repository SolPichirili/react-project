import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [purchase, setPurchase] = useState([])

    const saveCart = (item) => {
        const idPurchase = purchase.findIndex(it => item.item.id === it.item.id)
        if (idPurchase === -1) {
            setPurchase([...purchase, item])
        } else {
            const newQuantity = purchase[idPurchase].cantidad + item.cantidad
            const prevList = purchase.filter(it => it.item.id !== item.item.id)
            setPurchase([...prevList, { item: item.item, cantidad: newQuantity }])
        }
    }

    const priceItems = (price, quantity) => {
        return price * quantity;
    }

    const removeItem = (id) => {
        const itemsInCart = purchase.filter(it => it.item.id !== id)
        setPurchase(itemsInCart);
    }

    const totalPrice = () => {
        return purchase.reduce((acum, value) => (acum + (value.cantidad * value.item.precio)), 0)
    }

    const totalItems = () => {
        return purchase.reduce((acum, value) => acum + value.cantidad, 0)
    }

    function removeAll() {
        setPurchase([])
    }

    return (
        <CartContext.Provider
            value={{
                purchase,
                saveCart,
                priceItems,
                totalPrice,
                totalItems,
                removeItem,
                removeAll
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;