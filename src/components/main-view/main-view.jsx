import React from "react";
import Menu from "../navbar/navbar";
import AboutView from "../about-view/about-view";
import ProjectView from "../project-view/project-view";
import ContactView from "../contact-view/contact-view";
import CertView from "../cert-view/cert-view";
import Footer from "../footer/footer";
import Portrait from "../../images/portrait.jpeg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./main-view.css";

function MainView() {
  return (
    <Router>
      <div className="main-view">
        <Container>
          <Menu />
        </Container>
        <Container style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <Container className="main-section">
                  <div className="body">
                    <img
                      className="profile-picture"
                      src={Portrait}
                      alt="portrait"
                    />
                    <div className="aboutme">
                      <p>
                        Hi, I’m Nick Beasley. I’m a developer with a background
                        in retail management and working with my team to
                        troubleshoot devices.{" "}
                      </p>
                      <p>
                        My role included identifying problems and assisting
                        clients with implementing solutions. This helped me to
                        understand issues from the customer perspective while
                        also concentrating on meeting company goals.
                      </p>
                      <p>
                        {" "}
                        I’m transitioning to software development because my
                        initiative to get things done and strong sense of
                        curiosity make me want to develop my own technical
                        solutions. My recent
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
                        experience has solidified my desire to develop products,
                        and I’m looking for a full-time role that offers a
                        similar opportunity.
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button
                      href="https://github.com/nickbeasley"
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      Check out some of my code!
                    </Button>
                  </div>
                </Container>
              }
            />
            <Route
              path="/about"
              element={
                <Container>
                  <AboutView />
                </Container>
              }
            />
            <Route
              path="/projects"
              element={
                <Container>
                  <ProjectView />
                </Container>
              }
            />
            <Route
              path="/certifications"
              element={
                <Container>
                  <CertView />
                </Container>
              }
            />
            <Route
              path="/contact"
              element={
                <Container>
                  <ContactView />
                </Container>
              }
            />
          </Routes>
        </Container>
        <Container>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default MainView;
