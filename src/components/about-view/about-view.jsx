import React from "react";
import "./about-view.css";

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
        <li>
          Libraries / Frameworks (React, Redux, Angular, Material, Bootstrap,
          SASS/ SCSS, jQuery)
        </li>
        <li>Version Control (Git, GitHub)</li>
        <li>AJAX & JSON</li>
        <li>
          Test- & Behavior-Driven- Development (unit testing, integration
          testing, acceptance testing, and end- to-end testing)
        </li>
        <li>Functional & object oriented programming</li>
        <li>Mobile Apps (React Native, Expo, PWA)</li>
      </div>

      <div className="skill-box">
        <h2 className="skill-list">Back End Development</h2>
        <li>NodeJS & Express</li>
        <li>APIs (JSON, RESTful, Postman)</li>
        <li>Hosting & Web Services (AWS, Google Firestore, Heroku, Netlify)</li>
        <li>
          Relational & non-relational databases (PostgreSQL, MongoDB, Django)
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
    </div>
  );
}
export default AboutView;
