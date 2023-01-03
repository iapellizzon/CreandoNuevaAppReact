import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartArray, setCartArray] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const addToCart = (products, count) => {
    if (isInCart(products.id)) {
      console.log("ya está el producto en el carrito"); //esta sería la acción para cuando ya está agregado
    } else {
      console.log(`Agregaste ${products.title}, cantidad: ${count}`);
      const newObj = {
        item: products,
        count,
      };

      setCartArray([...cartArray, newObj]);
      productCount(); //ejecutamos la función para actualizar cantidad total de productos
    }
  };
  const deleteItem = (id) => {
    const updatedCart = cartArray.filter((element) => element.item.id !== id);
    setCartArray(updatedCart);
  };

  const clearCart = () => {
    setCartArray([]);
  };

  const isInCart = (id) => {
    return cartArray.some((element) => element.item.id === id);
  };

  const productCount = () => {
    if (cartArray.length > 1) {
      const value = cartArray.reduce(
        (prevElement, currentElement) =>
          prevElement.count + currentElement.count
      );
      setTotalCount(value);
    } else {
      setTotalCount(cartArray[0].count);
    }
  };

  const cartTotal = () => {
    return cartArray.reduce(
      (acc, prod) => (acc += prod.item.price * prod.count),
      0
    );
  };

  const value = {
    cartArray,
    addToCart,
    deleteItem,
    clearCart,
    cartTotal,
  };

  return (
    <CartContext.Provider value={{ value }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
