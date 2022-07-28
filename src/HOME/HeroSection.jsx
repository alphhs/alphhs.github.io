import "../STYLE/HeroSection.css";
import { useState } from "react";
export const HeroSection = () => {
  const stick = () => {
    setBackground(true);
  };
  const [background, setBackground] = useState(false);
  window.addEventListener("onScroll", stick);

  return (
    <div className="container">
      <div className="top-container">
        <div className="navbar-info-container">
          <div className="navbar-info">Currently self-taught web developer</div>
          <div className="navbar-info">Based in Ulaanbaatar, Mongolia</div>
        </div>
        <div className={`top-text ${background && "active"}`}>
          FRONT-END DEVELOPER
        </div>
        <div className="image-wrapper">
          <img
            alt="keyboard"
            className="top-image"
            src="https://images.unsplash.com/photo-1612758272676-dec3a658080e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-icon">
          <a href="#section1" className="bottom-arrow">
            <i className="fa fa-arrow-down" />
          </a>
        </div>
        <div className="bottom-text">
          Aspiring future front-end web developer.
        </div>
        <div className="bottom-title">ARIUNBILEG GARAMAYUSH</div>
      </div>
    </div>
  );
};
