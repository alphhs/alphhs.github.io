import { Link } from "react-router-dom";
import React from "react";
import "../STYLE/Herosection2.css";

export const HeroSection2 = () => {
  return (
    <div className="containers2">
      <div className="hero2-container">
        <div className="hero2-top">
          <div className="top-left-text" id="section1">
            01/
          </div>
        </div>
        <div className="hero2-bottom">
          <div className="top-right-text">
            I'm passionate about programming and technology in general. I love
            the thought process put into when designing UIs and UXs of websites.
            I'll never stop learning and improving.
          </div>
          <div className="bottom-right-text">
            I also have many other interests as well. During the times that I'm
            not coding, I would probably be watching Youtube videos or playing
            some instruments.
          </div>
        </div>
      </div>
    </div>
  );
};
