import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [compra, setCompra] = useState([{ item: {}}])

    const guardarCart = (item) => {
        setCompra([...compra, item])
    }

    return (
        <CartContext.Provider
            value={{
                compra,
                guardarCart
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;