import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Hero.scss";
import { Container, Row, Col, Image } from "react-bootstrap";

function Hero() {
  return (
    <section id="home" className="hero d-flex align-items-center justify-content-center">
      <Container className="text-center position-relative">
        <Row className="justify-content-center">
          <Col md={4} className="position-relative">
            <Image
              src="/src/assets/placeholder-profile.jpeg"
              alt="Profile"
              className="profile-image"
            />
            <p className="hero-text top-left">Data Science</p>
            <p className="hero-text top-right">Machine Learning</p>
            <p className="hero-text bottom-right">Software Development</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;