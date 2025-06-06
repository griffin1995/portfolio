import { useState, memo } from "react";
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

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Generate srcSet for responsive images
  const generateSrcSet = () => {
    if (!sizes) return undefined;

    return `${sizes.mobile} 480w, ${sizes.tablet} 768w, ${sizes.desktop} 1200w`;
  };

  const generateSizes = () => {
    if (!sizes) return undefined;

    return "(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px";
  };

  if (hasError) {
    return (
      <div className={`image-error ${className}`}>
        <div className="error-placeholder">
          <span>Image failed to load</span>
        </div>
      </div>
    );
  }

  return (
    <div className="responsive-image-container">
      {!isLoaded && (
        <div className="image-skeleton">
          <LoadingSkeleton variant="project" count={1} />
        </div>
      )}

      <img
        src={src}
        srcSet={generateSrcSet()}
        sizes={generateSizes()}
        alt={alt}
        className={`responsive-image ${className} ${
          isLoaded ? "loaded" : "loading"
        }`}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: isLoaded ? "block" : "none" }}
      />
    </div>
  );
};

export default memo(ResponsiveImage);
