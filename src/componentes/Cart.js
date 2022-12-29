import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartArray, deleteItem } = useContext(CartContext);

  if (cartArray.lenght === 0) {
    return (
      <div>
        <p>No hay productos aún</p>
        <Link to="/">Ir al inicio</Link>
      </div>
    );
  }

  return (
    <div>
      {cartArray.map((prod) => (
        <CartItem key={prod.item.id} product={prod} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default Cart;
