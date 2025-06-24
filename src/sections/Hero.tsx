import { FC, memo, useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Hero.scss";
import { Container, Row, Col } from "react-bootstrap";
import LoadingSkeleton from "../components/LoadingSkeleton";
import profileImg from "../assets/placeholder-profile.jpeg";

const Hero: FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Machine Learning Engineer",
    "Data Science Professional", 
    "AI Systems Developer",
    "Full-Stack Engineer"
  ];

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageLoaded(true);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="hero">
      <Container fluid className="hero-container">
        <Row className="h-100 align-items-center">
          {/* Left Column - Content */}
          <Col lg={7} className="hero-left">
            <div className="hero-content-wrapper">
              <div className="hero-badge">
                <span className="hero-status-dot"></span>
                Available for opportunities
              </div>
              
              <h1 className="hero-title">
                <span className="hero-greeting">Hello, I'm</span>
                <span className="hero-name">Jack Griffin</span>
              </h1>

              <div className="hero-role-container">
                <span className="hero-role-prefix">I'm a </span>
                <span className="hero-role-dynamic">
                  {roles[currentRole]}
                </span>
              </div>

              <p className="hero-description">
                Transforming complex data into intelligent solutions through advanced machine learning, 
                deep learning, and full-stack development. I specialise in building production-ready 
                AI systems that drive real business value.
              </p>

              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">17K+</span>
                  <span className="stat-label">Data Points Analysed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Technologies Mastered</span>
                </div>
              </div>

              <div className="hero-cta">
                <button 
                  className="cta-primary"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </button>
                <button 
                  className="cta-secondary"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </button>
              </div>

              <div className="hero-tech-stack">
                <div className="tech-items">
                  <span className="tech-item">Python</span>
                  <span className="tech-item">TypeScript</span>
                  <span className="tech-item">React</span>
                  <span className="tech-item">PyTorch</span>
                  <span className="tech-item">PostgreSQL</span>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Column - Visual */}
          <Col lg={5} className="hero-right">
            <div className="hero-visual-container">
              {!imageLoaded && (
                <div className="hero-skeleton">
                  <LoadingSkeleton variant="hero" count={1} />
                </div>
              )}

              <div className="hero-image-wrapper">
                <div className="hero-image-backdrop"></div>
                <img
                  src={profileImg}
                  alt="Jack Griffin - Machine Learning and Data Science Professional"
                  className={`hero-profile-image ${imageLoaded ? "loaded" : "loading"}`}
                  loading="eager"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  style={{ display: imageLoaded ? "block" : "none" }}
                />
                
                {/* Floating elements */}
                <div className="floating-element element-1">
                  <div className="element-content">
                    <span className="element-title">AI</span>
                    <span className="element-subtitle">Neural Networks</span>
                  </div>
                </div>
                
                <div className="floating-element element-2">
                  <div className="element-content">
                    <span className="element-title">ML</span>
                    <span className="element-subtitle">Algorithms</span>
                  </div>
                </div>
                
                <div className="floating-element element-3">
                  <div className="element-content">
                    <span className="element-title">Data</span>
                    <span className="element-subtitle">Analytics</span>
                  </div>
                </div>

                {/* Animated geometric shapes */}
                <div className="geometric-shape shape-1"></div>
                <div className="geometric-shape shape-2"></div>
                <div className="geometric-shape shape-3"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default memo(Hero);
