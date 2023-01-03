import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartArray, deleteItem, clearCart, cartTotal } =
    useContext(CartContext);

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
      <p>Total a pagar: {totalCart()}</p>
      <button onClick={clearCart}>Vaciar Carrito</button>{" "}
      <button>Finalizar Compra </button>
    </div>
  );
};

export default Cart;
