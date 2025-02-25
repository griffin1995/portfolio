import React, { FC, memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Hero.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import profileImg from "../assets/placeholder-profile.jpeg";

const Hero: FC = () => (
  <section id="home" className="hero d-flex align-items-center justify-content-center">
    <Container className="text-center position-relative">
      <Row className="justify-content-center">
        <Col md={5} className="position-relative">
          <Image
            src={profileImg}
            alt="Profile"
            className="profile-image"
            loading="lazy"
          />
          <p className="hero-text top-left">Data Science</p>
          <p className="hero-text top-right">Machine Learning</p>
          <p className="hero-text bottom-right">Software Development</p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default memo(Hero);
