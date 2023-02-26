import "./App.css";
import MainView from "./components/main-view/main-view";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./images/bg1.svg";

function App() {
  return (
    <Container
      className="app-container"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <MainView />
    </Container>
  );
}

export default App;
