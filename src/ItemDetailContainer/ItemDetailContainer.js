import { useEffect, useState } from "react";
import { data } from "../data/data";
import { useParams } from "react-router-dom";
import ItemDetail from "../componentes/ItemDetail/ItemDetail";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContext";

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const db = getFirestore();
    const coleccionProd = collection(db, "items");
    const referenciaDoc = doc(coleccionProd, id);
    getDoc(referenciaDoc)
      .then((result) => {
        setProductSelected({
          id: result.id,
          ...result.data(),
        });
      })
      .catch((error) => console.log(error));
  }, [id]);

  const onAdd = (count) => {
    addToCart(products, count);
    setAdded(true);
  };

  return (
    <div>
      {productSelected && <ItemDetail productSelected={productSelected} />}
    </div>
  );
};

export default ItemDetailContainer;
