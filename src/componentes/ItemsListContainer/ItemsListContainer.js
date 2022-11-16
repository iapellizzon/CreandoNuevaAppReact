import { data } from "../../data/data";
import { useState, useEffect } from "react";
import "./ItemsListContainer.css";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemsListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryName) {
        const filteredData = data.filter((producto) => {
          return producto.category === categoryName;
        });
        resolve(filteredData);
      } else {
        resolve(data);
      }
    }, 1000);
  });

  useEffect(() => {
    getProducts
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [categoryName]);
  return (
    <div>
      <ItemList products={items} />
    </div>
  );
};

export default ItemsListContainer;
