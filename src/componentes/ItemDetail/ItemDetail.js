import { useState, useContext } from "react";
import { cartContext } from "../../contextt/CartProvider";
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ productSelected }) => {
  const [count, setCount] = useState(0);
  const { cart, addToCart } = useContext(cartContext);
  console.log(productSelected);
  return (
    <div>
      <h1>Esto es lo que hay en tu carrito{cart.lenght}</h1>
      <h2>{productSelected.title}</h2>
      <h2>{productSelected.category}</h2>
      <h2>{productSelected.id}</h2>
      <h2>{productSelected.price}</h2>
      <h2>{count}</h2>
      <ItemCount setCount={setCount} />
      <button onClick={() => addToCart(productSelected, count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;
