import { useState, memo, useRef, useEffect, useCallback } from "react";
import { ResponsiveImageProps } from "../types";
import LoadingSkeleton from "./LoadingSkeleton";
import "../styles/ResponsiveImage.scss";

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  sizes,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  // Modern Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === "eager") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px"
      }
    );

    const currentRef = imgRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [loading]);

  // Generate srcSet for responsive images
  const generateSrcSet = useCallback(() => {
    if (!sizes) return undefined;
    return `${sizes.mobile} 480w, ${sizes.tablet} 768w, ${sizes.desktop} 1200w`;
  }, [sizes]);

  const generateSizes = useCallback(() => {
    if (!sizes) return undefined;
    return "(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px";
  }, [sizes]);

  if (hasError) {
    return (
      <div className={`image-error ${className}`} role="img" aria-label={alt}>
        <div className="error-placeholder">
          <span>Image failed to load</span>
        </div>
      </div>
    );
  }

  return (
    <div className="responsive-image-container">
      {!isLoaded && (
        <div className="image-skeleton" aria-hidden="true">
          <LoadingSkeleton variant="project" count={1} />
        </div>
      )}

      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        srcSet={isInView ? generateSrcSet() : undefined}
        sizes={generateSizes()}
        alt={alt}
        className={`responsive-image ${className} ${
          isLoaded ? "loaded" : "loading"
        }`}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: isLoaded ? "block" : "none" }}
        decoding="async"
        fetchPriority={loading === "eager" ? "high" : "auto"}
      />
    </div>
  );
};

export default memo(ResponsiveImage);
