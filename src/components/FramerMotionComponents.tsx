import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FramerMotionComponentsProps {
  projectsRef: React.RefObject<HTMLElement>;
}

const FramerMotionComponents: React.FC<FramerMotionComponentsProps> = ({
  projectsRef,
}) => {
  // Configure useScroll to work with a shorter section:
  // "start 75%" means progress begins when the top of the Projects section
  // is at 75% of the viewport height (i.e. near the bottom).
  // "end 25%" means progress is complete when the bottom of the section is at 25% of the viewport.
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start 75%", "end 25%"],
  });

  // Map scroll progress to vertical translation:
  // At progress = 0, the heading is at +50vh (off-screen bottom);
  // at progress = 0.5, it is at 0 (centered);
  // at progress = 1, it is at -50vh (off-screen top).
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["50vh", "0vh", "-50vh"]
  );

  // Map scroll progress to opacity: fully opaque at mid-scroll, transparent at the edges.
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.h2
      className="work-heading"
      style={{
        position: "fixed", // Fixed position relative to the viewport
        left: "50%", // Center horizontally
        transform: "translateX(-50%)", // Center the element exactly
        y, // Vertical translation from Framer Motion
        opacity, // Opacity from Framer Motion
        color: "white", // Visible against a dark background
        zIndex: 3, // Ensure it appears above other content
        pointerEvents: "none", // Prevent interactions
      }}
    >
      Work
    </motion.h2>
  );
};

export default FramerMotionComponents;
