import { Link } from "react-router-dom";
import "../STYLE/Footer.css";
export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="top-number top-item">04/</div>
        <div className="top-question wanttohire">Want to hire me?</div>
        <div className="top-request top-item">Send me a message</div>
      </div>
      <div className="middle-container">
        <div className="footer-middle">
          <a href="mailto:alphhhss@gmail.com" className="middle-link">
            Alphhhss@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};
