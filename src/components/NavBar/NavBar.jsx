import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

import Logo from "../../Assets/Icon/elogo.png";

import "./NavBar.scss";

class NavBar extends Component {
  state = {
    active: false,
  };

  handleClick = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <>
        <nav className="navBar">
          <Link className="navBar__logo-link" to="/">
            <img src={Logo} className="navBar__title" alt="Eric's portfolio" />
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
                  <Link to={item.url}>
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
