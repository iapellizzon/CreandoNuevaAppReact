import { useEffect, useState } from "react";
import { data } from "../data/data";
import ItemsListContainer from "../componentes/ItemsListContainer/ItemsListContainer";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState();
  const { id } = useParams();

  const getProduct = () => {
    const productFiltered = data.filter((producto) => {
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
