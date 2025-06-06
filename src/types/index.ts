// types/index.ts

export interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
  techStack: string;
  concepts: string;
  buttons: ProjectButton[];
}

export interface ProjectButton {
  label: string;
  link: string;
}

export interface ImageSizes {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  sizes?: ImageSizes;
}

export interface LoadingSkeletonProps {
  variant?: "project" | "hero" | "text";
  count?: number;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export interface ScrollProgressProps {
  className?: string;
}

export interface SkillItem {
  name: string;
  level: number;
  category: string;
}

export interface SkillCategory {
  [key: string]: SkillItem[];
}
