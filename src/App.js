import NavBar from "./componentes/NavBar/NavBar";
import ItemsListContainer from "./componentes/ItemsListContainer/ItemsListContainer";
import "./App.css";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />;
      <ItemsListContainer name="Bienvenidos a mi tienda online" />
      <div className="App">
        <header className="App-header">
          <ItemDetailContainer />
        </header>
      </div>
    </>
  );
}
export default App;
