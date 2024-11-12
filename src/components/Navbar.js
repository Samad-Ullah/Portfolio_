// src/components/Navbar.js
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo or Home Link */}
      <Link to="/" className="navbar-logo">
        Samad Ullah
      </Link>

      {/* Navbar Links */}
      <ul className="navbar-links">
        <li>
          <NavLink to="/" activeClassName="active" exact>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" activeClassName="active">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" activeClassName="active">
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
