import { FC, memo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Hero.scss";
import { Container, Row, Col } from "react-bootstrap";
import LoadingSkeleton from "../components/LoadingSkeleton";
import profileImg from "../assets/placeholder-profile.jpeg";

const Hero: FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(true); // Still hide skeleton even on error
  };

  return (
    <section
      id="home"
      className="hero d-flex align-items-center justify-content-center"
    >
      <Container className="text-center position-relative">
        <Row className="justify-content-center">
          <Col
            xs={12}
            sm={10}
            md={8}
            lg={5}
            className="position-relative hero-content"
          >
            {!imageLoaded && (
              <div className="hero-skeleton">
                <LoadingSkeleton variant="hero" count={1} />
              </div>
            )}

            <img
              src={profileImg}
              alt="Jack Griffin - Machine Learning and Data Science professional"
              className={`profile-image ${imageLoaded ? "loaded" : "loading"}`}
              loading="eager" // Hero image should load immediately
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ display: imageLoaded ? "block" : "none" }}
            />

            {/* Desktop and tablet positioning */}
            <div className="d-none d-sm-block">
              <p className="hero-text top-left">Data Science</p>
              <p className="hero-text top-right">Machine Learning</p>
              <p className="hero-text bottom-right">Software Development</p>
            </div>

            {/* Mobile: Stack text below image */}
            <div className="d-sm-none mobile-text-container">
              <p className="hero-text-mobile">Data Science</p>
              <p className="hero-text-mobile">Machine Learning</p>
              <p className="hero-text-mobile">Software Development</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default memo(Hero);
