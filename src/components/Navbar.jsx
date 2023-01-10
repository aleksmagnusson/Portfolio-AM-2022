import React from "react";
import { NavLink } from "react-router-dom";
import "../components/navbar.css";
import mainLogo from '../assets/Logoamweb400400gold.png'

function Navbar() {



  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink src="Logoamweb400400gold.png" to="/">
          <img src={mainLogo} alt="AM" />
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink id="home" to="/#home" activeclassname="active" className="nav-links">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              id="showcase"
              to="/#showcase"
              activeclassname="active"
              className="nav-links"
            >
              Showcase
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink id="about" to="/#about" activeclassname="active" className="nav-links">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              id="contact"
              to="/#contact"
              activeclassname="active"
              className="nav-links"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
