import { motion, useReducedMotion } from "framer-motion";
import "../Styles/About.css";
import image1 from "../assets/image1.png";

export default function About() {
  const prefersReducedMotion = useReducedMotion();
  const aboutText = [
    "I am a passionate and dedicated developer with knowledge of C, Java, JavaScript, React.js, HTML, CSS, and MySQL.",
    "I enjoy building responsive and user-friendly web applications with practical functionality.",
    "I have worked on projects involving business registration, e-commerce, and transaction management systems.",
    "I am a quick learner, team player, and adaptable to new technologies and challenges.",
    "I am always eager to improve my technical skills and contribute to innovative projects."
  ];
  const reveal = (delay = 0) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, x: -48 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, amount: 0.3 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.65,
      delay: prefersReducedMotion ? 0 : delay,
      ease: "easeOut"
    }
  });

  return (
    <section className="about-section" id="about">

      
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="about-container">

        
        <div className="about-content">

          <motion.div
            className="about-label"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              ease: "easeOut"
            }}
          >
            <motion.span
              className="about-label-line"
              initial={prefersReducedMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.8,
                ease: "easeOut"
              }}
            ></motion.span>
            GET TO KNOW ME
          </motion.div>

          <motion.h2 className="about-heading" {...reveal(0.08)}>
            About <span>Me.</span>
          </motion.h2>

          <motion.p className="about-subtitle" {...reveal(0.16)}>
            Turning ideas into meaningful digital experiences.
          </motion.p>

          <div className="about-description">
            {aboutText.map((text, index) => (
              <motion.div
                className="about-text-line"
                key={index}
                {...reveal(0.08 + index * 0.16)}
              >
                <span className="about-number">
                  0{index + 1}
                </span>

                <p>{text}</p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="about-button"
            {...reveal(0.08 + aboutText.length * 0.16)}
          >
            LET'S CONNECT
            <span>↗</span>
          </motion.a>

        </div>

        
        <motion.div
          className="about-image-wrapper"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, x: 64, y: 22, rotate: 2 }
          }
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.9,
            ease: "easeOut"
          }}
        >

          <div className="about-image-circle"></div>

          <div className="about-image">
            <img
              src={image1}
              alt="Aareefa pointing towards her introduction"
            />
          </div>

          {/* <div className="about-image-tag">
            <span className="about-tag-dot"></span>
            CREATIVE DEVELOPER
          </div> */}

          {/* <div className="about-image-caption">
            <span>01 / ABOUT</span>
            <span>PORTFOLIO 2026</span>
          </div> */}

        </motion.div>

      </div>

      
      <motion.div
        className="about-bottom-line"
        initial={prefersReducedMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 1.1,
          ease: "easeOut"
        }}
      ></motion.div>

    </section>
  );
}



