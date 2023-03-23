import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Logo } from "../../images/nkblogoblue.svg";
import "./navbar.css";

function Menu(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      className="navbar main-nav navbar-collapse"
      sticky="top"
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand>
        <Logo className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        onClick={() => setExpanded(expanded ? false : "expanded")}
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="resposive-navbar-nav">
        <Nav className="ml-auto">
          <Navbar.Brand className="navbar-item">
            <Nav.Link
              onClick={() => {
                setExpanded(false);
              }}
              to="/"
              as={Link}
            >
              About
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Brand className="navbar-item">
            <Nav.Link
              onClick={() => {
                setExpanded(false);
              }}
              to="/about"
              as={Link}
            >
              Tech Skills
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Brand className="navbar-item">
            <Nav.Link
              onClick={() => {
                setExpanded(false);
              }}
              to="/projects"
              as={Link}
            >
              Projects
            </Nav.Link>
          </Navbar.Brand>

          <Navbar.Brand className="navbar-item">
            <Nav.Link
              onClick={() => {
                setExpanded(false);
              }}
              to="/contact"
              as={Link}
            >
              Contact
            </Nav.Link>
          </Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
