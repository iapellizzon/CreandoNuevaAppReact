import React from "react";
import Item from "../Item/item";
const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
