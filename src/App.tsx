import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import "./styles/Background.scss";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Bio from "./sections/Bio";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact.tsx";

function App() {
  const heroRef = useRef<HTMLElement | null>(null); // Explicitly define ref type

  return (
    <div>
      <Navbar />
      <main>
        {/* Wrap Hero inside a section with ref */}
        <section ref={heroRef}>
          <Hero />
        </section>
        <About />
        {/* Pass heroRef to Projects */}
        <Projects heroRef={heroRef} />
        <Bio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
