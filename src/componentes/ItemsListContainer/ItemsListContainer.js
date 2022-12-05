/* import { data } from "../../data/data"; */
import { useState, useEffect } from "react";
import "./ItemsListContainer.css";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemsListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "items");
    if (categoryName) {
      const queryFilter = query(
        querySnapshot,
        where("categoryId", "==", categoryName)
      );
      getDocs(queryFilter)
        .then((response) => {
          const data = response.docs.map((item) => {
            console.log(item.data());
            console.log(item.id);
            return { id: item.id, ...item.data() };
          });
          console.log(data);
          setItems(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getDocs(querySnapshot)
        .then((response) => {
          const data = response.docs.map((item) => {
            console.log(item.data());
            console.log(item.id);
            return { id: item.id, ...item.data() };
          });
          console.log(data);
          setItems(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getProducts();
  }, [categoryName]);

  return <div>{<ItemList products={items} />}</div>;
};

export default ItemsListContainer;
