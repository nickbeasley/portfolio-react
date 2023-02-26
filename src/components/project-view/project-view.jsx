import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import ChatAppPhoto from "../../images/ChatAppSS.png";
import MeetAppPhoto from "../../images/MeetAppSS.png";
import ToDoListPhoto from "../../images/ToDoListSS.png";
import PokedexPhoto from "../../images/PokedexSS.png";
import NixFlixPhoto from "../../images/NixFlixSS.png";
import NixFlixServerPhoto from "../../images/NixFlixServerSS.png";
import "./project-view.css";

function ProjectView() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const hideDetails = () => {
    setShowDetails(false);
  };
  return (
    <Container>
      <h1 className="page-title">Check out my projects!</h1>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className="grid__item">
            <Card.Title className="project-header">Pokedex!</Card.Title>
            <Card.Img
              src={PokedexPhoto}
              className="project-ss"
              alt="pokedex app"
            />
            <div className="card-body">
              <Card.Text>
                A small web application with HTML, CSS, and JavaScript that
                loads data from an external API and enables the viewing of data
                points in detail.
              </Card.Text>
              {showDetails ? (
                <>
                  <ul>
                    <li>
                      Users are able to view a list of data and see more details
                      for a given data item on demand.
                    </li>

                    <li>
                      The purpose of the project is to build a complete, fully
                      functioning JavaScript web application.
                    </li>
                    <li>This app is relying on an external data source.</li>
                    <li>
                      The app not only works, but is also aesthetically pleasing
                      and easy to use.
                    </li>
                    <li>
                      The project aims to showcase my ability to create the
                      architecture of a JavaScript app, as well as how I test
                      and debug my code.
                    </li>
                  </ul>
                  <button onClick={hideDetails}>Hide details</button>
                </>
              ) : (
                <button onClick={toggleDetails}>Show details</button>
              )}
            </div>
          </Card>
        </Col>
        <Col>
          <Card className="grid__item">
            <Card.Title className="project-header">To-do List!</Card.Title>
            <Card.Img
              src={ToDoListPhoto}
              className="project-ss"
              alt="to-do list app"
            />
            <div className="card-body">
              <Card.Text>
                This is a small web application made using jQuery.
              </Card.Text>
              {showDetails ? (
                <>
                  <ul>
                    <li>The user can add a new item to a list of items.</li>
                    <li>
                      The user can cross out an item from the list of items.
                    </li>
                    <li>The user can delete an item from the list of items.</li>
                    <li>
                      The user can change the order of items in the list of
                      items.
                    </li>
                  </ul>
                  <Button
                    className="project-button"
                    href="https://nickbeasley.github.io/to-do-list-jQuery/ "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See it here!
                  </Button>
                  <Button
                    className="project-button"
                    href="https://github.com/nickbeasley/to-do-list-jQuery.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See the code here!
                  </Button>
                  <button onClick={hideDetails}>Hide details</button>
                </>
              ) : (
                <button onClick={toggleDetails}>Show details</button>
              )}
            </div>
          </Card>
        </Col>
        <Col>
          <Card className="grid__item">
            <Card.Title className="project-header">Meet Up</Card.Title>
            <Card.Img
              src={MeetAppPhoto}
              className="project-ss"
              alt="meetup app"
            />
            <div className="card-body">
              <Card.Text>
                I built this app as part of a Web Development course with
                CareerFoundry. It really helped me to better understand React,
                Test Driven Development, serverless functions, and OAuth2
                authentication.
              </Card.Text>
              {showDetails ? (
                <>
                  <ul>
                    <li>
                      Developed a progressive web app (PWA) utilizing serverless
                      architecture and TDD approach
                    </li>
                    <li>
                      Implemented features such as offline support, push
                      notifications, and "add to home screen" prompt
                    </li>
                    <li>
                      Utilized data visualization techniques to display event
                      data in the form of charts and graphs
                    </li>
                    <li>
                      Incorporated serverless functions hosted by a cloud
                      provider for efficient scaling
                    </li>
                    <li>
                      Utilized TDD approach to ensure high-quality code and
                      adequate test coverage
                    </li>
                    <li>
                      Improved user experience and performance through
                      implementation of PWA features
                    </li>
                  </ul>

                  <Button
                    className="project-button"
                    href="https://nickbeasley.github.io/Meet_Up/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See it here!
                  </Button>
                  <Button
                    className="project-button"
                    href="https://github.com/nickbeasley/Meet_Up.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See the code here!
                  </Button>
                  <button onClick={hideDetails}>Hide details</button>
                </>
              ) : (
                <button onClick={toggleDetails}>Show details</button>
              )}
            </div>
          </Card>
        </Col>
        <Col>
          <Card className="grid__item">
            <Card.Title className="project-header">NixFlix (Server)</Card.Title>
            <Card.Img
              src={NixFlixServerPhoto}
              className="project-ss"
              alt="NixFlix Server"
            />
            <div className="card-body">
              <Card.Text>
                Server side code is A RESTful API coded from scratch using
                Node.js.
              </Card.Text>
              {showDetails ? (
                <>
                  <ul>
                    <li>
                      I built the server-side component of a "movies" web
                      application that provides users with access to information
                      about different movies, directors, and genres.
                    </li>
                    <li>
                      Users are able to sign up, update their personal
                      information, and create a list of their favorite movies.
                    </li>
                    <li>
                      The project demonstrates mastery of full-stack JavaScript
                      development, including APIs, web server frameworks,
                      databases, business logic, authentication, data security,
                      and more.
                    </li>
                    <li>
                      I implemented a REST API that interacts with a database
                      that stores data about different movies using the MERN
                      (MongoDB, Express, React, and Node.js) stack.
                    </li>
                    <li>
                      The application is hosted online and is responsive,
                      providing the same user experience on any device.
                    </li>
                    <li>
                      Movie enthusiasts have access to information about
                      different movies, directors, and genres and be able to
                      save data about their favorite movies.
                    </li>
                  </ul>
                  <Button
                    className="project-button"
                    href="https://github.com/nickbeasley/movie_api.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See the code here!
                  </Button>
                  <button onClick={hideDetails}>Hide details</button>
                </>
              ) : (
                <button onClick={toggleDetails}>Show details</button>
              )}
            </div>
          </Card>
        </Col>
        <Col>
          <Card className="grid__item">
            <Card.Title className="project-header">NixFlix!</Card.Title>
            <Card.Img
              src={NixFlixPhoto}
              className="project-ss"
              alt="nixflix app"
            />
            <div className="card-body">
              <Card.Text>
                A client-side frontend for a RESTful API, built with React.
              </Card.Text>
              {showDetails ? (
                <>
                  <ul>
                    <li>
                      I used React to build the client-side for an app called
                      NixFlix based on its existing server-side code (REST API
                      and database).
                    </li>
                    <li>
                      I created the interface for the NixFlix app that users can
                      use to make requests to and receive responses from the
                      server-side.
                    </li>
                    <li>
                      It considers the readability and maintenance of the
                      codebase, and the design and usability of the app.
                    </li>
                    <li>
                      A complete web app that demonstrates mastery of full-stack
                      JavaScript development using the MERN (MongoDB, Express,
                      React, and Node.js) stack.
                    </li>
                    <li>
                      The app will be hosted online, be responsive and can be
                      used anywhere and on any device, giving all users the same
                      experience.
                    </li>
                    <li>
                      Movie enthusiasts will have access to information about
                      different movies, be able to save a list of their favorite
                      movies and access it whenever they want to.
                    </li>
                  </ul>
                  <Button
                    className="project-button"
                    href="https://nixflix-client.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See it here!
                  </Button>
                  <br />
                  <Button
                    className="project-button"
                    href="https://github.com/nickbeasley/myFlix-client.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See the code here!
                  </Button>
                  <button onClick={hideDetails}>Hide details</button>
                </>
              ) : (
                <button onClick={toggleDetails}>Show details</button>
              )}
            </div>
          </Card>
        </Col>
        <Col>
          <Card className="grid__item">
            <Card.Title className="project-header">Chat App</Card.Title>
            <Card.Img
              src={ChatAppPhoto}
              className="project-ss-mobile"
              alt="chat app"
            />
            <div className="card-body">
              <Card.Text>
                A JavaScript chat app built with ReactNative, featuring advanced
                functionality such as offline storage or geolocation.
              </Card.Text>
              {showDetails ? (
                <>
                  <ul>
                    <li>
                      I built a chat app for mobile devices using React Native
                      that provides users with a chat interface and options to
                      share images and their location.
                    </li>
                    <li>
                      I used React Native, Expo, and Google Firestore Database
                      to build a chat app that can be added to a portfolio to
                      demonstrate knowledge of JavaScript mobile development.
                    </li>
                    <li>
                      The app is optimized for both Android and iOS devices and
                      can be used by other developers working on the product.
                    </li>
                    <li>
                      The app features a page where users can enter their name
                      and choose a background color for the chat screen before
                      joining the chat, a page displaying the conversation,
                      input field and submit button, and options to send images
                      and location data.
                    </li>
                    <li>
                      Data will be stored online and offline and the app will
                      authenticate users anonymously via Google Firebase
                      authentication.
                    </li>
                    <li>
                      The chat interface and functionality was created using the
                      Gifted Chat library and the app's codebase will contain
                      comments.
                    </li>
                  </ul>
                  <Button
                    className="project-button"
                    href="https://github.com/nickbeasley/Chat-App.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See the code here!
                  </Button>
                  <button onClick={hideDetails}>Hide details</button>
                </>
              ) : (
                <button onClick={toggleDetails}>Show details</button>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default ProjectView;
