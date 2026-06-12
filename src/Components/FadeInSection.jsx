import { motion } from "framer-motion";

/**
 * FadeInSection
 * Used on all scroll-triggered sections (About, Skills, Projects, Contact).
 * Animates once when the element enters the viewport.
 *
 * Props:
 *   delay     – stagger offset in seconds (default 0)
 *   direction – "up" | "left" | "right" (default "up")
 *   amount    – how much of the element must be visible before firing (default 0.15)
 */
const directionMap = {
  up:    { y: 32, x: 0 },
  left:  { y: 0,  x: -32 },
  right: { y: 0,  x: 32 },
};

const FadeInSection = ({
  children,
  delay = 0,
  direction = "up",
  amount = 0.15,
  className = "",
}) => {
  const { x, y } = directionMap[direction] ?? directionMap.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;