import { memo } from "react";
import { LoadingSkeletonProps } from "../types";
import "../styles/LoadingSkeleton.scss";

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  variant = "project",
  count = 1,
}) => {
  const renderProjectSkeleton = () => (
    <div className="skeleton-project">
      <div className="skeleton skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text short"></div>
        <div className="skeleton skeleton-text medium"></div>
        <div className="skeleton-buttons">
          <div className="skeleton skeleton-button"></div>
          <div className="skeleton skeleton-button"></div>
        </div>
      </div>
    </div>
  );

  const renderHeroSkeleton = () => (
    <div className="skeleton-hero">
      <div className="skeleton skeleton-hero-image"></div>
      <div className="skeleton skeleton-hero-text"></div>
      <div className="skeleton skeleton-hero-text"></div>
      <div className="skeleton skeleton-hero-text"></div>
    </div>
  );

  const renderTextSkeleton = () => (
    <div className="skeleton-text-block">
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text short"></div>
    </div>
  );

  const renderSkeleton = () => {
    switch (variant) {
      case "hero":
        return renderHeroSkeleton();
      case "text":
        return renderTextSkeleton();
      default:
        return renderProjectSkeleton();
    }
  };

  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="skeleton-container">
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};

export default memo(LoadingSkeleton);
