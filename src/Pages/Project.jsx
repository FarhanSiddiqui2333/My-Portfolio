import React, { useState } from "react";
import Header from "../components/Header";
import AnimatedBlob from "../components/AnimatedBlob";
import NavPart from "../components/NavPart";
import project1PNG from "../assets/project1.jpg";
import project2PNG from "../assets/project2.jpg";
import project3PNG from "../assets/project3.jpg";
import project4PNG from "../assets/project4.jpg";
import project5PNG from "../assets/project5.jpg";
import project6PNG from "../assets/project6.jpg";
import project7PNG from "../assets/project7.jpg";
import project8PNG from "../assets/project8.jpg";
import project9PNG from "../assets/project9.jpg";
import project10PNG from "../assets/project10.jpg";
import project11PNG from "../assets/project11.jpg";
import project12PNG from "../assets/project12.jpg";
import project13PNG from "../assets/project13.jpg";
import project14PNG from "../assets/project14.jpg";
import project15PNG from "../assets/project15.jpg";
import project16PNG from "../assets/project16.jpg";
import project17PNG from "../assets/project17.jpg";
import project18PNG from "../assets/project18.jpg";
import project19PNG from "../assets/project19.jpg";
import project20PNG from "../assets/project20.jpg";
import project21PNG from "../assets/project21.jpg";
import project22PNG from "../assets/project22.jpg";
import project23PNG from "../assets/project23.jpg";
import project24PNG from "../assets/project24.jpg";
import project25PNG from "../assets/project25.jpg";
import project26PNG from "../assets/project26.jpg";
import project27PNG from "../assets/project27.jpg";
import project28PNG from "../assets/project28.jpg";
import project29PNG from "../assets/project29.jpg";
import project30PNG from "../assets/project30.jpg";
import project31PNG from "../assets/project31.jpg";
import project32PNG from "../assets/project32.jpg";
import commercialProject from "../assets/commercialProject.jpg";
import Popup from "../components/Popup";
import Footer from "../components/Footer";

