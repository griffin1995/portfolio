import React, { FC, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import griffinLogo from "../assets/griffin.png";

const Navigation: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const handleScroll = () => {
      if (animationFrameId !== null) return;
      animationFrameId = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        animationFrameId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container className="d-flex align-items-center justify-content-between">
        {/* Left Navigation Links */}
        <Nav className="d-flex align-items-center gap-4">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about-text">About</Nav.Link>
        </Nav>

        {/* Center Logo with Text */}
        <Navbar.Brand
          href="#home"
          className="d-flex flex-column align-items-center text-center mx-5"
        >
          <img src={griffinLogo} alt="Griffin Logo" className="navbar-logo" />
          <span className="navbar-text">Jack Griffin</span>
        </Navbar.Brand>

        {/* Right Navigation Links */}
        <Nav className="d-flex align-items-center gap-4">
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#bio">Bio</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
