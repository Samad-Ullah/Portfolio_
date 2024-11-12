// src/components/Projects.js
import React from "react";
import { motion } from "framer-motion";
import "../Project.css";

const projects = [
  {
    title: "Reeft",
    description: "Danish-based field management system.",
    image:
      "https://i.vimeocdn.com/video/1507774136-d5d2c5d8ae629e931c1bcea306ddc34de2e4cc423880f79c9810e984b8b6bd88-d_640?f=webp",
    link: "https://www.reeft.com", // Replace with the actual URL
  },
  {
    title: "Kelta",
    description: "Spanish-based cycling rental service.",
    image:
      "https://ciclosfera.com/img/107512ad16b7aa156b772a04a1bbd9bb.872.0.0.0.3f7600ab.webp",
    link: "https://www.kelta.com", // Replace with the actual URL
  },
  {
    title: "Scholarden",
    description: "GRE test preparation platform.",
    image:
      "https://i.vimeocdn.com/video/1156140231-1cce687b1bd0ad77c26edb6c7f1e63ec605da5fa1b7f6b3c8553d52c3b971c0a-d_640?f=webp",
    link: "https://www.scholarden.com", // Replace with the actual URL
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`project-card ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
