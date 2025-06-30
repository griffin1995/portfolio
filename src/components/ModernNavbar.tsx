import { FC, useEffect, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import griffinLogo from "../assets/griffin_light.png";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const ModernNavbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { scrollToElement, scrollToTop } = useSmoothScroll();

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

  const handleNavClick = useCallback((targetId: string, event: React.MouseEvent) => {
    event.preventDefault();
    setExpanded(false);
    
    if (targetId === '#home') {
      scrollToTop();
    } else {
      scrollToElement(targetId);
    }
  }, [scrollToElement, scrollToTop]);

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
            onClick={(e) => handleNavClick('#home', e)}
            aria-label="Jack Griffin - Home"
          >
            <img
              src={griffinLogo}
              alt="Jack Griffin logo"
              className="navbar-logo-mobile"
              loading="eager"
              width="32"
              height="32"
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
            <Nav.Link 
              href="#home" 
              onClick={(e) => handleNavClick('#home', e)} 
              aria-label="Navigate to Home section"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#about-text" 
              onClick={(e) => handleNavClick('#about-text', e)} 
              aria-label="Navigate to About section"
            >
              About
            </Nav.Link>
          </Nav>

          {/* Center Logo with Text */}
          <div className="navbar-center">
            <Navbar.Brand
              href="#home"
              className="center-brand"
              onClick={(e) => handleNavClick('#home', e)}
              aria-label="Jack Griffin - Home"
            >
              <img
                src={griffinLogo}
                alt="Jack Griffin logo"
                className="navbar-logo"
                loading="eager"
                width="40"
                height="40"
              />
              <span className="navbar-text">Jack Griffin</span>
            </Navbar.Brand>
          </div>

          {/* Right Navigation Links */}
          <Nav className="navbar-nav-right">
            <Nav.Link 
              href="#projects" 
              onClick={(e) => handleNavClick('#projects', e)} 
              aria-label="Navigate to Projects section"
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              href="#bio" 
              onClick={(e) => handleNavClick('#bio', e)} 
              aria-label="Navigate to Bio section"
            >
              Bio
            </Nav.Link>
          </Nav>
        </div>

        {/* Mobile Collapsible Navigation */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mobile-nav d-lg-none">
            <Nav.Link 
              href="#home" 
              onClick={(e) => handleNavClick('#home', e)} 
              aria-label="Navigate to Home section"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#about-text" 
              onClick={(e) => handleNavClick('#about-text', e)} 
              aria-label="Navigate to About section"
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="#projects" 
              onClick={(e) => handleNavClick('#projects', e)} 
              aria-label="Navigate to Projects section"
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              href="#bio" 
              onClick={(e) => handleNavClick('#bio', e)} 
              aria-label="Navigate to Bio section"
            >
              Bio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ModernNavbar;