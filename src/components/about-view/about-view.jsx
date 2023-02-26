import React from "react";
import "./about-view.css";
import Resume from "../../assets/Resume.pdf";

function AboutView() {
  return (
    <div className="skills-section">
      <h1 className="skills-title">Skills</h1>
      <div className="skill-box">
        <h2 className="skill-list">Front End Development</h2>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Libraries / Frameworks </li>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li> Angular </li>
          <li> Bootstrap </li>
          <li> SASS/SCSS </li>
          <li> jQuery </li>
        </ul>
        <li>
          Version Control{" "}
          <ul>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </li>
        <li>AJAX & JSON</li>
        <li>
          Test- & Behavior-Driven-Development
          <ul>
            <li>unit testing</li>
            <li>integration testing</li>
            <li>acceptance testing</li>
            <li>end- to-end testing</li>
          </ul>
        </li>
        <li>Functional & object oriented programming</li>
        <li>
          Mobile Apps{" "}
          <ul>
            <li>React Native</li>
            <li>Expo</li>
            <li>PWA </li>
          </ul>
        </li>
      </div>

      <div className="skill-box">
        <h2 className="skill-list">Back End Development</h2>
        <li>NodeJS & Express</li>
        <li>
          APIs{" "}
          <ul>
            <li> JSON</li>
            <li> RESTful</li>
            <li> Postman</li>
          </ul>
        </li>
        <li>
          Hosting & Web Services{" "}
          <ul>
            <li>AWS Google Firestore</li>
            <li>Heroku</li>
            <li> Netlify</li>
          </ul>
        </li>
        <li>
          Relational & non-relational databases{" "}
          <ul>
            <li> PostgreSQL</li>
            <li> MongoDB</li>
            <li> Django</li>
          </ul>
        </li>
        <li>Python</li>
      </div>
      <div className="skill-box">
        <h2 className="skill-list">Tools</h2>
        <li>VS Code</li>
        <li>Chrome Dev Tools</li>
        <li>Postman</li>
        <li>GutHub Desktop</li>
      </div>
      <a href={Resume} download>
        <button className="cv-button">Download CV</button>
      </a>
    </div>
  );
}
export default AboutView;
