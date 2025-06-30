import React, { Suspense, lazy, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";

// Import critical components directly
import Background from "./components/Background";
import ModernNavbar from "./components/ModernNavbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollProgress from "./components/ScrollProgress";
import LoadingSkeleton from "./components/LoadingSkeleton";
import FloatingActionButton from "./components/FloatingActionButton";
import FloatingParticles from "./components/FloatingParticles";

// Lazy load heavy components with preload hints
const Projects = lazy(() => 
  import(/* webpackChunkName: "projects" */ "./sections/Projects")
);
const Bio = lazy(() => 
  import(/* webpackChunkName: "bio" */ "./sections/Bio")
);

const App: React.FC = () => {
  // Memoised favicon paths for performance
  const faviconPaths = useMemo(() => ({
    dark: "/griffin_light.png",
    light: "/griffin_dark.png"
  }), []);

  useEffect(() => {
    // Modern favicon management with performance optimisations
    const initFavicon = () => {
      const updateFavicon = () => {
        const isDarkMode = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        const faviconPath = isDarkMode
          ? faviconPaths.dark
          : faviconPaths.light;

        // Update main favicon with modern approach
        let existingLink = document.querySelector(
          'link[rel="icon"]'
        ) as HTMLLinkElement;
        if (!existingLink) {
          existingLink = document.createElement("link");
          existingLink.rel = "icon";
          existingLink.type = "image/png";
          document.head.appendChild(existingLink);
        }
        existingLink.href = faviconPath;

        // Update apple touch icon with modern approach
        let appleLink = document.querySelector(
          'link[rel="apple-touch-icon"]'
        ) as HTMLLinkElement;
        if (!appleLink) {
          appleLink = document.createElement("link");
          appleLink.rel = "apple-touch-icon";
          document.head.appendChild(appleLink);
        }
        appleLink.href = faviconPath;
      };

      // Set initial favicon
      updateFavicon();

      // Listen for theme changes with modern approach
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => updateFavicon();
      mediaQuery.addEventListener("change", handleChange);

      // Cleanup
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    };

    const cleanup = initFavicon();
    return cleanup;
  }, [faviconPaths]);

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload hero images
      const heroImage = new Image();
      heroImage.src = "/griffin_dark.png";
      
      // Preload noise texture
      const noiseImage = new Image();
      noiseImage.src = "/noise.avif";
    };

    preloadCriticalResources();
  }, []);

  return (
    <ErrorBoundary>
      <div className="App">
        <FloatingParticles />
        <ScrollProgress />
        <Background />
        <ModernNavbar />

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
        <FloatingActionButton />
      </div>
    </ErrorBoundary>
  );
};

export default App;
