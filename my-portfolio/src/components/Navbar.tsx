import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import griffinLogo from "../assets/griffin.png";

function Navigation() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Container className="d-flex align-items-center justify-content-between">
        {/* Left Nav Links */}
        <Nav className="d-flex align-items-center gap-4">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about-text">About</Nav.Link>
        </Nav>

        {/* Center Logo with Text */}
        <Navbar.Brand href="#home" className="d-flex flex-column align-items-center text-center mx-5">
          <img src={griffinLogo} alt="Griffin Logo" className="navbar-logo" />
          <span className="navbar-text">Griffin</span>
        </Navbar.Brand>

        {/* Right Nav Links */}
        <Nav className="d-flex align-items-center gap-4">
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#bio">Bio</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
