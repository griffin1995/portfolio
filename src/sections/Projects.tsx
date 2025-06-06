import { useRef, FC, Suspense, lazy, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.scss";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Project } from "../types";
import ResponsiveImage from "../components/ResponsiveImage";

// Lazy load Framer Motion only when needed
const FramerMotionComponents = lazy(
  () => import("../components/FramerMotionComponents")
);

// Import images
import financeImg from "../assets/placeholder-finance.jpg";
import cryptoImg from "../assets/placeholder-crypto.jpg";
import portfolioImg from "../assets/placeholder-profile.jpeg"; // Using profile image for portfolio

const projectsData: Project[] = [
  {
    title: "Robust Sparse Index Tracking under Multiple Risk Formulations",
    description:
      "Designed a machine learning system for sparse financial index tracking using Empirical (ETE), Downside Risk (DR), and their Huber-robust variants (HETE, HDR). Included cardinality constraints, parameter sensitivity analysis, and regime-aware backtesting across 152 rolling windows. Achieved consistent benchmark outperformance with portfolios of just 10 assets. Implemented advanced Majorisation-Minimisation and SQUAREM acceleration techniques to solve the non-convex optimisation problem efficiently.",    image: financeImg,
    alt: "Sparse Index Tracking Visualisation",
    techStack:
      "Python, NumPy, SciPy, Pandas, Matplotlib, Seaborn, Jupyter, JSON, Custom Solvers",
    concepts:
      "Sparse Optimisation, Tracking Error Minimisation, Robust Statistics, Majorisation Minimisation, SQUAREM Acceleration, Market Regime Analysis",
    buttons: [{ label: "Request Access", link: "request-access" }],
  },
  {
    title: "Full-Stack Cryptocurrency Trading Platform",
    description:
      "Built a comprehensive full-stack cryptocurrency trading platform featuring real-time price tracking via WebSockets, interactive charting with technical indicators, and PostgreSQL-backed logging. Implemented user authentication, portfolio management, and artificial persistent trade history. The platform features real-time market data feeds, and responsive design optimised for both desktop and mobile trading experiences.",
    image: cryptoImg,
    alt: "Cryptocurrency Trading Platform Interface",
    techStack:
      "React, Node.js, Express.js, PostgreSQL, WebSockets, Chart.js, JWT Authentication, REST APIs, Docker",
    concepts:
      "Real-Time Analytics, WebSocket Architecture, Microservices Design, Trade Execution Algorithms, Portfolio Optimisation, Risk Management, Database Design",
    buttons: [
      { label: "Explore Platform", link: "https://cryptocurrencyplatform.jackgriffin.dev/"},
      {
        label: "GitHub",
        link: "https://github.com/griffin1995/cryptocurrencyPlatform",
      },
    ],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, high-performance portfolio website built with React and TypeScript, featuring advanced Framer Motion animations, intelligent lazy loading with code splitting, and accessibility compliance. Implements responsive image optimisation, skeleton loading states, and scroll-based animations. Built with Vite for optimal development experience and production performance, featuring SEO optimisation with structured data, Open Graph meta tags, and progressive enhancement patterns.",
    image: portfolioImg,
    alt: "Portfolio Website Interface",
    techStack:
      "React, TypeScript, SCSS, Framer Motion, Vite, Bootstrap, React Router, Intersection Observer API, Web Vitals",
    concepts:
      "Code Splitting, Performance Optimisation, Accessibility, SEO Enhancement, Progressive Enhancement, Responsive Design, Animation Systems",
    buttons: [
      { label: "GitHub", link: "https://github.com/griffin1995/portfolio/" },
    ],
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleButtonClick = (button: { label: string; link: string }) => {
    if (button.link === "request-access") {
      setShowEmailForm(!showEmailForm);
      setSubmitMessage(""); // Clear any previous messages
    } else {
      // External link
      window.open(button.link, "_blank", "noopener,noreferrer");
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setSubmitMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For now, just show success message
      setSubmitMessage(
        "Thank you! Your access request has been submitted. You'll hear from us soon."
      );
      setEmail("");
      setShowEmailForm(false);

      // TODO: Replace with actual API call
      console.log(
        "Access request submitted for:",
        email,
        "Project:",
        project.title
      );
    } catch (error) {
      setSubmitMessage(
        "Sorry, there was an error submitting your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Col md={6} lg={4} className="mb-4">
      <Card className="project-card h-100">
        <ResponsiveImage
          src={project.image}
          alt={project.alt}
          className="card-img-top"
          loading="lazy"
          sizes={{
            mobile: project.image,
            tablet: project.image,
            desktop: project.image,
          }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{project.title}</Card.Title>
          <Card.Text className="flex-grow-1">{project.description}</Card.Text>
          <div className="mt-auto">
            <span className="small-text d-block mb-3">
              <strong>Tech Stack:</strong> {project.techStack} <br />
              <strong>Concepts:</strong> {project.concepts}
            </span>

            <div className="button-group">
              {project.buttons.map((button, index) => (
                <Button
                  key={button.label}
                  variant={index === 0 ? "primary" : "outline-secondary"}
                  onClick={() => handleButtonClick(button)}
                  aria-label={`${button.label} for ${project.title}`}
                  disabled={isSubmitting}
                >
                  {button.label}
                </Button>
              ))}
            </div>

            {/* Email Request Form */}
            {showEmailForm && (
              <div className="email-request-form">
                <Form onSubmit={handleEmailSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      id={`email-${project.title}`}
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="email-input"
                    />
                  </Form.Group>
                  <div className="form-buttons">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </div>
                </Form>
              </div>
            )}

            {/* Submit Message */}
            {submitMessage && (
              <div
                className={`submit-message mt-2 ${
                  submitMessage.includes("Thank you") ? "success" : "error"
                }`}
              >
                {submitMessage}
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Projects: FC = () => {
  const projectsRef = useRef<HTMLElement>(null);

  return (
    <section id="projects" className="projects py-5" ref={projectsRef}>
      <Suspense fallback={<div className="work-heading-placeholder" />}>
        <FramerMotionComponents projectsRef={projectsRef} />
      </Suspense>

      <Container>
        <Row className="justify-content-center g-5">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
