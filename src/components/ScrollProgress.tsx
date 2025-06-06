import { useState, useEffect, memo } from 'react';
import { ScrollProgressProps } from '../types';
import '../styles/ScrollProgress.scss';

const ScrollProgress: React.FC<ScrollProgressProps> = ({ className = '' }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / docHeight) * 100, 100);
      setScrollProgress(progress);
    };

    updateScrollProgress(); // Initial calculation
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className={`scroll-progress-container ${className}`}>
      <div 
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-label={`Page scroll progress: ${Math.round(scrollProgress)}%`}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

export default memo(ScrollProgress);