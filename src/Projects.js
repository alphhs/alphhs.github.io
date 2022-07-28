import React from "react";
import "./Projects.css";
import calculator from "./images/calculator.jpg";
import expense from "./images/expense.jpg";
import onepiece from "./images/onepiece.jpg";
import travel from "./images/travel.jpg";
import trivia from "./images/trivia.jpg";
import weather from "./images/weather.jpg";
import Project from "./Project";
const myprojects = [
  {
    name: "Calculator App",
    desc: "Simple Calculator app that persists on refresh",
    src: calculator,
  },
  {
    name: "Expense",
    desc: "Simple Calculator app that persists on refresh",
    src: expense,
  },
  {
    name: "One Piece",
    desc: "Simple Calculator app that persists on refresh",
    src: onepiece,
  },
  {
    name: "Weather App",
    desc: "Simple Calculator app that persists on refresh",
    src: weather,
  },
  {
    name: "Travel Agency",
    desc: "Simple Calculator app that persists on refresh",
    src: travel,
  },
  {
    name: "Trivia Game",
    desc: "Simple Calculator app that persists on refresh",
    src: trivia,
  },
];
const Projects = () => {
  return (
    <div className="app__projects-container">
      <h1>My Projects</h1>
      <div className="app__projects-cards-grid">
        {myprojects.map((project, index) => (
          <Project name={project.name} desc={project.desc} src={project.src} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
