import { FC, memo, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Bio.scss";
import { Container, Row, Col } from "react-bootstrap";
import LoadingSkeleton from "../components/LoadingSkeleton";

const Bio: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    // Intersection observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const bioSection = document.getElementById("bio");
    if (bioSection) {
      observer.observe(bioSection);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  if (!isLoaded) {
    return (
      <section id="bio" className="bio">
        <Container className="text-center mt-4">
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <LoadingSkeleton variant="text" count={2} />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section id="bio" className={`bio ${isVisible ? "animate-in" : ""}`}>
      <Container className="text-center mt-4">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <p className="bio-text">
              As a Computer Science graduate specialising in Software
              Engineering and Data Science, I focus on designing scalable
              algorithms, developing machine learning models, and optimising
              computational processes. My work involves using statistical
              modelling and AI techniques to solve complex problems across
              various domains.
              <br />
              <br />
              Passionate about innovation in artificial intelligence and
              data-driven decision-making, I am actively working on projects
              related to predictive analytics, deep learning, and
              high-performance computing. My goal is to contribute to
              cutting-edge research and industry applications that push the
              boundaries of AI and software development.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default memo(Bio);
