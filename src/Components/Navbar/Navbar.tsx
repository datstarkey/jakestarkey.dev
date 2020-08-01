import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <NavLink className="link-text" activeClassName="link-active" to="/about">
          About
        </NavLink>

        <NavLink className="link-text" activeClassName="link-active" to="/skills">
          Skills
        </NavLink>

        <NavLink className="link-text" activeClassName="link-active" to="/projects">
          Projects
        </NavLink>

        <NavLink className="link-text" activeClassName="link-active" to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
