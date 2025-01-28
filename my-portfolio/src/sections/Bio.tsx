import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.scss";
import { Container, Row, Col } from "react-bootstrap";

function Bio() {
  return (
    <>
      <section id="about" className="about">
        <Container className="text-center mt-4">
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <p className="about-text">
                As a Computer Science graduate specializing in Software Engineering and Data Science,
                I focus on designing scalable algorithms, developing machine learning models, and 
                optimizing computational processes. My work involves leveraging statistical modeling 
                and AI techniques to solve complex problems across various domains.
                <br></br><br></br>
                Passionate about innovation in artificial intelligence and data-driven decision-making,
                I am actively working on projects related to predictive analytics, deep learning, and 
                high-performance computing. My goal is to contribute to cutting-edge research and 
                industry applications that push the boundaries of AI and software development.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Bio;
