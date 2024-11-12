// src/components/Footer.js
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import "../Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Contact Information Section */}
      <motion.div
        className="contact-info"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="phone-number">
          <FaPhone /> +92 (315) 5131510
        </p>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        className="social-icons"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <a
          href="https://www.linkedin.com"
          target="https://www.linkedin.com/in/samad-ullah95/"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com"
          target="https://github.com/Samad-Ullah"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com"
          target="https://www.instagram.com/ullahsamad/"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
      </motion.div>

      {/* Footer Text */}
      <motion.div
        className="footer-text"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <p>© 2024 All Rights Reserved</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
