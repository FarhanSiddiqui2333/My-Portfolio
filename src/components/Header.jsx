import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.png";

const Header = ({ props }) => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="Loading..."
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="300"
          />
        </Link>
      </div>
      <div className="notifysec">
        <div className="links">
          <Link to="/">
            <button
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <i className="fa-solid fa-house"></i> HOME
            </button>
          </Link>
          <Link to="/about">
            <button
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <i className="fa-solid fa-user-tie"></i> ABOUT
            </button>
          </Link>
          <Link to="/projects">
            <button
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="600"
            >
              <i className="fa-solid fa-diagram-project"></i> PROJECTS
            </button>
          </Link>
          <Link to="/career">
            <button
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <i className="fa-solid fa-chart-simple"></i> CAREER
            </button>
          </Link>
        </div>
        <div className="btn">
          <i
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="fa-solid fa-message"
            onClick={() => {
              props(true);
            }}
          ></i>
          <button
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="900"
            onClick={() => {
              props(true);
            }}
          >
            <i className="fa-solid fa-user"></i> HIRE ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
