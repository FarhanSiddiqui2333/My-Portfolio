import herobg from "../assets/hero.png";
import "../App.css";
import CV from "../assets/RESUME.png";

import { Link } from "react-router-dom";
const NavPart = () => {
  return (
    <div className="firstPart">
      <div
        className="nav"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <Link to="/">
          <button>
            <i className="fa-solid fa-house"></i>
          </button>
        </Link>
        <Link to="/about">
          <button>
            <i className="fa-solid fa-user-tie"></i>
          </button>
        </Link>
        <Link to="/projects">
          <button>
            <i className="fa-solid fa-diagram-project"></i>
          </button>
        </Link>
        <Link to="/career">
          <button>
            <i className="fa-solid fa-chart-simple"></i>
          </button>
        </Link>
      </div>
      <div
        className="profile"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <img src={herobg} alt="" />
        <span>Farhan Siddiqui</span>
        <p>farhansiddiqui2333@gmail.com</p>
        <p>Github: farhansiddiqui2333</p>
        <p>No. 03473824314</p>
        <p>Location: Pakistan/ Karachi</p>
        <a href={CV} download="Resume">
          <button>
            Download CV <i className="fa-solid fa-download"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavPart;
