import React from "react";
import traxpic from "../../Assets/Images/traxSrnshoot.png";
import reelspic from "../../Assets/Images/reelsSrnShot.png";
import brainflixpic from "../../Assets/Images/brainFlix.png";

import "./Projects.scss";

function Projects() {
  return (
    <div class="projects">
      <div className="projects__container">
        <div class="projects__content">
          <div>
            <div class="projects__content-overlay"></div>
            <img alt="" class="projects__content-image" src={traxpic} />
            <div class="projects__content-details fadeIn-bottom">
              <h3 class="projects__content-title">TRAX</h3>
              <p class="projects__content-text">
                Access a database including every coaster on the planet and
                track your “coaster credits!”
              </p>
              <div className="projects__link-wrp">
                <a
                  className="projects__content-link"
                  href="https://github.com/E-Dimech/trax"
                >
                  <i class="projects__social-icon fab fa-github fa-2x"></i>
                </a>
                <a
                  className="projects__content-link"
                  href="https://traxcredits.herokuapp.com/"
                >
                  <i class="projects__social-icon fas fa-link fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="projects__content">
          <div>
            <div class="projects__content-overlay"></div>
            <img alt="" class="projects__content-image" src={reelspic} />
            <div class="projects__content-details fadeIn-bottom">
              <h3 class="projects__content-title">Movie Reels</h3>
              <p class="projects__content-text">
                Search through a movie database and "nominate" your top five
                favourite films!
              </p>
              <div className="projects__link-wrp">
                <a
                  className="projects__content-link"
                  href="https://github.com/E-Dimech/MovieReels"
                >
                  <i class="projects__social-icon fab fa-github fa-2x"></i>
                </a>
                <a
                  className="projects__content-link"
                  href="https://moviereels.netlify.app/"
                >
                  <i class="projects__social-icon fas fa-link fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="projects__content">
          <div>
            <div class="projects__content-overlay"></div>
            <img alt="" class="projects__content-image" src={brainflixpic} />
            <div class="projects__content-details fadeIn-bottom">
              <h3 class="projects__content-title">BrainFlix</h3>
              <p class="projects__content-text">
                Video player app inspired by Youtube
              </p>
              <div className="projects__link-wrp">
                <a
                  className="projects__content-link"
                  href="https://github.com/E-Dimech/eric-dimech-brainflix"
                >
                  <i class="projects__social-icon fab fa-github fa-2x"></i>
                </a>
                {/* <a className="projects__content-link" href="www.ericdimech.ca">
                  <i class="projects__social-icon fas fa-link fa-2x"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
