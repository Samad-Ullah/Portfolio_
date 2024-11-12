// src/components/About.js
import React from "react";
import { motion } from "framer-motion";
import "../About.css";

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="about-title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="about-description"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        whileHover={{ scale: 1.03 }}
      >
        I’m a passionate software developer with a love for coding, solving
        problems, and learning new technologies. I specialize in front-end
        development and have experience with various technologies like ,
        JavaScript, TypeScript , Advance frontend frameworks and more...
      </motion.p>

      <motion.div
        className="about-highlights"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h3>Skills & Highlights</h3>
        <ul>
          <li>
            Expertise in JS, TS, React.js, Next.js, Angular.js, Socket.io and
            CSS
          </li>
          <li>Version Control (Git , Azure Devops)</li>
          <li>Passion for responsive and dynamic web apps</li>
          <li>UI/UX Design</li>
          <li>Responsive Web Design</li>
          <li>Agile Methodologies</li>
          <li>Experience with animation libraries (Framermotion.js)</li>
          <li>Problem-Solving & Debugging</li>
          <li>User-centered design principles</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default About;
