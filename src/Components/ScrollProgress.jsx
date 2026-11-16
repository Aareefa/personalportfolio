import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: prefersReducedMotion ? scrollYProgress : smoothProgress }}
      aria-hidden="true"
    />
  );
}
