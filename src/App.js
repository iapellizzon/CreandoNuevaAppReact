import NavBar from "./componentes/NavBar/NavBar";
import ItemsListContainer from "./componentes/ItemsListContainer/ItemsListContainer";
import "./App.css";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartProvider";

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
          <Route path="cart" element={<ItemsListContainer />} />
        </Routes>
      </BrowserRouter>
      <>
        <NavBar />;
        <ItemsListContainer name="Bienvenidos a mi tienda online" />
        <div className="App">
          <header className="App-header">
            <ItemDetailContainer />
          </header>
        </div>
      </>
    </CartProvider>
  );
}
export default App;
