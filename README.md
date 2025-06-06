# Jack Griffin - Portfolio Website

My personal portfolio website showcasing my expertise in Machine Learning, Data Science, and Software Development. Built with modern web technologies to demonstrate both my technical skills and attention to detail.

## 🎯 About This Project

This is my professional portfolio where I present my work in AI, machine learning, and full-stack development. I built it from scratch to create a platform that not only showcases my projects but also demonstrates my proficiency with modern frontend technologies and performance optimisation techniques.

The site focuses on three core areas of my expertise:

- **Data Science & ML**: Robust statistical modelling and AI systems
- **Software Development**: Full-stack applications and scalable architectures
- **Performance Engineering**: Optimised, accessible web experiences

## 🛠️ Why These Technologies?

**React + TypeScript**: Chose React for its component-based architecture and TypeScript for type safety during development. This combination ensures maintainable, scalable code whilst providing excellent developer experience.

**SCSS with Modular Architecture**: Selected SCSS over CSS-in-JS for better performance and granular control. Implemented a design system with variables, mixins, and component-specific styles for consistency.

**Framer Motion**: Implemented sophisticated scroll-based animations, including a custom "Work" heading that translates and fades based on scroll progress through the projects section.

**Vite**: Opted for Vite over Create React App for significantly faster development builds, hot module replacement, and optimised production bundles.

**Bootstrap Integration**: Used Bootstrap's grid system and utilities whilst maintaining custom SCSS for unique styling and animations.

## 🏗️ Architecture Decisions

### Component Design Patterns

- **Memoisation**: All components use `React.memo()` for performance optimisation
- **Lazy Loading**: Framer Motion components are lazy-loaded with Suspense for code splitting
- **Error Boundaries**: Class-based error boundary with graceful fallbacks and recovery options
- **Responsive Images**: Custom component with srcSet generation, lazy loading, and skeleton states

### Advanced Features Implementation

**Scroll-Based Animations**: Built custom Framer Motion components using `useScroll` and `useTransform` for the floating "Work" heading that responds to scroll progress through the projects section.

**Performance Optimisation**:

- Throttled scroll handlers using `requestAnimationFrame`
- Intersection Observer for section visibility detection
- Progressive image loading with skeleton states
- Passive event listeners for smooth scrolling

**Accessibility**: Full ARIA compliance with semantic HTML, proper focus management, and screen reader support throughout.

### Styling Architecture

```scss
styles/
├── variables.scss      // Design tokens (colours, spacing, breakpoints)
├── mixins.scss        // Reusable SCSS functions
├── typography.scss    // Font hierarchy and text styles
└── [Component].scss   // Component-specific styles
```

## 🎨 Design Philosophy

The design reflects my approach to both development and data science:

- **Clean & Functional**: Focus on content without unnecessary visual noise
- **Data-Driven**: Clear information hierarchy and logical flow
- **Performance-First**: Optimised for Core Web Vitals and user experience
- **Accessible**: WCAG 2.1 AA compliant with proper semantic structure

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Background.tsx   # Noise background with CSS-only animation
│   ├── ErrorBoundary.tsx# Class-based error handling
│   ├── FramerMotionComponents.tsx # Scroll-based animations
│   ├── LoadingSkeleton.tsx # Multiple skeleton variants
│   ├── Navbar.tsx       # Responsive navigation with scroll detection
│   ├── ResponsiveImage.tsx # Optimised image loading
│   └── ScrollProgress.tsx # Page scroll indicator
├── sections/            # Main portfolio sections
│   ├── About.tsx        # Value proposition and expertise
│   ├── Bio.tsx          # Background and goals
│   ├── Contact.tsx      # Social links and email
│   ├── Footer.tsx       # Copyright and legal
│   ├── Hero.tsx         # Landing section with profile
│   └── Projects.tsx     # Portfolio showcase
├── styles/              # SCSS architecture
├── types/               # TypeScript definitions
├── utils/               # Helper functions (favicon management)
└── assets/              # Images and graphics
```

## 🚀 Key Features

### Advanced Animations

- **Scroll-Based "Work" Heading**: Fixed-position element that translates vertically and fades based on scroll progress through projects section
- **Intersection Observer Animations**: Section-based animations triggered when content enters viewport
- **Smooth Transitions**: Page-level transitions and hover effects throughout

### Performance Engineering

- **Code Splitting**: Lazy loading for heavy components (Framer Motion)
- **Image Optimisation**: Responsive images with WebP/AVIF support and lazy loading
- **Skeleton Loading**: Multiple skeleton variants for different content types
- **Throttled Event Handlers**: Optimised scroll and resize handlers

### Responsive Design System

- **Mobile-First**: Breakpoints at 480px, 768px, 1024px, and 1200px
- **Adaptive Navigation**: Different layouts for mobile vs desktop navigation
- **Flexible Grid**: Bootstrap integration with custom responsive utilities

### Error Handling & Reliability

- **Error Boundaries**: Graceful degradation with recovery options
- **Image Fallbacks**: Error states for failed image loads
- **Progressive Enhancement**: Core functionality works without JavaScript

## 💼 Featured Projects

### Sparse Index Tracking System

Advanced ML project implementing robust financial portfolio optimisation with cardinality constraints and regime-aware backtesting.

### Cryptocurrency Trading Platform

Full-stack application with real-time WebSocket data feeds, interactive charting, and PostgreSQL-backed trade logging.

### Portfolio Website (This Site)

Demonstrates modern React patterns, performance optimisation, and accessibility compliance.

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ across all categories (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.0s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 2.5s

## 🔧 Development Workflow

### Local Development

```bash
npm run dev          # Development server with hot reload
npm run build        # Production build with optimisation
npm run preview      # Preview production build locally
npm run lint         # ESLint code quality checks
```

### Code Quality Standards

- **TypeScript Strict Mode**: Full type checking enabled
- **ESLint Configuration**: Custom rules for React and accessibility
- **Performance Monitoring**: Web Vitals tracking in development
- **Accessibility Testing**: Built-in ARIA compliance checking

## 🔍 Technical Highlights

### Custom Scroll Animation System

Implemented sophisticated scroll-based animations using Framer Motion's `useScroll` and `useTransform` hooks for the floating "Work" heading that responds to user scroll behaviour.

### Responsive Image Architecture

Built a comprehensive image loading system with:

- Automatic srcSet generation for different screen sizes
- Progressive loading with skeleton states
- Error handling and graceful degradation
- Lazy loading with Intersection Observer

### Performance-Optimised Navigation

Created a responsive navbar with:

- Throttled scroll detection using `requestAnimationFrame`
- Smooth state transitions for mobile/desktop layouts
- Accessibility-compliant focus management

### Modular SCSS Architecture

Developed a scalable styling system with design tokens, mixins, and component-specific stylesheets for maintainability and consistency.

## 🌐 Deployment & Infrastructure

The site is deployed with automated CI/CD pipeline, featuring:

- **Build Optimisation**: Vite production builds with tree shaking
- **Asset Optimisation**: Compressed images and minified CSS/JS
- **CDN Distribution**: Global content delivery for optimal performance
- **SSL/TLS**: Full HTTPS with security headers

## 🎯 Future Enhancements

- **Blog Integration**: Technical articles on ML and development topics
- **Interactive Demos**: Live project demonstrations and code examples
- **Analytics Dashboard**: Performance tracking and user behaviour insights
- **Dark Theme**: Complete dark mode implementation with theme persistence

---

This portfolio represents my commitment to building high-quality, performant web applications whilst showcasing my expertise in machine learning and data science. Every technical decision reflects best practices in modern frontend development and user experience design.
