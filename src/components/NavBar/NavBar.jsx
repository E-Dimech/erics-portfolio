import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
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
      <nav className="navBar">
        <h1 className="navBar__title">Eric</h1>
        <div className="navBar__menu-icon" onClick={this.handleClick}>
          <i className={this.state.active ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul
          className={this.state.active ? "navBar__menu-active" : "navBar__menu"}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
