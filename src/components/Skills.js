// src/components/Skills.js
import React from "react";
import { motion } from "framer-motion";
import "../Skills.css";

const Skills = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Angular.js",
    "Socket.io",
    "Containerized deployment",
    "Docker",
    "Basic Kubernetes",
    "Git",
    "Azure Devops",
    "APIs",
    "Figma",
    "HTML 5",
    "Advance CSS framework",
    "CSS",
  ];

  return (
    <motion.section
      className="skills-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="skills-title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>
      <motion.ul
        className="skills-list"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="skill-item"
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default Skills;
