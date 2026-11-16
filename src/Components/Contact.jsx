import { motion, useReducedMotion } from "framer-motion";
import "../Styles/Contact.css";
import pointingLeft from "../assets/PointingLeft.png";

const contactDetails = [
  {
    icon: "✉",
    title: "EMAIL ME",
    value: "your-email@gmail.com",
    link: "mailto:your-email@gmail.com",
    label: "Send an email",
  },
  {
    icon: "in",
    title: "LINKEDIN",
    value: "Connect professionally",
    link: "https://www.linkedin.com/in/shaik-aareefa-546951288/",
    label: "View LinkedIn",
  },
  {
    icon: "⌘",
    title: "GITHUB",
    value: "Explore my projects",
    link: "https://github.com/Aareefa",
    label: "View GitHub",
  },
];

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();

  const reveal = (delay = 0, x = 0, y = 36) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: false, amount: 0.15 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.85,
      delay: prefersReducedMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <main className="contact-page" id="contact">

      {/* BACKGROUND EFFECTS */}
      <motion.div
        className="contact-bg-circle circle-one"
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? {}
            : { y: [0, 28, 0], x: [0, 16, 0] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="contact-bg-circle circle-two"
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? {}
            : { y: [0, -24, 0], x: [0, -14, 0] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* NAVIGATION */}
      <motion.nav className="contact-top-nav" {...reveal(0, 0, 20)}>
        <a href="#home" className="contact-back">
          <span>←</span> BACK TO HOME
        </a>

        <span className="contact-nav-status">
          <span></span>
          AVAILABLE FOR OPPORTUNITIES
        </span>
      </motion.nav>

      <div className="contact-container">

        {/* HEADER */}
        <motion.header className="contact-header" {...reveal(0.08)}>

          <div className="contact-eyebrow">
            <span></span>
            LET'S CONNECT
          </div>

          <h1>
            Have an idea?
            <br />
            <span>Let's talk.</span>
          </h1>

          <p>
            I'm always interested in learning, collaborating
            and exploring exciting opportunities.
            Let's connect and create something meaningful together.
          </p>

        </motion.header>

        {/* MAIN CONTENT */}
        <div className="contact-layout">

          {/* LEFT SIDE */}
          <motion.section
            className="contact-information"
            {...reveal(0.1, -32)}
          >

            <div className="contact-info-heading">
              <span>01 / GET IN TOUCH</span>
              <h2>
                Let's make
                <br />
                <i>something happen.</i>
              </h2>
            </div>

            <div className="contact-cards">

              {contactDetails.map((item, index) => (
                <motion.a
                  href={item.link}
                  target={item.link.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="contact-info-card"
                  key={item.title}
                  {...reveal(0.15 + index * 0.12, 0, 24)}
                >

                  <div className="contact-card-icon">
                    {item.icon}
                  </div>

                  <div className="contact-card-content">
                    <span>{item.title}</span>
                    <h3>{item.value}</h3>
                    <small>{item.label} ↗</small>
                  </div>

                  <div className="contact-card-arrow">
                    ↗
                  </div>

                </motion.a>
              ))}

            </div>

            <motion.div className="contact-note" {...reveal(0.2, 0, 20)}>
              <span className="contact-note-dot"></span>
              Open to new opportunities and collaborations.
            </motion.div>

          </motion.section>

          {/* RIGHT SIDE VISUAL */}
          <motion.section
            className="contact-visual"
            {...reveal(0.2, 40)}
          >

            <motion.div
              className="contact-visual-circle"
              aria-hidden="true"
              initial={prefersReducedMotion ? false : { scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 1.1,
                ease: "easeOut",
              }}
            ></motion.div>

            <motion.div
              className="contact-visual-image"
              animate={
                prefersReducedMotion
                  ? {}
                  : { y: [0, -14, 0] }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={pointingLeft}
                alt="Aareefa pointing towards her contact details"
              />
            </motion.div>

            <div className="contact-visual-caption">
              <span>LET'S BUILD SOMETHING</span>
              <span>TOGETHER ↗</span>
            </div>

          </motion.section>

        </div>

        {/* BOTTOM FOOTER */}
        <motion.footer className="contact-footer" {...reveal(0.1, 0, 30)}>

          <div>
            <span>THANK YOU FOR VISITING</span>
            <h3>
              Let's build something <i>great.</i>
            </h3>
          </div>

          <a href="#home" className="contact-home-link">
            BACK TO PORTFOLIO ↑
          </a>

          <p>© {new Date().getFullYear()} AAREEFA SHAIK. ALL RIGHTS RESERVED.</p>

        </motion.footer>

      </div>
    </main>
  );
}
