import NavBar from "./componentes/NavBar/NavBar";
import ItemsListContainer from "./componentes/ItemsListContainer/ItemsListContainer";
import "./App.css";
import { BsFillCartCheckFill } from "react-icons/bs";

/* import "./css/bootstrap.min.css"; */
/* import "bootstrap-icons/font/bootstrap-icons.css"; */
/* import Header from "./Header"; */

function App() {
  return (
    <>
      <h1>
        <BsFillCartCheckFill color="blue" />
      </h1>
      <NavBar />;
      <ItemsListContainer name="Bienvenidos a mi tienda online" />
    </>
  );
}

export default App;
