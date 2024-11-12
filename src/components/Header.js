// src/components/Header.js
import React from "react";
import { motion } from "framer-motion";
import "../Header.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Header Content */}
      <div className="header-content">
        {/* Left section for name, role, and quote */}
        <motion.div
          className="header-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Front End Engineer</h2>
          <p>
            "I am committed to pioneering the future of digital experiences by
            designing seamless, intuitive, and user-centric solutions. Every
            project I undertake is driven by a desire to create frictionless
            interactions that empower users, foster connections, and elevate
            their digital journey. By leveraging creativity, advanced
            technologies, and a user-first approach, I aim to transform complex
            challenges into simple, elegant solutions that leave a lasting
            impact"
          </p>
        </motion.div>

        {/* Right section for image */}
        <motion.div
          className="header-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQH4Y150gEqDcQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708933733034?e=1736985600&v=beta&t=MA66UeySJvLwHZ8WXq7srdRebHpREzPm47Ar_6vkvpU"
            alt="Your Profile"
            className="profile-image"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
