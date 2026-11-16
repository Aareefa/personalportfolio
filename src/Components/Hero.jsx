import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import "../Styles/Hero.css";
import aareefa  from "../assets/aareefa.png";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const float = prefersReducedMotion
    ? {}
    : { y: [0, -12, 0] };

  return (
    <section className="hero" id="home">

      
      <div className="hero-name">
        <motion.span
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 1.4,
            ease: "easeOut",
          }}
        >
          AAREEFA
        </motion.span>
      </div>

      
      <motion.div
        className="hero-location"
        initial={prefersReducedMotion ? false : { opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.8,
          delay: prefersReducedMotion ? 0 : 0.5,
        }}
      >
        Hyderabad — INDIA · 17.68°N
      </motion.div>

      
      <motion.div
        className="hero-person"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 1.2, ease: "easeOut" }}
      >
        <motion.img
          src={aareefa}
          alt="Shaik Aareefa"
          animate={float}
          transition={{
            duration: 6,
            repeat: prefersReducedMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      
      <motion.div
        className="hero-tagline"
        initial={prefersReducedMotion ? false : { opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 1,
          delay: prefersReducedMotion ? 0 : .5,
        }}
      >
        <h2>
          I build digital experiences with
          <i> creativity.</i>
        </h2>
      </motion.div>

      
      <motion.a
        href="#about"
        className="hero-scroll"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.8,
          delay: prefersReducedMotion ? 0 : 0.9,
        }}
      >
        <span>SCROLL TO EXPLORE</span>
        <motion.span
          className="hero-scroll-icon"
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: prefersReducedMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={17} />
        </motion.span>
      </motion.a>

      <motion.div
        className="hero-index"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.8,
          delay: prefersReducedMotion ? 0 : 1.1,
        }}
      >
        PORTFOLIO — 2026
      </motion.div>

    </section>
  );
}
