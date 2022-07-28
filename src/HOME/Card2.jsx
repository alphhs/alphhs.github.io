import "../STYLE/Card2.css";
import { Link } from "react-router-dom";
export const Card2 = () => {
  return (
    <div className="container3">
      <div className="title-number">03/</div>
      <div className="middle-section">
        <div className="title1">READING,</div>
        <div className="pic-wrapper">
          <img
            className="pic"
            alt="reading"
            src="https://images.unsplash.com/photo-1585160227948-e3f97c34b979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1487&q=80"
          />
          <div className="title2">CUBING,</div>
          <div className="title3">MUSIC.</div>
          <div className="bottom-text">
            <div className="description-text">
              I have diverse range of hobbies, on which I spend majority of my
              leisure time.
            </div>
            <div className="about-me">
              <Link to="/about">More about me</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="third-section">
        <div className="title-text">
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
};
