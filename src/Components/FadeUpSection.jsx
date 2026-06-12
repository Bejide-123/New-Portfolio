import { motion } from "framer-motion";

/**
 * FadeUpSection
 * Used on the Hero / above-fold elements that animate on mount (not scroll).
 * Pass a `delay` to stagger siblings manually if needed.
 */
const FadeUpSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpSection;