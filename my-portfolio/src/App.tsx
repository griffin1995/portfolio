import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import "./styles/Background.scss";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Bio from "./sections/Bio";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="c-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Bio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
