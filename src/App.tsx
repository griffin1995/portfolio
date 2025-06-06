import React, { Suspense, lazy, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";

// Import critical components directly
import Background from "./components/Background";
import Navigation from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollProgress from "./components/ScrollProgress";
import LoadingSkeleton from "./components/LoadingSkeleton";

// Lazy load heavy components
const Projects = lazy(() => import("./sections/Projects"));
const Bio = lazy(() => import("./sections/Bio"));

const App: React.FC = () => {
  useEffect(() => {
    // Initialize favicon management
    const initFavicon = () => {
      const updateFavicon = () => {
        const isDarkMode = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        const faviconPath = isDarkMode
          ? "/griffin_light.png"
          : "/griffin_dark.png";

        // Update main favicon
        const existingLink = document.querySelector(
          'link[rel="icon"]'
        ) as HTMLLinkElement;
        if (existingLink) {
          existingLink.href = faviconPath;
        } else {
          // Create favicon link if it doesn't exist
          const link = document.createElement("link");
          link.rel = "icon";
          link.type = "image/png";
          link.href = faviconPath;
          document.head.appendChild(link);
        }

        // Update apple touch icon
        const appleLink = document.querySelector(
          'link[rel="apple-touch-icon"]'
        ) as HTMLLinkElement;
        if (appleLink) {
          appleLink.href = faviconPath;
        } else {
          // Create apple touch icon if it doesn't exist
          const link = document.createElement("link");
          link.rel = "apple-touch-icon";
          link.href = faviconPath;
          document.head.appendChild(link);
        }

        console.log("Favicon updated to:", faviconPath); // Debug log
      };

      // Set initial favicon
      updateFavicon();

      // Listen for theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", updateFavicon);

      // Cleanup
      return () => {
        mediaQuery.removeEventListener("change", updateFavicon);
      };
    };

    const cleanup = initFavicon();
    return cleanup;
  }, []);

  return (
    <ErrorBoundary>
      <div className="App">
        <ScrollProgress />
        <Background />
        <Navigation />

        <main>
          <Hero />
          <About />

          <Suspense
            fallback={
              <div className="projects-loading">
                <LoadingSkeleton variant="project" count={2} />
              </div>
            }
          >
            <Projects />
          </Suspense>

          <Suspense
            fallback={
              <div className="bio-loading">
                <LoadingSkeleton variant="text" count={1} />
              </div>
            }
          >
            <Bio />
          </Suspense>

          <Contact />
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
