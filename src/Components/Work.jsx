import { motion, useReducedMotion } from "framer-motion";
import "../Styles/Work.css";

const projects = [
  {
    number: "01",
    title: "KonnecteX",
    category: "BUSINESS REGISTRATION",
    description:
      "Built a business registration web application with structured forms, form validation, user authentication and session handling. Implemented separate role-based login flows with access to relevant pages and actions.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    type: "Featured Project",
  },
  {
    number: "02",
    title: "Hyni Fashion Store",
    category: "E-COMMERCE WEBSITE",
    description:
      "Developed a responsive fashion e-commerce website with real-time product filtering by category, size, colour and price. Created four role-based dashboards for customers, wholesalers, admins and workers.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    type: "Featured Project",
  },
  {
    number: "03",
    title: "ATM Transaction System",
    category: "WEB APPLICATION",
    description:
      "Created a web-based ATM management application featuring login authentication, balance checking, cash deposits, withdrawals and transaction tracking.",
    technologies: ["Web Development", "Authentication", "Transactions"],
    type: "Web Application",
  },
  {
    number: "04",
    title: "Static Burger App",
    category: "FRONTEND DEVELOPMENT",
    description:
      "Designed a responsive burger ordering website with menu items, images, descriptions and prices. Added hover effects, easy navigation and a mobile-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    type: "Frontend Project",
  },
];

export default function Work() {
  const prefersReducedMotion = useReducedMotion();

  const reveal = (delay = 0, x = 0, y = 44) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.8,
      delay: prefersReducedMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  return (
    <section className="work-section" id="work">

      <motion.div
        className="work-background-circle"
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? {}
            : { y: [0, 24, 0], x: [0, -18, 0], scale: [1, 1.08, 1] }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      

      <motion.div className="work-header" {...reveal(0)}>

        <div className="work-eyebrow">
          <span></span>
          MY CREATIONS
        </div>

        <h2>
          Selected <span>Works.</span>
        </h2>

        <p>
          A collection of projects that reflect my learning, creativity
          and development skills.
        </p>

      </motion.div>

      

      <div className="projects-section" id="projects">

        <motion.div className="work-section-title" {...reveal(0.1)}>
          <span>01 / MY PROJECTS</span>
          <h3>Things I've <i>Built.</i></h3>
        </motion.div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              {...reveal(
                0.08 + index * 0.12,
                index % 2 === 0 ? -36 : 36
              )}
            >

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-type">
                  {project.type}
                </span>

              </div>

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

              </div>

              <div className="project-bottom">

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-arrow">
                  ↗
                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>

      {/* BOTTOM MESSAGE */}

      <motion.div className="work-footer" {...reveal(0.1, 0, 30)}>
        <p>
          EVERY PROJECT IS AN OPPORTUNITY TO
          <span> LEARN, CREATE & GROW.</span>
        </p>
      </motion.div>

    </section>
  );
}
