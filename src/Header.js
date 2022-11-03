import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text info" href="#">
              Bicicletas Devenir
            </a>
            <button
              className="navbar-toggler"
              onClick={() => {
                this.setState({ show: !this.state.show });
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={
                this.state.show
                  ? "collapse navbar-collapse"
                  : "collapse navbar-collapse active"
              }
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Las bicis
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Para todos los gustos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contacto
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h1>{this.state.show}</h1>
      </>
    );
  }
}
