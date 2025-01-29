import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Contact.scss";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6"; // Use fa6 for FontAwesome 6

function Contact() {
  return (
    <section id="contact" className="contact">
      <Container className="text-center mt-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="social-icons">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="mailto:your.email@example.com">
                <FaEnvelope className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
