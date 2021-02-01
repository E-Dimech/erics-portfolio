import React from "react";
import MediaQuery from "react-responsive";

import Eric from "../../Assets/Images/IMG_0499.jpg";
import HtmlLogo from "../../Assets/Images/htmlLogo.svg";
import FireLogo from "../../Assets/Images/FirebaseLogo.png";
import SassLogo from "../../Assets/Images/SassLogo.png";
import ReactLogo from "../../Assets/Images/ReactLogo.png";
import NodeLogo from "../../Assets/Images/NodeLogo.png";
import JSLogo from "../../Assets/Images/JavascriptLogo.png";
import CssLogo from "../../Assets/Images/cssLogo.svg";
import Guac from "../../Assets/Images/guacamole.png";

import "./About.scss";

function About() {
  return (
    <div className="about-me">
      <div className="about-me__sign">
        <span className="about-me__fast-flicker">b</span>onj
        <span className="about-me__flicker">o</span>ur
      </div>
      <div className="about-me__container">
        <p className="about-me__statement">
          I'm a fullstack web developer based out of Toronto, Canada. I enjoy
          the daily challenge of undertaking complex problems and creating
          efficient code to produce stunning designs. When not online you might
          find me on a chairlift, breathing underwater or hunting down the
          city's best coffee.{" "}
        </p>

        <a
          className="about-me__polaroid-a"
          href="/contact"
          title="Wineglass Bay, Tasmania."
        >
          <img
            className="about-me__polaroid-picture"
            src={Eric}
            alt="Eric Dimech watching the sunset in Tasmania"
          />
        </a>
      </div>
      <div className="about-me__cv-wrap">
        <a
          className="about-me__cv-download"
          href="/resume/EricDimechCV.pdf"
          download="EricDimechCV"
        >
          <i class="about-me__save far fa-save">
            <span className="about-me__save-text">&nbsp; Download CV</span>
          </i>
        </a>
      </div>
      <h2 className="about-me__skills-title">- SKILLS -</h2>
      <MediaQuery minDeviceWidth={1200}>
        <div className="about-me__skills-container">
          <div className="about-me__skills-box">
            <img className="about-me__skills-img" src={CssLogo} alt="" />
            <p className="about-me__skills-name">CSS</p>
          </div>
          <div className="about-me__skills-box">
            <img className="about-me__skills-img" src={NodeLogo} alt="" />
            <p className="about-me__skills-name">Node</p>
          </div>
          <div className="about-me__skills-box">
            <img className="about-me__skills-img" src={FireLogo} alt="" />
            <p className="about-me__skills-name">Firebase</p>
          </div>
          <div className="about-me__skills-box">
            <img className="about-me__skills-img" src={ReactLogo} alt="" />
            <p className="about-me__skills-name">React</p>
          </div>
          <div className="about-me__skills-box">
            <img className="about-me__skills-img" src={JSLogo} alt="" />
            <p className="about-me__skills-name">JavaScript</p>
          </div>
          <div className="about-me__skills-box">
            <img className="about-me__skills-img" src={SassLogo} alt="" />
            <p className="about-me__skills-name">SASS</p>
          </div>
          <div className="about-me__skills-box">
            <img className="about-me__skills-img" src={HtmlLogo} alt="" />
            <p className="about-me__skills-name">HTML</p>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1199}>
        <div>
          <ul id="hexGrid">
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <img src={HtmlLogo} alt="" />
                  <h1>HTML5</h1>
                  <p>Proficiency: Expert</p>
                </div>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <img src={FireLogo} alt="" />
                  <h1>Firebase</h1>
                  <p>Proficiency: Intermediate</p>
                </div>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <img src={SassLogo} alt="" />
                  <h1>SASS</h1>
                  <p>Proficiency: Expert</p>
                </div>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <img src={ReactLogo} alt="" />
                  <h1>React</h1>
                  <p>Proficiency: Advanced</p>
                </div>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <img src={NodeLogo} alt="" />
                  <h1>Node.js</h1>
                  <p>Proficiency: Intermediate</p>
                </div>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <img src={JSLogo} alt="" />
                  <h1>JavaScript</h1>
                  <p>Proficiency: Advanced</p>
                </div>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <img src={CssLogo} alt="" />
                  <h1>CSS3</h1>
                  <p>Proficiency: Expert</p>
                </div>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <div class="hexLink">
                  <img src={Guac} alt="" />
                  <h1>Guacamole</h1>
                  <p>Not a technology but I am a connoisseur and craftsmen.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </MediaQuery>
    </div>
  );
}

export default About;
