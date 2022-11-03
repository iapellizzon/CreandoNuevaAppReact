import CartWidgets from "../CartWidgets/CartWidgets";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="menu-navbar-conteiner">
      <h1 className="menu-title">Bicicletas Devenir</h1>
      <ul className="menu-items">
        <li>
          <a href="" className="menu-list">
            Bicicletas
          </a>
        </li>
        <li>
          <a href="" className="menu-list>">
            Buscador
          </a>
        </li>
        <li>
          <a className="nav__link" href="#">
            <CartWidgets />
          </a>
        </li>
      </ul>
      <CartWidgets />
    </div>
  );
};

export default NavBar;
