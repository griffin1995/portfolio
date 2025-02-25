import { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Import images
import financeImg from "../assets/placeholder-finance.jpg";
import cryptoImg from "../assets/placeholder-crypto.jpg";

function Projects({ heroRef }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && projectsRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const projectsRect = projectsRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const start = heroRect.bottom - windowHeight;
        const end = projectsRect.bottom;

        const progress = Math.min(
          Math.max((windowHeight - heroRect.bottom) / (end - start), 0),
          1
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroRef]);

  return (
    <section id="projects" className="projects py-5" ref={projectsRef}>
      <h2
        className="work-heading"
        style={{
          top: `${100 - scrollProgress * 80}vh`,
          opacity: scrollProgress,
        }}
      >
        Work
      </h2>

      <Container>
        <Row className="justify-content-center g-5">
          {/* Project 1 */}
          <Col md={6} lg={5}>
            <Card className="project-card">
              <Card.Img variant="top" src={financeImg} alt="Financial Optimization" />
              <Card.Body>
                <Card.Title>Machine Learning for Financial Portfolio Optimization</Card.Title>
                <Card.Text>
                  An AI-driven system optimizing financial portfolios using LASSO regression,
                  Markowitz’s Portfolio Theory, and deep learning for predictive trading strategies.
                </Card.Text>
                <span className="small-text">
                  <strong>Tech Stack:</strong> Python, Scikit-Learn, TensorFlow, Flask, PostgreSQL
                </span>
                <div className="button-group">
                  <Button variant="primary" href="#">Read Paper</Button>
                  <Button variant="outline-secondary" href="#">GitHub</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Project 2 */}
          <Col md={6} lg={5}>
            <Card className="project-card">
              <Card.Img variant="top" src={cryptoImg} alt="Crypto Trading Platform" />
              <Card.Body>
                <Card.Title>Full-Stack Cryptocurrency Trading Platform</Card.Title>
                <Card.Text>
                  A full-stack crypto trading platform featuring real-time analytics, AI-driven strategies,
                  and WebSockets for live price tracking.
                </Card.Text>
                <span className="small-text">
                  <strong>Tech Stack:</strong> React, Node.js, PostgreSQL, WebSockets, Firebase, TensorFlow
                </span>
                <div className="button-group">
                  <Button variant="primary" href="#">Explore Platform</Button>
                  <Button variant="outline-secondary" href="#">GitHub</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
