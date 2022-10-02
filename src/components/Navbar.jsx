import React from "react";
import { NavLink } from "react-router-dom";
import "../components/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink src="" to="/" className="nav-logo">
          {" "}
          Logotype{" "}
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/home" activeclassname="active" className="nav-links">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/showcase"
              activeclassname="active"
              className="nav-links"
            >
              Showcase
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" activeclassname="active" className="nav-links">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
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
