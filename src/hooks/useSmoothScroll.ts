import { useCallback } from 'react';

interface ScrollOptions {
  duration?: number;
  offset?: number;
  easing?: (t: number) => number;
}

// Modern easing functions
const easingFunctions = {
  easeInOutCubic: (t: number): number => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeOutQuart: (t: number): number => 1 - (--t) * t * t * t,
  easeInOutQuart: (t: number): number => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
};

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((
    target: string | HTMLElement,
    options: ScrollOptions = {}
  ) => {
    const {
      duration = 800,
      offset = 80,
      easing = easingFunctions.easeInOutCubic
    } = options;

    // Get target element
    const element = typeof target === 'string' 
      ? document.querySelector(target) as HTMLElement
      : target;

    if (!element) {
      console.warn(`Target element not found: ${target}`);
      return;
    }

    const startPosition = window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    // Use requestAnimationFrame for smooth 60fps animation
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = easing(progress);
      const currentPosition = startPosition + (distance * easedProgress);
      
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const scrollToTop = useCallback((options: Omit<ScrollOptions, 'offset'> = {}) => {
    const { duration = 600, easing = easingFunctions.easeOutQuart } = options;
    
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = easing(progress);
      const currentPosition = startPosition * (1 - easedProgress);
      
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return { scrollToElement, scrollToTop };
};