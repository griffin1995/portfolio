import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.scss";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer py-4">
      <Container className="text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Jack Griffin. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;