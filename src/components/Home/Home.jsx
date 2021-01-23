import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Logo from "../../Assets/Icon/elogo.png";

// function Home() {
function Home() {
  return (
    <div className="home-greeting">
      <div className="home-greeting__h1">
        <span className="home-greeting__text">H</span>
        <span className="home-greeting__text">i</span>
        <span className="home-greeting__text">,</span>
        <br></br>
        <span className="home-greeting__text">I</span>
        <span className="home-greeting__text">'</span>
        <span className="home-greeting__text">m</span>
        <span className="home-greeting__text">
          <img
            className="home-greeting__logo"
            src={Logo}
            alt="Eric Dimech Fullstack Developer"
          />
        </span>
        <span className="home-greeting__text">r</span>
        <span className="home-greeting__text">i</span>
        <span className="home-greeting__text">c</span>
        <span className="home-greeting__text">,</span>
        <br />
        <span className="home-greeting__text">w</span>
        <span className="home-greeting__text">e</span>
        <span className="home-greeting__text">b</span>
        <span className="home-greeting__text">d</span>
        <span className="home-greeting__text">e</span>
        <span className="home-greeting__text">v</span>
        <span className="home-greeting__text">e</span>
        <span className="home-greeting__text">l</span>
        <span className="home-greeting__text">o</span>
        <span className="home-greeting__text">p</span>
        <span className="home-greeting__text">e</span>
        <span className="home-greeting__text">r</span>
        <span className="home-greeting__text">.</span>
      </div>
      <h2 class="wordCarousel">
        <span className="wordCarousel__text">Fullstack Developer / </span>
        <div>
          <ul class="flip5">
            <li>React Expert</li>
            <li>Snowboarder</li>
            <li>Tech Obsessed</li>
            <li>Animation Wizard</li>
            <li>Coaster Enthusiast</li>
          </ul>
        </div>
      </h2>
      <div className="btn">
        <Link to="/contact" className="btn-slice">
          <div class="top">
            <span>CONTACT ME</span>
          </div>
          <div class="bottom">
            <span>CONTACT ME</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
