import React, { useRef, FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useScroll, useTransform } from "framer-motion";

// Import images
import financeImg from "../assets/placeholder-finance.jpg";
import cryptoImg from "../assets/placeholder-crypto.jpg";

interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
  techStack: string;
  concepts: string;
  buttons: { label: string; link: string }[];
}

const projectsData: Project[] = [
  {
    title: "Machine Learning for Financial Portfolio Optimisation",
    description:
      "An AI-driven system optimising financial portfolios using LASSO regression, Markowitz’s Portfolio Theory, and deep learning for predictive trading strategies.",
    image: financeImg,
    alt: "Financial Optimisation",
    techStack: "Python, Scikit-Learn, TensorFlow, Flask, PostgreSQL",
    concepts: "LASSO Regression, Portfolio Theory, Deep Learning",
    buttons: [
      { label: "Read Paper", link: "#" },
      { label: "GitHub", link: "#" },
    ],
  },
  {
    title: "Full-Stack Cryptocurrency Trading Platform",
    description:
      "A full-stack crypto trading platform featuring real-time analytics, AI-driven strategies, and WebSockets for live price tracking.",
    image: cryptoImg,
    alt: "Crypto Trading Platform",
    techStack: "React, Node.js, PostgreSQL, WebSockets, Firebase, TensorFlow",
    concepts: "Real-Time Analytics, AI Strategies, WebSockets",
    buttons: [
      { label: "Explore Platform", link: "#" },
      { label: "GitHub", link: "#" },
    ],
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => (
  <Col md={6} lg={5}>
    <Card className="project-card">
      <Card.Img variant="top" src={project.image} alt={project.alt} loading="lazy" />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <span className="small-text">
          <strong>Tech Stack:</strong> {project.techStack} <br />
          <strong>Concepts:</strong> {project.concepts}
        </span>
        <div className="button-group">
          {project.buttons.map((button, index) => (
            <Button
              key={button.label}
              variant={index === 0 ? "primary" : "outline-secondary"}
              href={button.link}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </Card.Body>
    </Card>
  </Col>
);

const Projects: FC = () => {
  const projectsRef = useRef<HTMLElement>(null);

  // Configure useScroll to work with a shorter section:
  // "start 75%" means progress begins when the top of the Projects section
  // is at 75% of the viewport height (i.e. near the bottom).
  // "end 25%" means progress is complete when the bottom of the section is at 25% of the viewport.
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start 75%", "end 25%"],
  });

  // Map scroll progress to vertical translation:
  // At progress = 0, the heading is at +50vh (off-screen bottom);
  // at progress = 0.5, it is at 0 (centered);
  // at progress = 1, it is at -50vh (off-screen top).
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ["50vh", "0vh", "-50vh"]);

  // Map scroll progress to opacity: fully opaque at mid-scroll, transparent at the edges.
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section id="projects" className="projects py-5" ref={projectsRef}>
      <motion.h2
        className="work-heading"
        style={{
          position: "fixed",         // Fixed position relative to the viewport
          left: "50%",               // Center horizontally
          transform: "translateX(-50%)", // Center the element exactly
          y,                        // Vertical translation from Framer Motion
          opacity,                  // Opacity from Framer Motion
          color: "white",           // Visible against a dark background
          zIndex: 3,                // Ensure it appears above other content
          pointerEvents: "none",    // Prevent interactions
        }}
      >
        Work
      </motion.h2>
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
