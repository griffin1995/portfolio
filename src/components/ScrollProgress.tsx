import { useState, useEffect, memo, useCallback } from 'react';
import { ScrollProgressProps } from '../types';
import '../styles/ScrollProgress.scss';

const ScrollProgress: React.FC<ScrollProgressProps> = ({ className = '' }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;
      
      rafId = requestAnimationFrame(() => {
        updateScrollProgress();
        rafId = null;
      });
    };

    updateScrollProgress(); // Initial calculation
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollProgress);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [updateScrollProgress]);

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