import React, { FC, memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.scss";
import { Container } from "react-bootstrap";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container className="text-center">
        <p className="mb-0">&copy; {currentYear} Jack Griffin. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default memo(Footer);
