import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

// import Computer from "../../Assets/Computer/PinClipart.com_computer-cpu-clipart_1324075.png";
// // import Icon from "../../Assets/Icon/E Logo.gif";
import Logo from "../../Assets/Icon/elogo.png";

// import Test from "../../Assets/Icon/E Logo (1).png";
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
          {/* <video className="navBar__title" autoPlay loop muted>
          <source src={LogoMP4} type="video/mp4" />
        </video> */}
          <img src={Logo} className="navBar__title" alt="Eric's portfolio" />
          {/* <h1 className="navBar__title">ERIC.</h1> */}

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
                //   <li key={index}>
                //     <a className={item.cName} href={item.url}>
                //       {item.title}
                //     </a>
                //   </li>
                <li key={index}>
                  <Link to={item.url}>
                    <p className={item.cName}>{item.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* <div>
          <img src={Computer} alt="computer monitor" className="test" />
        </div> */}
      </>
    );
  }
}

export default NavBar;
