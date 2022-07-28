import React from "react";
import { Link } from "react-router-dom";
import "./STYLE/RealFooter.css";
export const RealFooter = () => {
  return (
    <div className="footer-bottom">
      <div className="bottom-left">Ariunbileg Creative Developer</div>
      <ul className="bottom-middle">
        <li className="bottom-list">
          <a href="https://www.instagram.com/alphhs/" className="bottom-link">
            Instagram,
          </a>
        </li>
        <li className="bottom-list">
          <a
            href="https://www.facebook.com/alphhs.ariunbileg"
            className="bottom-link"
          >
            Facebook,
          </a>
        </li>
        <li className="bottom-list">
          <a href="https://github.com/alphhs/" className="bottom-link">
            Github
          </a>
        </li>
      </ul>
      <div className="bottom-right">Development Ariunbileg</div>
    </div>
  );
};
