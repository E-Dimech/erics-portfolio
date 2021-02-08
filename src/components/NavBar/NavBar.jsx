import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

// import Logo from "../../Assets/Icon/elogo.png";

import "./NavBar.scss";

class NavBar extends Component {
  state = {
    active: false,
  };

  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

  hideBurger = () => {
    this.setState({ active: false });
  };

  render() {
    return (
      <>
        <nav className="navBar">
          <Link className="navBar__logo-link" to="/">
            <span className="navBar__title">E</span>
          </Link>

          <div className="navBar__menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.active ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul
            className={
              this.state.active ? "navBar__menu-active" : "navBar__menu"
            }
          >
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url} onClick={this.hideBurger}>
                    <p className={item.cName}>{item.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  }
}

export default NavBar;
