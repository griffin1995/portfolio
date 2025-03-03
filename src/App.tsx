import {  FC  } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Bio from "./sections/Bio";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App: FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Bio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
