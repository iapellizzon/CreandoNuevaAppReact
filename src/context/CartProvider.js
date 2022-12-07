import { cartContext, useState } from "react";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart([...cart, { ...product, quantity }]);
  };

  const { cartContext } = cartContext();

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
