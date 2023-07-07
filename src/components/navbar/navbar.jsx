import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Logo } from "../../images/nkblogoblue.svg";
import "./navbar.css";

function Menu() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleNavItemClick = () => {
    setExpanded(false);
  };

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
        onClick={() => setExpanded(!expanded)}
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav activeKey={location.pathname} className="ml-auto">
          <Nav.Link
            onClick={handleNavItemClick}
            to="/"
            as={Link}
            eventKey="/"
            className="navbar-item"
          >
            About
          </Nav.Link>
          <Nav.Link
            onClick={handleNavItemClick}
            to="/about"
            as={Link}
            eventKey="/about"
            className="navbar-item"
          >
            Tech Skills
          </Nav.Link>
          <Nav.Link
            onClick={handleNavItemClick}
            to="/projects"
            as={Link}
            eventKey="/projects"
            className="navbar-item"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            onClick={handleNavItemClick}
            to="/certifications"
            as={Link}
            eventKey="/certifications"
            className="navbar-item"
          >
            Certifications
          </Nav.Link>
          <Nav.Link
            onClick={handleNavItemClick}
            to="/contact"
            as={Link}
            eventKey="/contact"
            className="navbar-item"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
