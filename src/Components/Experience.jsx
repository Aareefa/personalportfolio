import { motion, useReducedMotion } from "framer-motion";
import "../Styles/Experience.css";

const experiences = [
  {
    id: "01",
    company: "Fulcrum GT",
    duration: "6 Months",
    type: "Professional Experience",
    description:
      "A professional experience milestone that contributed to my career journey, workplace exposure and continued professional growth.",
    status: "Experience Completed",
  },
  {
    id: "02",
    company: "Kodewar Technologies",
    duration: "3 Months",
    type: "Professional Experience",
    description:
      "An important step in my professional journey, adding to my experience and supporting my continued growth in the technology field.",
    status: "Going on",
  },
];

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();

  const reveal = (delay = 0, x = 0, y = 44) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.85,
      delay: prefersReducedMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <section className="experience-section" id="experience">

      {/* BACKGROUND EFFECTS */}
      <motion.div
        className="exp-glow exp-glow-left"
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? {}
            : { y: [0, 30, 0], x: [0, 14, 0] }
        }
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="exp-glow exp-glow-right"
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? {}
            : { y: [0, -26, 0], x: [0, -12, 0] }
        }
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="experience-container">

        {/* HEADER */}
        <motion.div className="experience-header" {...reveal(0)}>

          <div className="exp-eyebrow">
            <span></span>
            MY PROFESSIONAL JOURNEY
          </div>

          <h2>
            Experience<span>.</span>
          </h2>

          <p>
            Every experience is a step forward.
            Here are the milestones that have shaped my
            professional journey and growth.
          </p>

        </motion.div>

        {/* EXPERIENCE SUMMARY */}
        <motion.div className="exp-summary" {...reveal(0.12, 0, 30)}>
          <div className="exp-summary-item">
            <span className="exp-summary-number">02</span>
            <span className="exp-summary-label">
              EXPERIENCE MILESTONES
            </span>
          </div>

          <div className="exp-summary-divider"></div>

          <div className="exp-summary-item">
            <span className="exp-summary-number">09</span>
            <span className="exp-summary-label">
              MONTHS OF EXPERIENCE
            </span>
          </div>
        </motion.div>

        {/* TIMELINE */}
        <div className="experience-timeline">

          <div className="exp-timeline-line">
            <motion.span
              initial={prefersReducedMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 1.4,
                ease: "easeOut",
              }}
            ></motion.span>
          </div>

          {experiences.map((item, index) => (
            <motion.div
              className={`exp-timeline-item ${
                index % 2 === 0 ? "exp-left" : "exp-right"
              }`}
              key={item.id}
              {...reveal(
                0.15 + index * 0.18,
                index % 2 === 0 ? -48 : 48
              )}
            >

              {/* TIMELINE DOT */}
              <div className="exp-timeline-dot">
                <motion.span
                  initial={prefersReducedMotion ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.5,
                    delay: prefersReducedMotion ? 0 : 0.15 + index * 0.18,
                    ease: "backOut",
                  }}
                ></motion.span>
              </div>

              {/* EXPERIENCE CARD */}
              <div className="exp-card">

                <div className="exp-card-top">

                  <span className="exp-card-number">
                    / {item.id}
                  </span>

                  <span className="exp-status">
                    <span></span>
                    {item.status}
                  </span>

                </div>

                <div className="exp-card-content">

                  <span className="exp-type">
                    {item.type}
                  </span>

                  <h3>{item.company}</h3>

                  <p>{item.description}</p>

                </div>

                <div className="exp-card-bottom">

                  <div className="exp-duration">
                    <span className="exp-duration-icon">
                      ↗
                    </span>

                    <div>
                      <small>DURATION</small>
                      <strong>{item.duration}</strong>
                    </div>
                  </div>

                  <span className="exp-card-index">
                    EXPERIENCE {item.id}
                  </span>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* FOOTER */}
        <motion.div className="exp-footer" {...reveal(0.1, 0, 30)}>
          <div className="exp-footer-icon">✳</div>

          <h3>
            Always learning.
            <span> Always growing.</span>
          </h3>

          <p>
            Building experience, developing skills and moving
            towards bigger opportunities.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
