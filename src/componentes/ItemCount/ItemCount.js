import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  return (
    <div>
      <div>
        <button className="btn btn-danger" onClick={restar}>
          -
        </button>
        <span className="btn btn-light">{count}</span>
        <button className="btn btn-success" onClick={sumar}>
          +
        </button>
      </div>
      <button className="btn btn-info" onClick={() => onAdd(count)}>
        Comprar
      </button>
    </div>
  );
};

export default ItemCount;
