import React from "react";
import traxpic from "../../Assets/Images/traxSrnshoot.png";
import reelspic from "../../Assets/Images/reelsSrnShot.png";
// import seniorpic from "../../Assets/Images/seniorCare.jpg";
import brainflixpic from "../../Assets/Images/brainFlix.png";

import "./Projects.scss";

function Projects() {
  return (
    <div class="container">
      <div className="tesssst">
        <div class="content">
          <a href="/">
            <div class="content-overlay"></div>
            <img alt="" class="content-image" src={traxpic} />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">TRAX</h3>
              <p class="content-text">
                Access a database including every coaster on the planet and
                track your “coaster credits!”
              </p>
              {/* <p class="content-text">
                users can keep track of their “coaster credits!”
              </p> */}
              {/* <div className="container-link-wrp"> */}
              <a
                className="content-link"
                href="https://github.com/E-Dimech/trax"
              >
                <i class="contact-form__social-icon fab fa-github fa-2x"></i>
              </a>
              {/* <a className="content-link" href="www.ericdimech.ca">
                  <i class="contact-form__social-icon fas fa-link fa-2x"></i>
                </a> */}
              {/* </div> */}
            </div>
          </a>
        </div>
        <div class="content">
          <a href="/">
            <div class="content-overlay"></div>
            <img alt="" class="content-image" src={reelspic} />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Movie Reels</h3>
              <p class="content-text">
                Search through a movie database and "nominate" your top five
                favourite films!
              </p>
              {/* <p class="content-text">
                "nominate" your top five favourite films!
              </p> */}
              <div className="container-link-wrp">
                <a
                  className="content-link"
                  href="https://github.com/E-Dimech/TheShoppiesDevChallenge"
                >
                  <i class="contact-form__social-icon fab fa-github fa-2x"></i>
                </a>
                <a
                  className="content-link"
                  href="https://ericdimechsummer2021webdevchallenge.netlify.app/"
                >
                  <i class="contact-form__social-icon fas fa-link fa-2x"></i>
                </a>
              </div>
            </div>
          </a>
        </div>

        {/* <div class="content">
          <a href="/">
            <div class="content-overlay"></div>
            <img alt="" class="content-image" src={seniorpic} />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">Substitute Daughter</h3>
              <p class="content-text">This is a short description</p>
              <p class="content-text">This is a short description</p>
            </div>
          </a>
        </div> */}
        <div class="content">
          <a href="/">
            <div class="content-overlay"></div>
            <img alt="" class="content-image" src={brainflixpic} />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">BrainFlix</h3>
              <p class="content-text">Video player app inspired by Youtube</p>
              {/* <p class="content-text">
                "nominate" your top five favourite films!
              </p> */}
              <div className="container-link-wrp">
                <a
                  className="content-link"
                  href="https://github.com/E-Dimech/eric-dimech-brainflix/tree/master/sprint-3"
                >
                  <i class="contact-form__social-icon fab fa-github fa-2x"></i>
                </a>
                <a className="content-link" href="www.ericdimech.ca">
                  <i class="contact-form__social-icon fas fa-link fa-2x"></i>
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
