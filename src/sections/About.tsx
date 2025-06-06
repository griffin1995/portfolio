import { FC, memo, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.scss";
import { Container, Row, Col } from "react-bootstrap";
import LoadingSkeleton from "../components/LoadingSkeleton";

const About: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Intersection observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  if (!isLoaded) {
    return (
      <section id="about" className="about">
        <Container fluid className="text-center py-5">
          <div className="about-heading-skeleton">
            <LoadingSkeleton variant="text" count={1} />
          </div>
        </Container>
        <Container id="about-text" className="text-center mt-5 mb-5">
          <Row className="justify-content-center">
            <Col md={8} lg={3}>
              <LoadingSkeleton variant="text" count={1} />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section id="about" className={`about ${isVisible ? "animate-in" : ""}`}>
      <Container fluid className="text-center py-5">
        <h1 className="about-heading">Harness the Power of Data</h1>
      </Container>
      <Container id="about-text" className="text-center mt-5 mb-5">
        <Row className="justify-content-center">
          <Col md={8} lg={3}>
            <p className="about-text">
              I'm a Machine Learning and Data Science enthusiast dedicated to
              transforming raw data into actionable insights. With expertise in
              AI, deep learning, and predictive modelling, I strive to build
              intelligent systems that drive innovation and efficiency.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default memo(About);
