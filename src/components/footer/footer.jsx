import { Container, Row, Col } from "react-bootstrap";
import linkedinlogo from "../../images/linkedinlogo.png";
import githublogo from "../../images/githublogo.png";
import twitterlogo from "../../images/twitterlogo.png";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="justify-content-center footer">
        {/* <h3 className="foot-head">Connect with me on</h3> */}
        <Col xs="auto" className="text-center">
          <a
            href="https://www.linkedin.com/in/nicholas-beasley-4a8768ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinlogo} alt="LinkedIn" height={30} />
          </a>
        </Col>
        <Col xs="auto" className="text-center">
          <a
            href="https://github.com/nickbeasley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githublogo} alt="GitHub" height={30} />
          </a>
        </Col>
        <Col xs="auto" className="text-center">
          <a
            href="https://twitter.com/NickBeasley812"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterlogo} alt="Twitter" height={30} />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
