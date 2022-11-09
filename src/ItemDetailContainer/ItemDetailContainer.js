import { useEffect, useState } from "react";
import { data } from "../data/data";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();

  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
  useEffect(() => {
    getData.then((response) => {
      setProduct(response[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>{product?.name}</h1>
    </div>
  );
};

export default ItemDetailContainer;
