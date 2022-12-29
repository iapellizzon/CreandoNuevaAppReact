import NavBar from "./componentes/NavBar/NavBar";
import ItemsListContainer from "./componentes/ItemsListContainer/ItemsListContainer";
import "./App.css";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import Cart from "./componentes/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemsListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemsListContainer />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
