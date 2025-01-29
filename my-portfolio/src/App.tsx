import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import "./styles/Background.scss";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Bio from "./sections/Bio";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact.tsx"

function App() {
  return (
    <div className="c-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Bio />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
