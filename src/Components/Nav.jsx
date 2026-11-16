import { motion, useReducedMotion } from "framer-motion";
import "../Styles/Nav.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  const fadeDown = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, y: -18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      className="navbar"
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
    >

      <motion.div
        className="nav-brand"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="brand-logo" variants={fadeDown}>A</motion.div>
        <motion.div className="brand-info" variants={fadeDown}>
          <h2>SHAIK AAREEFA</h2>
          <span>FRONTEND DEVELOPER</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="nav-menu"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {links.map((link) => (
          <motion.a
            href={link.href}
            key={link.href}
            variants={fadeDown}
          >
            {link.label}
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="availability"
        variants={fadeDown}
        initial="hidden"
        animate="show"
        transition={{ delay: prefersReducedMotion ? 0 : 0.45 }}
      >
        <span className="status-dot"></span>
        Available for Work
      </motion.div>

    </motion.nav>
  );
}
