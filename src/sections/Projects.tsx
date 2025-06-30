import { useRef, FC, Suspense, lazy, useState, memo, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.scss";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Project } from "../types";

// Lazy load Framer Motion only when needed
const FramerMotionComponents = lazy(
  () => import("../components/FramerMotionComponents")
);

const projectsData: Project[] = [
  {
    title: "Sparse Portfolio Optimisation Research",
    description:
      "Quantitative finance research implementing LASSO regression and Mixed Integer Quadratic Programming for portfolio tracking optimisation. Analysed 17,737 days of market data using Huber loss optimisation for outlier robustness. Developed novel two-step approaches that reduce transaction costs whilst maintaining performance, integrating machine learning with financial mathematics.",
    alt: "Financial Portfolio Optimisation Research",
    techStack:
      "Python, NumPy, SciPy, Pandas, Scikit-learn, Matplotlib, Seaborn, LASSO Regression, Mixed Integer Programming",
    concepts:
      "Quantitative Finance, Sparse Optimisation, Machine Learning, Financial Mathematics, Risk Management, Algorithmic Trading, Statistical Modelling",
    buttons: [
      { 
        label: "GitHub", 
        link: "https://github.com/griffin1995/sparse_portfolio_optimisation" 
      },
      { 
        label: "Request Access", 
        link: "request-access" 
      }
    ],
  },
  {
    title: "Cryptocurrency Trading Platform",
    description:
      "Full-stack MERN application with real-time cryptocurrency trading and market analytics. Features JWT authentication, custom React hooks, live price feeds, and interactive Chart.js visualisations. Includes wallet management, transaction history, and admin dashboard with RESTful API architecture and responsive design for seamless trading experiences.",
    alt: "Cryptocurrency Trading Platform Interface",
    techStack:
      "React, Node.js, Express.js, MongoDB, JWT Authentication, Chart.js, SCSS, RESTful APIs, Custom React Hooks",
    concepts:
      "Real-Time Trading, Financial Data Visualisation, RESTful Architecture, State Management, Authentication Systems, Database Design, Responsive Design",
    buttons: [
      {
        label: "Explore Platform",
        link: "https://cryptocurrencyplatform.jackgriffin.dev/",
      },
      {
        label: "GitHub",
        link: "https://github.com/griffin1995/cryptocurrencyPlatform",
      },
    ],
  },
  {
    title: "GiftSync - AI Gift Recommendation Engine",
    description:
      "AI-powered gift discovery platform using swipe-based interaction and PyTorch Neural Matrix Factorisation for personalised recommendations. Features confidence scoring, real-time preference processing, and maintains gift surprise elements. Built with Next.js 14, FastAPI, comprehensive authentication, GDPR compliance, and Amazon Associates integration.",
    alt: "GiftSync AI Gift Platform Interface",
    techStack:
      "Next.js 14, React 18, TypeScript, FastAPI, Python, PyTorch, Supabase PostgreSQL, Tailwind CSS, PostHog Analytics, Amazon Associates API",
    concepts:
      "Artificial Intelligence, Machine Learning, Neural Networks, Recommendation Systems, Real-Time Analytics, E-commerce Integration, GDPR Compliance, Business Intelligence",
    buttons: [
      {
        label: "Explore Platform",
        link: "https://giftsync.jackgriffin.dev/",
      },
      {
        label: "GitHub",
        link: "https://github.com/griffin1995/gift_sync",
      },
    ],
  },
  {
    title: "Modern Portfolio Website",
    description:
      "High-performance React portfolio with intelligent lazy loading, custom smooth scrolling, and WCAG 2.1 AA accessibility compliance. Features PWA capabilities, advanced Vite optimisation, SEO enhancement, and modern development practices with enterprise-grade security headers and error boundaries.",
    alt: "Modern Portfolio Website Interface",
    techStack:
      "React 18, TypeScript, Vite, SCSS, Framer Motion, PWA, Intersection Observer API, Service Workers, Web Vitals, Bootstrap",
    concepts:
      "Performance Engineering, Progressive Web Apps, Modern Web Standards, Accessibility, SEO Optimisation, Build Optimisation, Security Implementation",
    buttons: [
      { label: "GitHub", link: "https://github.com/griffin1995/portfolio/" },
    ],
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = memo(({ project }) => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleButtonClick = useCallback((button: { label: string; link: string; download?: boolean }) => {
    if (button.link === "request-access") {
      setShowEmailForm(prev => !prev);
      setSubmitMessage("");
    } else if (button.download) {
      // Handle file download
      const link = document.createElement('a');
      link.href = button.link;
      link.download = button.link.split('/').pop() || 'download';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // External link with modern approach
      const link = document.createElement('a');
      link.href = button.link;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
    }
  }, []);

  const handleEmailSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setSubmitMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Simulate API call with AbortController for better UX
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      await new Promise((resolve, reject) => {
        const timer = setTimeout(resolve, 1000);
        controller.signal.addEventListener('abort', () => {
          clearTimeout(timer);
          reject(new Error('Request timeout'));
        });
      });

      clearTimeout(timeoutId);

      setSubmitMessage(
        "Thank you! Your access request has been submitted. You'll hear from us soon."
      );
      setEmail("");
      setShowEmailForm(false);

    } catch {
      setSubmitMessage(
        "Sorry, there was an error submitting your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }, [email]);

  return (
    <Col md={6} lg={6} className="mb-4">
      <Card className="project-card h-100" role="article" aria-labelledby={`project-title-${project.title.replace(/\s+/g, '-').toLowerCase()}`}>
        <Card.Body className="d-flex flex-column">
          <Card.Title id={`project-title-${project.title.replace(/\s+/g, '-').toLowerCase()}`}>{project.title}</Card.Title>
          <Card.Text className="flex-grow-1">{project.description}</Card.Text>
          <div className="mt-auto">
            <div className="tech-stack-container">
              <div className="tech-badges">
                {project.techStack.split(', ').map((tech, index) => (
                  <span key={index} className="tech-badge" title={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="concepts-label">Key Concepts:</div>
              <div className="concept-badges">
                {project.concepts.split(', ').map((concept, index) => (
                  <span key={index} className="concept-badge" title={concept}>
                    {concept}
                  </span>
                ))}
              </div>
            </div>

            <div className="button-group" role="group" aria-label={`Actions for ${project.title}`}>
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
              <div className="email-request-form" role="region" aria-labelledby="email-form-heading">
                <Form onSubmit={handleEmailSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor={`email-${project.title.replace(/\s+/g, '-').toLowerCase()}`} className="visually-hidden">
                      Email address for project access
                    </Form.Label>
                    <Form.Control
                      id={`email-${project.title.replace(/\s+/g, '-').toLowerCase()}`}
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="email-input"
                      aria-describedby={submitMessage ? `submit-message-${project.title.replace(/\s+/g, '-').toLowerCase()}` : undefined}
                    />
                  </Form.Group>
                  <div className="form-buttons">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      aria-describedby={isSubmitting ? "submitting-status" : undefined}
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
                id={`submit-message-${project.title.replace(/\s+/g, '-').toLowerCase()}`}
                className={`submit-message mt-2 ${
                  submitMessage.includes("Thank you") ? "success" : "error"
                }`}
                role="status"
                aria-live="polite"
              >
                {submitMessage}
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
});

const Projects: FC = memo(() => {
  const projectsRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="projects" 
      className="projects py-5" 
      ref={projectsRef}
      aria-labelledby="projects-heading"
    >
      <Suspense fallback={<div className="work-heading-placeholder" aria-hidden="true" />}>
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
});

Projects.displayName = 'Projects';

export default Projects;
