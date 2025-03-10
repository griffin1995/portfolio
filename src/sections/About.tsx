import {  FC, memo  } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.scss";
import { Container, Row, Col } from "react-bootstrap";

const About: FC = () => (
  <section id="about" className="about">
    <Container fluid className="text-center py-5">
      <h1 className="about-heading">Harness the Power of Data</h1>
    </Container>
    <Container id="about-text" className="text-center mt-5 mb-5">
      <Row className="justify-content-center">
        <Col md={8} lg={3}>
          <p className="about-text">
            I'm a Machine Learning and Data Science enthusiast dedicated to
            transforming raw data into actionable insights. With expertise in
            AI, deep learning, and predictive modeling, I strive to build
            intelligent systems that drive innovation and efficiency.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default memo(About);
