import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Import images properly
import financeImg from "../assets/placeholder-finance.jpg";
import cryptoImg from "../assets/placeholder-crypto.jpg";

function Projects() {
  return (
    <section id="projects" className="projects py-5">
      <Container>
        <h2 className="text-center work-heading display-4 fw-bold mb-5">Work</h2>
        {/* Added g-5 for more spacing between cards */}
        <Row className="justify-content-center g-5"> 
          {/* Project 1 */}
          <Col md={6} lg={5} className="d-flex">
            <Card className="project-card border-0 no-rounded flex-fill">
              <Card.Img variant="top" src={financeImg} alt="Financial Index Tracking" className="card-img-top no-rounded" />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">Optimization Techniques for Financial Index Tracking</Card.Title>
                <Card.Text>
                  A machine learning model that constructs sparse portfolios to closely track the performance of an index.
                  This research-based project explores optimization techniques for financial markets.
                </Card.Text>
                <div className="button-group">
                  <Button variant="primary" href="#" target="_blank" className="no-rounded">Read Paper</Button>
                  <Button variant="outline-secondary" href="#" target="_blank" className="no-rounded">GitHub</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Project 2 */}
          <Col md={6} lg={5} className="d-flex">
            <Card className="project-card border-0 no-rounded flex-fill">
              <Card.Img variant="top" src={cryptoImg} alt="Cryptocurrency Platform" className="card-img-top no-rounded" />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">Advanced Cryptocurrency Trading Platform</Card.Title>
                <Card.Text>
                  A React-based cryptocurrency platform that integrates real-time APIs to display live market data.
                  Features include user authentication, portfolio tracking, and a robust payment system.
                </Card.Text>
                <div className="button-group">
                  <Button variant="primary" href="#" target="_blank" className="no-rounded">Explore Platform</Button>
                  <Button variant="outline-secondary" href="#" target="_blank" className="no-rounded">GitHub</Button>
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
