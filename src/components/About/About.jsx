import React from "react";
import Eric from "../../Assets/Images/IMG_0499.jpg";
import HtmlLogo from "../../Assets/Images/htmlLogo.svg";
import FireLogo from "../../Assets/Images/FirebaseLogo.png";
import SassLogo from "../../Assets/Images/SassLogo.png";
import ReactLogo from "../../Assets/Images/ReactLogo.png";
import NodeLogo from "../../Assets/Images/NodeLogo.png";
import JSLogo from "../../Assets/Images/JavascriptLogo.png";
import CssLogo from "../../Assets/Images/cssLogo.svg";
import "./About.scss";

function About() {
  return (
    <div className="test">
      <div class="sign">
        <span class="fast-flicker">b</span>onj<span class="flicker">o</span>ur
      </div>
      <div className="about-me">
        <p className="about-me__statement">
          I'm a fullstack web developer based out of Toronto, Canada. I enjoy
          the daily challenge of undertaking complex problems and creating
          efficient code to produce stunning designs. When not online you might
          find me on a chairlift, breathing underwater or hunting down the
          city's best coffee.{" "}
        </p>

        <a
          className="about-me__polaroid-a"
          href="/"
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
          href="/resume/test.pdf"
          download="test.pdf"
        >
          <i class="about-me__save far fa-save">&nbsp; Download CV</i>
        </a>
      </div>
      <h2 className="about-me__skills-title">----- SKILLS ------</h2>
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
    </div>
  );
}

export default About;
