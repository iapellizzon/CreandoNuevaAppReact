import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ productSelected }) => {
  const onAdd = (cantidad) => {
    console.log(`compraste ${cantidad} bicicletas`);
  };
  return (
    <div>
      <h2>{productSelected.title}</h2>
      <h2>{productSelected.category}</h2>
      <h2>{productSelected.id}</h2>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
