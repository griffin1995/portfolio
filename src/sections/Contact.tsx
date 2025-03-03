import {  FC, memo  } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Contact.scss";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const Contact: FC = () => (
  <section id="contact" className="contact">
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="social-icons">
            <a
              href="https://github.com/griffin1995"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/jackgriffindev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a href="mailto:jtgriffin95@gmail.com" aria-label="Email">
              <FaEnvelope className="social-icon" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default memo(Contact);
