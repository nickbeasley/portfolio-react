import React from "react";
import "./about-view.css";
import Resume from "../../assets/Resume6.2.pdf";

import { skillLogos } from "../logos/logos";

const AboutView = () => {
  return (
    <div className="content">
      <h1 className="skill-title">Skills</h1>
      <div className="skill-logos">
        {skillLogos.map((logo, index) => (
          <div key={index} className="logo-container">
            <img src={logo.logo} className="skill-logo" alt="Skill Logo" />
            <figcaption className="skill-caption">{logo.name}</figcaption>
          </div>
        ))}
      </div>
      <div className="cv-button-container">
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="cv-button"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default AboutView;
