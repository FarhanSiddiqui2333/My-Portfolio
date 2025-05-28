import React, { useState } from "react";
import NavPart from "../components/NavPart";
import "../App.css";
import Header from "../components/Header";
import AnimatedBlob from "../components/AnimatedBlob";
import Popup from "../components/Popup";
import Footer from "../components/Footer";

const Career = () => {
  // State to manage the popup visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <Popup onClose={() => setIsOpen(false)} />}

      <div className="parentCareer">
        <div className="section-wrapper career">
          <div className="leftBar">
            <Header props={setIsOpen} />
          </div>
          <AnimatedBlob />
          <div className="career hero">
            <NavPart />
            <div className="career_container">
              <div className="career_top">
                <div
                  className="card first"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="300"
                >
                  <div className="circle">84%</div>
                  <span>ACCURACY</span>
                  <p>
                    Precision is my strength—I don't just guess, I get it right.
                  </p>
                </div>
                <div
                  className="card second"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="350"
                >
                  <div className="circle">50%</div>
                  <span>EXPERIENCE</span>
                  <p>
                    Backed by experience, my precision isn't luck—it's earned.
                  </p>
                </div>
                <div
                  className="card third"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="400"
                >
                  <div className="circle">100%</div>
                  <span>CONSISTENCY</span>
                  <p>
                    My consistency—accuracy isn’t occasional, it’s standard.
                  </p>
                </div>
                <div
                  className="card detail"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="450"
                >
                  <h2>EXPERIENCE </h2>
                  <h6>Taking Experience as well as I can.</h6>
                  <h3>50%</h3>
                  <p>
                    I have to gain experience to grow both of the personally and
                    professionally. It’s through real-world challenges, an
                    hands-on learning, and practical exposure that I can truly
                    develop my skills and build confidence.
                  </p>
                </div>
                <div
                  className="card percentage"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <div className="skill_info">
                    <h2>SKILLS</h2>
                    <span>About my skills and it accuracy.</span>
                  </div>
                  <div className="group">
                    <span>JAVASCRIPT</span>
                    <div className="percen one"></div>
                  </div>
                  <div className="group">
                    <span>HTML/CSS</span>
                    <div className="percen two"></div>
                  </div>
                  <div className="group">
                    <span>REACT JS</span>
                    <div className="percen three"></div>
                  </div>
                </div>
              </div>
              <div className="career_middle">
                <div
                  className="chart-container"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="550"
                >
                  <svg
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "5px" }}
                    viewBox="0 0 600 280"
                  >
                    <g stroke="#ffffff8e" stroke-width="0.5">
                      <line x1="0" y1="60" x2="600" y2="60" />
                      <line x1="0" y1="120" x2="600" y2="120" />
                      <line x1="0" y1="180" x2="600" y2="180" />
                      <line x1="0" y1="240" x2="600" y2="240" />
                    </g>

                    <path
                      d="M 0 250 Q 100 180, 150 200 T 300 100 T 450 180 T 600 150 L600 300 L0 300 Z"
                      fill="rgba(255,255,255,0.05)"
                    />

                    <path
                      d="M 0 250 Q 100 180, 150 200 T 300 100 T 450 180 T 600 150"
                      stroke="url(#grad1)"
                      stroke-width="3"
                      fill="none"
                    />

                    <defs>
                      <linearGradient
                        id="grad1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stop-color="#ff9900" />
                        <stop offset="50%" stop-color="#ff3366" />
                        <stop offset="100%" stop-color="#cc66ff" />
                      </linearGradient>
                    </defs>

                    <circle cx="150" cy="200" r="5" fill="white" />
                    <circle cx="300" cy="100" r="5" fill="white" />
                    <circle cx="450" cy="180" r="5" fill="white" />

                    <line
                      x1="150"
                      y1="200"
                      x2="150"
                      y2="290"
                      stroke="#aaa"
                      stroke-width="1"
                      stroke-dasharray="2,2"
                    />
                    <line
                      x1="300"
                      y1="100"
                      x2="300"
                      y2="290"
                      stroke="#aaa"
                      stroke-width="1"
                      stroke-dasharray="2,2"
                    />
                    <line
                      x1="450"
                      y1="180"
                      x2="450"
                      y2="290"
                      stroke="#aaa"
                      stroke-width="1"
                      stroke-dasharray="2,2"
                    />
                  </svg>

                  <div className="chart-text data-01">Frontend</div>
                  <div className="chart-text data-02">Database</div>
                  <div className="chart-text data-03">Backend</div>
                  <div className="chart-text data-04">Jan</div>
                  <div className="chart-text data-05">Feb</div>
                  <div className="chart-text data-06">Mar</div>
                  <div className="chart-text data-07">Apr</div>
                </div>
                <div
                  className="bar_container"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                >
                  <div className="bars">
                    <div className="bar one">
                      <div className="groupA"></div>
                      <div className="groupA"></div>
                      <div className="groupA"></div>
                      <div className="groupA"></div>
                      <div className="groupA"></div>
                      <div className="groupA B"></div>
                      <div className="groupB"></div>
                      <div className="groupB"></div>
                      <div className="groupB"></div>
                      <div className="groupB"></div>
                      <div className="groupB"></div>
                      <div className="groupB C"></div>
                      <div className="groupC"></div>
                      <div className="groupC"></div>
                      <div className="groupC"></div>
                      <div className="groupC"></div>
                      <div className="groupC D"></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="bar two">
                      <div className="groupA"></div>
                      <div className="groupA"></div>
                      <div className="groupA"></div>
                      <div className="groupA"></div>
                      <div className="groupA"></div>
                      <div className="groupA B"></div>
                      <div className="groupB"></div>
                      <div className="groupB"></div>
                      <div className="groupB"></div>
                      <div className="groupB"></div>
                      <div className="groupB"></div>
                      <div className="groupB C"></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="bar three">
                      <div className="groupA"></div>
                      <div className="groupA"></div>
                      <div className="groupA"></div>
                      <div className="groupA"></div>
                      <div className="groupA"></div>
                      <div className="groupA B"></div>
                      <div className="groupB"></div>
                      <div className="groupB"></div>
                      <div className="groupB"></div>
                      <div className="groupB"></div>
                      <div className="groupB"></div>
                      <div className="groupB C"></div>
                      <div className="groupC"></div>
                      <div className="groupC"></div>
                      <div className="groupC"></div>
                      <div className="groupC"></div>
                      <div className="groupC D"></div>
                      <div className="groupD"></div>
                      <div className="groupD"></div>
                      <div className="groupD"></div>
                      <div className="groupD"></div>
                    </div>
                    <div className="bar four">
                      <div className="groupA"></div>
                      <div className="groupA"></div>
                      <div className="groupA"></div>
                      <div className="groupA"></div>
                      <div className="groupA"></div>
                      <div className="groupA B"></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="content">
                    <h2>
                      CAREER <br /> RESULT
                    </h2>
                    <p>
                      Achieving good career results reflects consistent hard
                      work, dedication, and a clear sense of direction. It means
                      reaching milestones, gaining recognition, and growing
                      professionally. These results not only validate one's
                      skills and efforts but also open doors to new
                      opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="career_bottom">
                <div
                  className="activity"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="650"
                >
                  <h2>ACTIVITIES</h2>
                  <p>
                    Engaging in good activities promotes personal growth,
                    well-being, and positive habits. Whether it's learning new
                    skills, helping others, or staying active, these activities
                    contribute to a balanced and fulfilling life.
                  </p>
                  <p>
                    Learning, service, good activities is shaping well-rounded
                    and successful.
                  </p>
                </div>
                <div
                  className="calander"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="700"
                >
                  <h2>Duration</h2>
                  <h3>1 Year +</h3>
                  <div className="dayContainer">
                    <div className="days">
                      <ul>
                        <li className="day">Sun</li>
                        <li>01</li>
                        <li>08</li>
                        <li>15</li>
                        <li>22</li>
                        <li>29</li>
                      </ul>
                      <ul>
                        <li className="day">Mon</li>
                        <li>02</li>
                        <li>09</li>
                        <li>16</li>
                        <li>23</li>
                        <li>30</li>
                      </ul>
                      <ul>
                        <li className="day">Tue</li>
                        <li>03</li>
                        <li>10</li>
                        <li>17</li>
                        <li>24</li>
                        <li>31</li>
                      </ul>
                      <ul>
                        <li className="day">Wed</li>
                        <li>04</li>
                        <li>11</li>
                        <li>18</li>
                        <li>25</li>
                        <li className="next">01</li>
                      </ul>
                      <ul>
                        <li className="day">Thu</li>
                        <li>05</li>
                        <li>12</li>
                        <li>19</li>
                        <li>26</li>
                        <li className="next">02</li>
                      </ul>
                      <ul>
                        <li className="day">Fri</li>
                        <li>06</li>
                        <li>13</li>
                        <li>20</li>
                        <li>27</li>
                        <li className="next">03</li>
                      </ul>
                      <ul>
                        <li className="day">Sat</li>
                        <li>07</li>
                        <li>14</li>
                        <li>21</li>
                        <li>28</li>
                        <li className="next">04</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="skillTyp"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="750"
                >
                  <div className="stick">
                    <div className="roundPosition"></div>
                    <div className="roundPosition circle">
                      <span>74%</span>
                      <p>HTML/CSS</p>
                    </div>
                    <div className="roundPosition circle">
                      <span>92%</span>
                      <p>JAVASCRIPT</p>
                    </div>
                    <div className="roundPosition circle">
                      <span>48%</span>
                      <p>GITHUB</p>
                    </div>
                    <div className="roundPosition circle">
                      <span>98%</span>
                      <p>REACT JS</p>
                    </div>
                    <div className="roundPosition"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Career;
