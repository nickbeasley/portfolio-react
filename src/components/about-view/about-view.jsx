import React from "react";
import "./about-view.css";
import Resume from "../../assets/Resume.pdf";
import htmlLogo from "../../images/html5.svg";
import cssLogo from "../../images/css3.svg";
import jsLogo from "../../images/javascript.svg";
import tsLogo from "../../images/typescript.svg";
import reactLogo from "../../images/react.svg";
import reduxLogo from "../../images/redux.svg";
import angularLogo from "../../images/angular.svg";
import bootstrapLogo from "../../images/bootstrap.svg";
import jqueryLogo from "../../images/jquery.svg";
import nodeLogo from "../../images/nodejs.svg";
import jsonLogo from "../../images/json.svg";
import postmanLogo from "../../images/postman.svg";
import awsLogo from "../../images/aws.svg";
import herokuLogo from "../../images/heroku.svg";
import netlifyLogo from "../../images/netlify.svg";
import mongoLogo from "../../images/mongodb.svg";
import vscodeLogo from "../../images/visual-studio-code.svg";
import gitLogo from "../../images/githublogo.png";
import reactNativeLogo from "../../images/react-native.svg";
import firebaseLogo from "../../images/firebase.svg";
import expoLogo from "../../images/expo-go.png";
import jestLogo from "../../images/jest.svg";
import oAuthLogo from "../../images/oauth.svg";
import parcelLogo from "../../images/parcel.png";
import angularMaterialLogo from "../../images/angular-material.png";

function AboutView() {
  return (
    <div className="skills-section">
      <div className="skill-box">
        <h1 className="skills-title">Developer Toolbox</h1>
        <div className="skill-logos">
          <figure>
            <img src={htmlLogo} alt="HTML5" className="skill-logo"></img>
            <figcaption>HTML5</figcaption>
          </figure>
          <figure>
            <img src={cssLogo} alt="CSS3" className="skill-logo"></img>
            <figcaption>CSS3</figcaption>
          </figure>
          <figure>
            <img src={jsLogo} alt="JavaScript" className="skill-logo"></img>
            <figcaption>JavaScript</figcaption>
          </figure>
          <figure>
            <img src={tsLogo} alt="TypeScript" className="skill-logo"></img>
            <figcaption>TypeScript</figcaption>
          </figure>
          <figure>
            <img src={reactLogo} alt="React" className="skill-logo"></img>
            <figcaption>React</figcaption>
          </figure>
          <figure>
            <img src={reduxLogo} alt="Redux" className="skill-logo"></img>
            <figcaption>Redux</figcaption>
          </figure>
          <figure>
            <img src={angularLogo} alt="Angular" className="skill-logo"></img>
            <figcaption>Angular</figcaption>
          </figure>
          <figure>
            <img
              src={bootstrapLogo}
              alt="Bootstrap"
              className="skill-logo"
            ></img>
            <figcaption>Bootstrap</figcaption>
          </figure>
          <figure>
            <img src={jqueryLogo} alt="jQuery" className="skill-logo"></img>
            <figcaption>jQuery</figcaption>
          </figure>
          <figure>
            <img src={nodeLogo} alt="NodeJS" className="skill-logo"></img>
            <figcaption>NodeJS</figcaption>
          </figure>
          <figure>
            <img src={jsonLogo} alt="JSON" className="skill-logo"></img>
            <figcaption>JSON</figcaption>
          </figure>
          <figure>
            <img src={postmanLogo} alt="Postman" className="skill-logo"></img>
            <figcaption>Postman</figcaption>
          </figure>
          <figure>
            <img src={awsLogo} alt="AWS" className="skill-logo"></img>
            <figcaption>Amazon Web Services</figcaption>
          </figure>
          <figure>
            <img src={herokuLogo} alt="Heroku" className="skill-logo"></img>
            <figcaption>Heroku</figcaption>
          </figure>
          <figure>
            <img src={netlifyLogo} alt="Netlify" className="skill-logo"></img>
            <figcaption>Netlify</figcaption>
          </figure>
          <figure>
            <img src={mongoLogo} alt="MongoDB" className="skill-logo"></img>
            <figcaption>MongoDB</figcaption>
          </figure>
          <figure>
            <img src={vscodeLogo} alt="VS Code" className="skill-logo"></img>
            <figcaption>Visual Studio Code</figcaption>
          </figure>
          <figure>
            <img src={gitLogo} alt="Git" className="skill-logo"></img>
            <figcaption>GitHub</figcaption>
          </figure>
          <figure>
            <img
              src={reactNativeLogo}
              alt="React Native"
              className="skill-logo"
            ></img>
            <figcaption>React Native</figcaption>
          </figure>
          <figure>
            <img src={firebaseLogo} alt="Firebase" className="skill-logo"></img>
            <figcaption>Google Firebase</figcaption>
          </figure>
          <figure>
            <img src={expoLogo} alt="Expo" className="skill-logo"></img>
            <figcaption>Expo Go</figcaption>
          </figure>
          <figure>
            <img src={jestLogo} alt="Jest" className="skill-logo"></img>
            <figcaption>Jest</figcaption>
          </figure>
          <figure>
            <img src={oAuthLogo} alt="OAuth" className="skill-logo"></img>
            <figcaption>OAuth2</figcaption>
          </figure>
          <figure>
            <img src={parcelLogo} alt="Parcel" className="skill-logo"></img>
            <figcaption>Parcel</figcaption>
          </figure>
          <figure>
            <img
              src={angularMaterialLogo}
              alt="Angular Material"
              className="skill-logo"
            ></img>
            <figcaption>Angular Material</figcaption>
          </figure>
        </div>{" "}
        <a href={Resume} download>
          <button className="cv-button">Download Resume</button>
        </a>
      </div>
    </div>
  );
}
export default AboutView;
