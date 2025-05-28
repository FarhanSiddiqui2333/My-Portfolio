import AnimatedBlob from "../components/AnimatedBlob";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css-3.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/Tailwind CSS.png";
import bootstrapLogo from "../assets/bootstrap.png";
import nodejsLogo from "../assets/nodejs.png";
import mysqlLogo from "../assets/mysql-database.png";
import bg from "../assets/bg.png";
import gearImg from "../assets/gear.png";
import Header from "./Header";
import NavPart from "./NavPart";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <Popup onClose={() => setIsOpen(false)} />}
      <div className="mainLanding">
        <div className="section-wrapper">
          <AnimatedBlob />
          <Header props={setIsOpen} />
          <section className="hero">
            <div className="top">
              <NavPart />
              <div className="secondPart">
                <div className="mainContent">
                  <h2
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="900"
                  >
                    I am <span>Frontend Developer</span>
                  </h2>
                  <h1
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="850"
                  >
                    Hi, I’m <span>Farhan Siddiqui</span>
                  </h1>
                  <p
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="800"
                  >
                    I am a Frontend Developer with a passion for creating
                    beautiful and functional web applications. I have experience
                    in HTML, CSS, JavaScript, React, and other modern web
                    technologies. I enjoy solving complex problems and
                    continuously learning new skills to stay up-to-date with the
                    latest trends in the web development. My goal is to deliver
                    high-quality, user-friendly interfaces that provide great
                    user experiences.
                  </p>
                  <div className="skills">
                    <span
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="750"
                    >
                      <img src={htmlLogo} alt="" />
                      HTML
                    </span>
                    <span
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="700"
                    >
                      <img src={cssLogo} alt="" />
                      CSS
                    </span>
                    <span
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="650"
                    >
                      <img src={jsLogo} alt="" />
                      JAVA SCRIPT
                    </span>
                    <span
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="600"
                    >
                      <img src={reactLogo} alt="" />
                      REACT
                    </span>
                    <span
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="550"
                    >
                      <img src={bootstrapLogo} alt="" />
                      BOOTSTRAP
                    </span>
                    <span
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="500"
                    >
                      <img src={tailwindLogo} alt="" />
                      TAILWIND
                    </span>
                    <span
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="450"
                    >
                      <img src={mysqlLogo} alt="" />
                      MySQL
                    </span>
                    <span
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="400"
                    >
                      <img src={nodejsLogo} alt="" />
                      NODE JS...
                    </span>
                  </div>
                  <div>
                    <button
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="350"
                      className="btn"
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    >
                      Contact Me
                    </button>
                    <Link to="/projects">
                      <button
                        className="btn projectBTN"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="300"
                      >
                        My Work
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="thirdPart"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <div className="img">
                  <img src={gearImg} alt="img" className="animImg" />
                  <img src={bg} alt="hero" />
                </div>
              </div>
            </div>
            <div className="bottom">
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="300"
              >
                <span>
                  1
                  <sup>
                    <i className="fa-solid fa-plus"></i>
                  </sup>
                </span>
                <p>
                  Year of <br /> Experience
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="400"
              >
                <span>
                  50
                  <sup>
                    <i className="fa-solid fa-plus"></i>
                  </sup>
                </span>
                <p>
                  Personal <br /> Project Completed
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <span>
                  1
                  <sup>
                    <i className="fa-solid fa-plus"></i>
                  </sup>
                </span>
                <p>
                  Commercial <br /> Project Completed
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="600"
              >
                <span>
                  4
                  <sup>
                    <i className="fa-solid fa-plus"></i>
                  </sup>{" "}
                </span>
                <p>
                  Languages <br /> Mastered
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="700"
              >
                <span>
                  1
                  <sup>
                    <i className="fa-solid fa-plus"></i>
                  </sup>
                </span>
                <p>
                  Statisfied <br /> Client
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                <span>
                  2
                  <sup>
                    <i className="fa-solid fa-plus"></i>
                  </sup>{" "}
                </span>
                <p>
                  Technologies <br /> Mastered
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Hero;
