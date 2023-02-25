import "./App.css";
import MainView from "./components/main-view/main-view";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container className="app-container">
      <MainView />
    </Container>
  );
}

export default App;
