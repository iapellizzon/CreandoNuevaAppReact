import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidgets from "../CartWidgets/CartWidgets";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active navbar-brand" : "inactive navbar-brand"
            }
            to="/"
          >
            Bicicletas Devenir
          </NavLink>
        </li>

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
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/"
              >
                {" "}
                Bicicletas
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/category/Últimos Modelos"
              >
                Últimos Modelos
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/category/Las más vendidas"
              >
                Las más vendidas
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/category/Contacto"
              >
                Contacto
              </NavLink>
            </li>
          </ul>

          <Link to="/cart">Carrito</Link>

          <CartWidgets />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
