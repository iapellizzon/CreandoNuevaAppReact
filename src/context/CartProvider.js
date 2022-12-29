import { useState, createContext } from "react";
import { CartContext } from "./CartContext";

export const cartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart([...cart, { ...product, quantity }]);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <cartContext.Provider value={{ cart, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