const Project = () => {
  // State to manage the popup visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <Popup onClose={() => setIsOpen(false)} />}

      <div className="projectPage">
        <div className="section-wrapper projects">
          <Header props={setIsOpen} />
          <AnimatedBlob />
          <div className="projectHero hero">
            <div className="links">
              <NavPart />
              <ul>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="300"
                >
                  <h4>COMMERCIAL PROJECTS</h4>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="320"
                >
                  <a href="https://farhansiddiqui-projectupdate.netlify.app/">
                    Start To Finish Printing
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="340"
                >
                  <h4>PERSONAL PROJECTS</h4>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="360"
                >
                  <a href="https://redux-toolkit-weld-nine.vercel.app/">
                    Ecommerce Website (With Redux)
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="380"
                >
                  <a href="https://electronics-store-zeta.vercel.app/">
                    Ecommerce Store (With Redux)
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="400"
                >
                  <a href="https://context-api-kohl.vercel.app/">
                    Ecommerce Website (With Context API)
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="420"
                >
                  <a href="https://farhansiddiqui-portfolio.netlify.app/">
                    Personal Old Portfolio
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="440"
                >
                  <a href="https://farhansiddiqui-ecommerce.netlify.app/">
                    Ecommerce Website (JS)
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="460"
                >
                  <a href="https://farhansiddiqui-table.netlify.app/">
                    Maths Table
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="480"
                >
                  <a href="https://farhansiddiqui-weather.netlify.app/">
                    Weather App
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <a href="https://farhansiddiqui-image.netlify.app/">
                    Image Finder
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="520"
                >
                  <a href="https://farhansiddiqui-movie.netlify.app/">
                    Movie App
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="540"
                >
                  <a href="https://farhansiddiqui-tiktaktoe.netlify.app/">
                    Tik Tak Toe
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="560"
                >
                  <a href="https://farhansiddiqui-quiz.netlify.app/">
                    Quiz App
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="580"
                >
                  <a href="https://farhansiddiqui-calculator.netlify.app/">
                    Caculator
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                >
                  <a href="https://farhansiddiqui-amazonclone.netlify.app/">
                    Amazon Clone
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="620"
                >
                  <a href="https://farhansiddiqui-passwordgenerator.netlify.app/">
                    Random Password Generator
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="640"
                >
                  <a href="https://farhansiddiqui-climate.netlify.app/">
                    Climate App
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="660"
                >
                  <a href="https://farhansiddiqui-gym.netlify.app/">GYM App</a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="680"
                >
                  <a href="https://farhansiddiqui-botchecker.netlify.app/">
                    Robot Checker
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="700"
                >
                  <a href="https://farhansiddiqui-3dcards.netlify.app/">
                    3D Cards
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="720"
                >
                  <a href="https://farhansiddiqui-3danimation.netlify.app/">
                    3D Animation
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="740"
                >
                  <a href="https://farhansiddiqui-todolist.netlify.app/">
                    Todo List
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="760"
                >
                  <a href="https://farhansiddiqui-formvalidation.netlify.app/">
                    Form Submission
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="780"
                >
                  <a href="https://farhansiddiqui-deathdate.netlify.app/">
                    Death Day Caculator
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <a href="https://farhansiddiqui-mobile.netlify.app/">
                    Lock Mobile
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="820"
                >
                  <a href="https://farhansiddiqui-artweb.netlify.app/">
                    Artistic Web
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="840"
                >
                  <a href="https://farhansiddiqui-ytclone.netlify.app/">
                    Youtube Clone
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="860"
                >
                  <a href="https://farhansiddiqui-portfoliodesign.netlify.app/">
                    Portfolio Design
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="880"
                >
                  <a href="https://farhansiddiqui-priodictable.netlify.app/">
                    Preiodic Table
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="900"
                >
                  <a href="https://farhansiddiqui-gym2.netlify.app/">
                    Gym Consultation
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="920"
                >
                  <a href="https://farhansiddiqui-avangers.netlify.app/">
                    Marvel Design
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="940"
                >
                  <a href="https://farhansiddiqui-anim.netlify.app/">
                    Anime Design
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="960"
                >
                  <a href="https://farhansiddiqui-validemail.netlify.app/">
                    Form Validation
                  </a>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="980"
                >
                  <a href="https://farhansiddiqui-planets.netlify.app/">
                    3D Planet Cards
                  </a>
                </li>
              </ul>
            </div>
            <div className="projectContainer_parent">
              <div className="total">
                <h2
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="300"
                >
                  COMMERCIAL PROJECTS
                </h2>
                <h3
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="300"
                >
                  01
                </h3>
              </div>
              <div
                className="projectContainer"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="350"
              >
                <a href="https://farhansiddiqui-projectupdate.netlify.app/">
                  <div className="project">
                    <div className="img">
                      <img src={commercialProject} alt="" />
                    </div>
                    <div className="title">
                      <h4>Start To Finish Printing</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
              </div>
              <div className="total">
                <h2
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="300"
                >
                  PERSONAL PROJECTS
                </h2>
                <h3
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="300"
                >
                  32
                </h3>
              </div>
              <div className="projectContainer">
                <a
                  href="https://farhansiddiqui-calculator.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="320"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project1PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Calculator</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-amazonclone.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="340"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project2PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Amazon Clone</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-passwordgenerator.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="360"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project3PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Random Password Generator</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-climate.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="380"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project4PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Climate App</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-gym.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="400"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project5PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>GYM App</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-botchecker.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="420"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project6PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Robort Checker</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-3dcards.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="440"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project7PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>3D Cards</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-3danimation.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="460"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project8PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>3D Box Animation</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-todolist.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="480"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project9PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Todo List</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-formvalidation.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project10PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Form Submission</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-deathdate.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="520"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project11PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Death Day Calculator</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-mobile.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="540"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project12PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Lock Mobile</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-artweb.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="560"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project13PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Artistic Web</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-ytclone.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="580"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project14PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Youtube Clone</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-portfoliodesign.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project15PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Porfolio Design</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-priodictable.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="620"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project16PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Priodic Table</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-gym2.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="640"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project17PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>GYM Consultation</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-avangers.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="660"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project18PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Marvel Design</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-anim.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="680"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project19PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Anime Design</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-validemail.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="700"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project20PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Form Validation</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-planets.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="720"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project21PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>3D Planets</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://redux-toolkit-weld-nine.vercel.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="740"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project22PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Ecommerce Website (Redux)</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://electronics-store-zeta.vercel.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="760"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project23PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Ecommerce Store (Redux)</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://context-api-kohl.vercel.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="780"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project24PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Ecommerce Website (Context API)</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-portfolio.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project25PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Personal Portfolio</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-ecommerce.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="820"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project26PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Ecommerce Website (JS)</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-movie.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="840"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project27PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Movie App</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-weather.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="860"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project28PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Weather App</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-image.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="880"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project29PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Image Finder</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-table.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="900"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project30PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Maths Table</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-tiktaktoe.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="920"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project31PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Tik Tak Toe</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
                <a
                  href="https://farhansiddiqui-quiz.netlify.app/"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="940"
                >
                  <div className="project">
                    <div className="img">
                      <img src={project32PNG} alt="" />
                    </div>
                    <div className="title">
                      <h4>Quiz Game</h4>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
