import React from "react";
import CartWidgets from "../CartWidgets/CartWidgets";
import "./NavBar.css";

const NavBar = () => {
  /*  return (
    <div className="menu-navbar-conteiner">
      <h1 className="menu-title">Bicicletas Devenir</h1>
      <ul className="menu-items">
        <li>
          <a href="" className="menu-list">
            Bicicletas
          </a>
        </li>
        <li>
          <a href="" className="menu-list">
            Buscador
          </a>
        </li>
      </ul>
      <CartWidgets />
    </div>
  ); */
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        Bicicletas Devenir
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"> Bicicletas</li>
          </ul>

          <CartWidgets />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
