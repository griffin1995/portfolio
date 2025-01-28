import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  return (
    <section id="projects" className="projects py-5">
      <Container>
        <h2 className="text-center work-heading display-4 fw-bold mb-5">Work</h2>
        <Row className="justify-content-center">
          {/* Project 1 & Project 2 Side by Side */}
          <Col md={6} lg={5} className="mb-4 d-flex">
            <Card className="project-card border-0 no-rounded flex-fill">
              <Card.Img variant="top" src="/src/assets/placeholder-finance.jpg" alt="Financial Index Tracking" className="no-rounded" />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">Optimization Techniques for Financial Index Tracking</Card.Title>
                <Card.Text className="flex-grow-1">
                  A machine learning model that constructs sparse portfolios to closely track the performance of an index.
                  This research-based project explores optimization techniques for financial markets.
                </Card.Text>
                <div>
                  <Button variant="primary" href="#" target="_blank" className="no-rounded">Read Paper</Button>
                  <Button variant="outline-secondary" href="#" target="_blank" className="ms-2 no-rounded">GitHub</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6} lg={5} className="d-flex">
            <Card className="project-card border-0 no-rounded flex-fill">
              <Card.Img variant="top" src="/src/assets/placeholder-crypto.jpg" alt="Cryptocurrency Platform" className="no-rounded" />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">Advanced Cryptocurrency Trading Platform</Card.Title>
                <Card.Text className="flex-grow-1">
                  A React-based cryptocurrency platform that integrates real-time APIs to display live market data.
                  Features include user authentication, portfolio tracking, and a robust payment system.
                </Card.Text>
                <div>
                  <Button variant="primary" href="#" target="_blank" className="no-rounded">Explore Platform</Button>
                  <Button variant="outline-secondary" href="#" target="_blank" className="ms-2 no-rounded">GitHub</Button>
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