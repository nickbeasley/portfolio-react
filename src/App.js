import "./App.css";
import MainView from "./components/main-view/main-view";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./images/bg1.svg";

function App() {
  return (
    <Container className="app-container">
      <div
        id="background-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <MainView />
    </Container>
  );
}

export default App;
