import React from "react";
import Eric from "../../Assets/Images/IMG_0499.jpg";
import "./About.scss";

function About() {
  return (
    <>
      <div className="about-me">
        {/* <h1>About World</h1> */}
        <p className="about-me__statement">
          I'm a fullstack web developer based out of Toronto, Canada. I enjoy
          the daily challenge of undertaking complex problems and creating
          efficient code to produce stunning designs. When not online you might
          find me on a chairlift, breathing underwater or hunting down the
          cities best coffee.
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
      <div></div>
      <h2 className="about-me__skills">----- SKILLS ------</h2>
    </>
  );
}

export default About;
