import React from "react";
import logo from "../../assets/verificar.png";
import "./CartWidgets.css";

/* import logo from "../../assets/verificar.png"; */

const CartWidgets = () => {
  return (
    <div className="menu_navbar__logo">
      <img className="menu-navbar__img" src={logo} alt="cart widget" />
    </div>
  );
};

export default CartWidgets;
