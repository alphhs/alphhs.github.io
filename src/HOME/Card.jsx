import React from "react";
import { Link } from "react-router-dom";
import "../STYLE/Card.css";

export const Card = (props) => {
  return (
    <div className="section3-container">
      <div className="title-box">
        <div className="title-text left">{props.titleNumber}</div>
        <div className="title-text interest">{props.titleText}</div>
      </div>
      <div className="content-container">
        <div className="content-text">
          <div className="content-title">{props.title}</div>
          <div className="content-description">
            <Link to={props.link} className="content-description-link">
              {props.description}
            </Link>
            <div className="underline" />
          </div>
        </div>
        <div className="content-picture">
          <div className="picture-wrap">
            <img className="content-pic" src={props.src} alt="singing" />
          </div>
        </div>
      </div>
    </div>
  );
};
