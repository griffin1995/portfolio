import { FC, useEffect, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import griffinLogo from "../assets/griffin_light.png";

const Navigation: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 50;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const throttledHandleScroll = () => {
      if (animationFrameId !== null) return;
      animationFrameId = window.requestAnimationFrame(() => {
        handleScroll();
        animationFrameId = null;
      });
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [handleScroll]);

  const handleNavClick = useCallback(() => {
    setExpanded(false);
  }, []);

  const handleToggle = useCallback((expanded: boolean) => {
    setExpanded(expanded);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={handleToggle}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <Container>
        {/* Mobile: Centered name with logo and hamburger on sides */}
        <div className="d-lg-none w-100 d-flex justify-content-between align-items-center position-relative">
          {/* Left: Logo */}
          <Navbar.Brand
            href="#home"
            className="mobile-logo-only"
            onClick={handleNavClick}
            aria-label="Jack Griffin - Home"
          >
            <img
              src={griffinLogo}
              alt=""
              className="navbar-logo-mobile"
              loading="eager"
            />
          </Navbar.Brand>

          {/* Center: Name */}
          <div className="mobile-name-center">
            <span className="navbar-text-mobile">Jack Griffin</span>
          </div>

          {/* Right: Hamburger toggle */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            aria-label="Toggle navigation menu"
          />
        </div>

        {/* Desktop Layout */}
        <div className="d-none d-lg-flex w-100 align-items-center">
          {/* Left Navigation Links */}
          <Nav className="navbar-nav-left">
            <Nav.Link href="#home" onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link href="#about-text" onClick={handleNavClick}>
              About
            </Nav.Link>
          </Nav>

          {/* Center Logo with Text */}
          <div className="navbar-center">
            <Navbar.Brand
              href="#home"
              className="center-brand"
              onClick={handleNavClick}
              aria-label="Jack Griffin - Home"
            >
              <img
                src={griffinLogo}
                alt=""
                className="navbar-logo"
                loading="eager"
              />
              <span className="navbar-text">Jack Griffin</span>
            </Navbar.Brand>
          </div>

          {/* Right Navigation Links */}
          <Nav className="navbar-nav-right">
            <Nav.Link href="#projects" onClick={handleNavClick}>
              Projects
            </Nav.Link>
            <Nav.Link href="#bio" onClick={handleNavClick}>
              Bio
            </Nav.Link>
          </Nav>
        </div>

        {/* Mobile Collapsible Navigation */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mobile-nav d-lg-none">
            <Nav.Link href="#home" onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link href="#about-text" onClick={handleNavClick}>
              About
            </Nav.Link>
            <Nav.Link href="#projects" onClick={handleNavClick}>
              Projects
            </Nav.Link>
            <Nav.Link href="#bio" onClick={handleNavClick}>
              Bio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
