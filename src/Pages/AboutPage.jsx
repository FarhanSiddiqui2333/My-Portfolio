import React, { useState } from "react";
import Header from "../components/Header";
import AnimatedBlob from "../components/AnimatedBlob";
import aboutBG from "../assets/aboutBG.png";
import NavPart from "../components/NavPart";
import Popup from "../components/Popup";
import Footer from "../components/Footer";

const AboutPage = () => {
  // State to manage the popup visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <Popup onClose={() => setIsOpen(false)} />}

      <div className="aboutPage">
        <div className="section-wrapper anim">
          <AnimatedBlob />
          <Header props={setIsOpen} />
          <div className="aboutHero hero">
            <NavPart />
            <div className="poster">
              <h1
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="750"
              >
                ABOUT ME!
              </h1>
              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="700"
              >
                Hi, I'm Farhan Siddiqui, a passionate and self-driven web
                developer currently continuing my Diploma of Associate
                Engineering (DAE). I specialize in creating dynamic, responsive,
                and user-friendly websites using technologies like HTML, CSS,
                JavaScript, React, and MySQL. With a strong foundation in
                frontend development and ongoing backend learning (MEARN Stack),
                I bring ideas to life on the web.
              </p>
              <ul>
                <li
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="650"
                >
                  <i className="fa-solid fa-check"></i>HTML5, CSS3, JavaScript
                  (ES6+), React.js
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                >
                  <i className="fa-solid fa-check"></i>Responsive Web Design
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="550"
                >
                  <i className="fa-solid fa-check"></i>Bootstrap & Tailwind CSS
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <i className="fa-solid fa-check"></i>Git & GitHub
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="450"
                >
                  <i className="fa-solid fa-check"></i>MongoDB (in progress),
                  MySQL
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="400"
                >
                  <i className="fa-solid fa-check"></i>RESTful APIs (learning)
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="350"
                >
                  <i className="fa-solid fa-check"></i>Node.js, Express.js (in
                  progress)
                </li>
              </ul>
              <button
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="300"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                CONTACT ME
              </button>
            </div>
            <div
              className="img"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <img src={aboutBG} alt="" />
            </div>
          </div>
          <div className="cardsParent">
            <div
              className="card"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="300"
            >
              <h3>
                <i className="fa-brands fa-creative-commons-nd"></i> Client Work
                Section
              </h3>
              <p>
                I've had the privilege to work with several clients on freelance
                projects, ranging from landing pages to full website redesigns.
                My focus is always on understanding their goals and delivering
                projects that meet their expectations — on time and on budget.
              </p>
            </div>
            <div
              className="card"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <h3>
                <i className="fa-solid fa-shield-halved"></i> Skills Snapshot
              </h3>
              <ul>
                <li>HTML5, CSS3, JavaScript (ES6+), React.js</li>
                <li>Responsive Web Design</li>
                <li>Bootstrap & Tailwind CSS</li>
                <li>Figma to HTML/CSS Conversion</li>
                <li>Node.js (in progress), Express.js (in progress)</li>
                <li>MongoDB (in progress), MySQL</li>
                <li>RESTful APIs (learning)</li>
                <li>Git & GitHub</li>
                <li>Figma (UI/UX Prototyping)</li>
                <li>MS Office (Documentation & Client Reports)</li>
                <li>
                  Freelancing Platforms (Client Communication, Delivery &
                  Support)
                </li>
              </ul>
            </div>
            <div
              className="card"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <h3>
                <i className="fa-solid fa-crosshairs"></i> Mission Statement
              </h3>
              <p>
                My mission is to build impactful digital experiences through
                code. Whether it's crafting a user-friendly website or
                optimizing backend performance, I aim to combine creativity with
                logic to provide real value to clients and users alike.
              </p>
            </div>
            <div
              className="card"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="600"
            >
              <h3>
                <i className="fa-solid fa-bars-progress"></i> Professional
                Overview
              </h3>
              <p>
                As a dedicated developer and freelancer, I’ve worked with
                clients to build modern websites and web applications that are
                both functional and visually appealing. From converting Figma
                designs into code to building database-integrated systems, I
                focus on delivering clean, scalable solutions tailored to client
                needs.
              </p>
            </div>
            <div
              className="card"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <h3>
                <i className="fa-solid fa-mobile"></i> Call-to-Action (CTA)
              </h3>
              <p>
                Interested in working together or have a project in mind? Let’s
                connect and build something great together! 📩 [Your email or
                contact link]
              </p>
            </div>
            <div
              className="card"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <h3>
                <i className="fa-solid fa-person-military-to-person"></i>{" "}
                Personal Statement
              </h3>
              <p>
                I’m a continuous learner who’s always exploring new tools,
                frameworks, and techniques. As I grow my backend skills and work
                toward becoming a full-stack MEARN developer, I stay committed
                to providing reliable and efficient web solutions — whether as
                part of a team or for freelance clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
