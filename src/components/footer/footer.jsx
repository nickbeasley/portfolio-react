import { Container, Row, Col } from "react-bootstrap";
import { socialLogos } from "../logos/logos";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="justify-content-center footer">
        <Col xs="auto" className="text-center">
          <a
            href="https://www.linkedin.com/in/nicholas-beasley-4a8768ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={socialLogos[0].logo} alt="LinkedIn" height={30} />
          </a>
        </Col>
        <Col xs="auto" className="text-center">
          <a
            href="https://github.com/nickbeasley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={socialLogos[1].logo} alt="GitHub" height={30} />
          </a>
        </Col>
        <Col xs="auto" className="text-center">
          <a
            href="https://twitter.com/NickBeasley812"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={socialLogos[2].logo} alt="Twitter" height={30} />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
