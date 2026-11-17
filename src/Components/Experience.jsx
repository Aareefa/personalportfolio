import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "../Styles/Experience.css";

const experiences = [
  {
    id: "01",
    company: "Fulcrum GT",
    role: "Intern",
    duration: "6 Months",
    type: "Professional Experience",
    description:
      "A professional experience milestone that contributed to my career journey, workplace exposure and continued professional growth.",
    status: "Experience Completed",
    details: [
      "Gained practical exposure to a professional development environment and software development workflows.",
      "Applied technical knowledge and problem-solving skills while working on assigned tasks.",
      "Collaborated with team members and developed communication and teamwork skills.",
      "Strengthened technical understanding through continuous learning and hands-on experience.",
    ],
  },
  {
    id: "02",
    company: "Kodewar Technologies",
    role: "Frontend Developer Intern",
    duration: "3 Months",
    type: "Professional Experience",
    description:
      "An important step in my professional journey, adding to my experience and supporting my continued growth in the technology field.",
    status: "Going on",
    details: [
      "Developed responsive and user-friendly web interfaces using React.js, HTML5, CSS3, and JavaScript.",
      "Created reusable React components to improve code organization and maintainability.",
      "Implemented responsive UI layouts to provide consistent experiences across desktop, tablet, and mobile devices.",
      "Worked on frontend development tasks and improved interface usability through structured layouts and styling.",
    ],
  },
];

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();
  const [openId, setOpenId] = useState(null);

  const toggleDetails = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

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

          {experiences.map((item, index) => {
            const isOpen = openId === item.id;

            return (
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
              <div
                className={`exp-card ${isOpen ? "exp-card-open" : ""}`}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => toggleDetails(item.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleDetails(item.id);
                  }
                }}
              >

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

                  <span className="exp-role">{item.role}</span>

                  <p>{item.description}</p>

                  <span className="exp-toggle">
                    {isOpen ? "HIDE DETAILS" : "VIEW DETAILS"}
                    <span
                      className={`exp-toggle-icon ${
                        isOpen ? "exp-toggle-icon-open" : ""
                      }`}
                    >
                      +
                    </span>
                  </span>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="exp-details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: prefersReducedMotion ? 0 : 0.45,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="exp-details-inner">
                          <span className="exp-details-label">
                            WHAT I DID
                          </span>

                          <ul>
                            {item.details.map((detail) => (
                              <li key={detail}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

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
            );
          })}

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
