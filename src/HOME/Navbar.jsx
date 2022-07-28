import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../STYLE/Navbar.css";

export const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div className="navbar-container">
      <div className="navbar-title">
        <Link to="/" className="navbar-title-link">
          Alphss <i className="fa fa-code" />
        </Link>
      </div>
      <div className={`menu ${mobile ? "active" : ""}`}>
        Menu <i className="fa fa-bars" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-menu-list">
          <Link className="navbar-menu-link" to="/">
            Home,
          </Link>
        </li>
        <li className="navbar-menu-list">
          <Link className="navbar-menu-link" to="/projects">
            Projects,
          </Link>
        </li>

        <li className="navbar-menu-list">
          <Link className="navbar-menu-link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};
