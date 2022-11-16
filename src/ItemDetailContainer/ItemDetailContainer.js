import { useEffect, useState } from "react";
import { data } from "../data/data";
import { useParams } from "react-router-dom";
import ItemDetail from "../componentes/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();

  const getProduct = () => {
    const productFiltered = data.find((producto) => {
      return producto.id == id;
    });
    setProductSelected(productFiltered);
  };

  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <div>
      {productSelected && <ItemDetail productSelected={productSelected} />}
    </div>
  );
};

export default ItemDetailContainer;
