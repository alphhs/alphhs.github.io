import { useState } from "react";
import calculator from "./images/calculator.jpg";
import { motion } from "framer-motion";
import expense from "./images/expense.jpg";
import onepiece from "./images/onepiece.jpg";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import travel from "./images/travel.jpg";
import trivia from "./images/trivia.jpg";
import weather from "./images/weather.jpg";
import "./Cards.scss";
const DefaultWorks = [
  {
    title: "Calculator",
    description: "Basic Calculator App",
    projectLink: "https://alphhs.github.io/calculator/",
    codeLink: "https://github.com/alphhs/calculator",
    imgUrl: calculator,
    tags: "Utility",
  },
  {
    title: "Expense Tracker",
    description: "Simple expenditure tracker app.",
    projectLink: "https://alphhs.github.io/expense-tracker/",
    imgUrl: expense,
    codeLink: "https://github.com/alphhs/expense-tracker",
    tags: "Business",
  },
  {
    title: "One Piece Memory game",
    description: "See how many characters you can memorize",
    projectLink: "https://alphhs.github.io/onepiece-memory-game/",
    imgUrl: onepiece,
    codeLink: "https://github.com/alphhs/onepiece-memory-game",
    tags: "Game",
  },
  {
    title: "Weather App",
    description: "Weather app that tells basic info on current weather",
    projectLink: "https://alphhs.github.io/weather-app-v1/",
    imgUrl: weather,
    codeLink: "https://github.com/alphhs/weather-app-v1",
    tags: "Utility",
  },
  {
    title: "Travel Agency Website",
    description: "Landing page for travel agency companies",
    projectLink: "https://alphhs.github.io/travel-agency-page/",
    codeLink: "https://github.com/alphhs/travel-agency-page",
    imgUrl: travel,
    tags: "Business",
  },
  {
    title: "Trivia question generator",
    description: "Flashcard styled trivia question generator",
    projectLink: "https://alphhs.github.io/flashcard-game/",
    imgUrl: trivia,
    codeLink: "https://github.com/alphhs/flashcard-game",
    tags: "Game",
  },
];

const Cards = () => {
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  const [activeFilter, setActiveFilter] = useState("All");
  const [works, setWorks] = useState(DefaultWorks);
  const [filterWork, setFilterWork] = useState(DefaultWorks);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  return (
    <div className="app__container">
      <h2 className="head-text">
        My Creative <span>Portfolio</span>
      </h2>
      <div className="app__work-filter">
        {["Game", "Business", "Utility", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Cards;
