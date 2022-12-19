import { computeHeadingLevel } from "@testing-library/react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  console.log(product);
  return (
    <Link to={`/item/${product.id}`}>
      <div style={{ border: "1px solid red" }}>
        <img width={"300px"} alt={product.title} src={product.imageId} />
        <h2>{product.title}</h2>
        <h2>{product.description}</h2>
        <h2>{product.price}</h2>
        <h2>{product.stock}</h2>
      </div>
    </Link>
  );
};

export default Item;
