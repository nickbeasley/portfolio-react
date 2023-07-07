import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import Portrait from "../../images/portrait.jpeg";
import "./main-section.css";

function MainSection() {
  return (
    <Container className="main-section">
      <div className="body">
        <img className="profile-picture" src={Portrait} alt="portrait" />
        <div className="aboutme">
          <p>
            Hi, I’m Nick Beasley. I’m a developer with a background in retail
            management and working with my team to troubleshoot devices.{" "}
          </p>
          <p>
            My role included identifying problems and assisting clients with
            implementing solutions. This helped me to understand issues from the
            customer perspective while also concentrating on meeting company
            goals.
          </p>
          <p>
            {" "}
            I’m transitioning to software development because my initiative to
            get things done and strong sense of curiosity make me want to
            develop my own technical solutions. My recent
            <span>
              <a
                className="CareerFoundry-link"
                href="https://careerfoundry.com"
                target="blank"
                rel="noopener noreferrer"
              >
                CareerFoundry
              </a>
            </span>
            experience has solidified my desire to develop products, and I’m
            looking for a full-time role that offers a similar opportunity.
          </p>
        </div>
      </div>
      <div className="text-center">
        <Link
          to="https://github.com/nickbeasley"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out some of my code!
        </Link>
      </div>
    </Container>
  );
}

export default MainSection;
