import React from "react";

const Project = ({ name, desc, src }) => {
  return (
    <div className="app__projects-project">
      <div className="app__projects-project-pic-wrapper">
        <img className="app__projects-project-pic" src={src} alt={name} />
      </div>
      <div className="app__projects-project-text">
        <div>{name}</div>
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default Project;
