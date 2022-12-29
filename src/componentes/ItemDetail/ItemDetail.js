import { useState, useContext } from "react";
import { cartContext } from "../../context/CartProvider";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ productSelected }) => {
  const [count, setCount] = useState(0);
  const { cart, addToCart } = useContext(cartContext);
  const onAdd = (count) => {
    addToCart(productSelected, count);
    setCount(count);
  };
  return (
    <div>
      <h1>Esto es lo que hay en tu carrito{cart.lenght}</h1>
      <h2>{productSelected.title}</h2>
      <h2>{productSelected.category}</h2>
      <h2>${productSelected.price}</h2>
      <img src={productSelected.imageId} alt={productSelected.title} />
      <h2>{count}</h2>

      {count > 0 ? (
        <Link to="/cart">terminar</Link>
      ) : (
        <ItemCount
          setCount={setCount}
          initial={1}
          stock={productSelected.stock}
          onAdd={onAdd}
        />
      )}
    </div>
  );
};

export default ItemDetail;
