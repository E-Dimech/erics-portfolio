import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="home-greeting">
      <div className="home-greeting__container">
        <span className="home-greeting__text">H</span>
        <span className="home-greeting__text">i</span>
        <span className="home-greeting__text">,</span>
        <br></br>
        <span className="home-greeting__text extra">I</span>
        <span className="home-greeting__text extra">'</span>
        <span className="home-greeting__text extra">m</span>
        <span className="home-greeting__logo extra">E</span>
        <span className="home-greeting__text extra">r</span>
        <span className="home-greeting__text extra">i</span>
        <span className="home-greeting__text extra">c</span>
        <span className="home-greeting__text extra">,</span>
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
      <h2 className="wordCarousel">
        <span className="wordCarousel__text">Fullstack Developer / </span>
        <div className="wordCarousel__container">
          <ul className="flip4">
            <li>React Expert</li>
            {/* <li>Snowboarder</li> */}
            <li>Tech Obsessed</li>
            <li>Animation Wizard</li>
            <li>Coaster Enthusiast</li>
          </ul>
        </div>
      </h2>
      <div className="btn">
        <Link to="/contact" className="btn__slice">
          <div className="btn__top">
            <span className="btn__text">CONTACT ME</span>
          </div>
          <div className="btn__bottom">
            <span className="btn__text">CONTACT ME</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
