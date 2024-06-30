import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  FaJs,
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaAndroid,
  FaUnity,
  FaFigma,
  FaWordpress,
  FaElementor,
} from "react-icons/fa";
import "./Skills.css";

const skillGroups = {
  "Front-End": [
    {
      name: "JavaScript",
      proficiency: 80,
      icon: <FaJs className="skill-icon" />,
    },
    {
      name: "React",
      proficiency: 85,
      icon: <FaReact className="skill-icon" />,
    },
    { name: "JSP", proficiency: 85, icon: <FaReact className="skill-icon" /> },
    {
      name: "CSS",
      proficiency: 85,
      icon: <FaCss3Alt className="skill-icon" />,
    },
    {
      name: "Bootstrap",
      proficiency: 85,
      icon: <FaCss3Alt className="skill-icon" />,
    },
    {
      name: "Tailwind",
      proficiency: 85,
      icon: <FaCss3Alt className="skill-icon" />,
    },
  ],
  "Back-End": [
    {
      name: "Node.js",
      proficiency: 90,
      icon: <FaNodeJs className="skill-icon" />,
    },
    {
      name: "Java Spring Boot",
      proficiency: 85,
      icon: <FaJava className="skill-icon" />,
    },
    {
      name: "MySQL",
      proficiency: 75,
      icon: <FaDatabase className="skill-icon" />,
    },
    {
      name: "SQLite",
      proficiency: 80,
      icon: <FaDatabase className="skill-icon" />,
    },
    {
      name: "Python",
      proficiency: 75,
      icon: <FaDatabase className="skill-icon" />,
    },
    {
      name: "NextJS",
      proficiency: 55,
      icon: <FaDatabase className="skill-icon" />,
    },
  ],
  "Mobile & Desktop": [
    {
      name: "Android Studio",
      proficiency: 88,
      icon: <FaAndroid className="skill-icon" />,
    },
    {
      name: "Flutter",
      proficiency: 88,
      icon: <FaReact className="skill-icon" />,
    },
    {
      name: "React Native",
      proficiency: 88,
      icon: <FaReact className="skill-icon" />,
    },
  ],
  "Game Development": [
    {
      name: "Unity",
      proficiency: 85,
      icon: <FaUnity className="skill-icon" />,
    },
    { name: "C#", proficiency: 90, icon: <FaJs className="skill-icon" /> },
    { name: "C++", proficiency: 90, icon: <FaJs className="skill-icon" /> },
  ],
  "Design & Video": [
    {
      name: "Figma",
      proficiency: 85,
      icon: <FaFigma className="skill-icon" />,
    },
    {
      name: "Adobe Photoshop",
      proficiency: 85,
      icon: <FaJs className="skill-icon" />,
    },
    {
      name: "Adobe Illustrator / In-Design",
      proficiency: 85,
      icon: <FaJs className="skill-icon" />,
    },
  ],
  "Web Development": [
    {
      name: "WordPress",
      proficiency: 90,
      icon: <FaWordpress className="skill-icon" />,
    },
    {
      name: "Elementor",
      proficiency: 85,
      icon: <FaElementor className="skill-icon" />,
    },
    {
      name: "WooCommerce",
      proficiency: 80,
      icon: <FaWordpress className="skill-icon" />,
    },
    {
      name: "Joomla",
      proficiency: 70,
      icon: <FaWordpress className="skill-icon" />,
    },
  ],
};

const Skills = () => {
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    setAnimateProgress(true);
  }, []);

  return (
    <section className="skills-section">
      <Container className="skills-container">
        <Row>
          <Col lg={4} className="skills-column">
            <div className="skill-category">
              <h2>Front-End</h2>
              <Row>
                {skillGroups["Front-End"].map((skill, skillIndex) => (
                  <Col key={skillIndex} xs={4} className="skill-col">
                    <div className="skill-wrapper">
                      <CircularProgressbar
                        value={animateProgress ? skill.proficiency : 0}
                        text={`${skill.proficiency}%`}
                        styles={buildStyles({
                          textColor: "#fff",
                          pathColor: "#0ff",
                          trailColor: "#2a2a2a",
                          textSize: "1.4rem",
                          pathTransitionDuration: 2,
                        })}
                      />
                      <div className="skill-name">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={4} className="skills-column">
            <div className="skill-category">
              <h2>Back-End</h2>
              <Row>
                {skillGroups["Back-End"].map((skill, skillIndex) => (
                  <Col key={skillIndex} xs={4} className="skill-col">
                    <div className="skill-wrapper">
                      <CircularProgressbar
                        value={animateProgress ? skill.proficiency : 0}
                        text={`${skill.proficiency}%`}
                        styles={buildStyles({
                          textColor: "#fff",
                          pathColor: "#0ff",
                          trailColor: "#2a2a2a",
                          textSize: "1.4rem",
                          pathTransitionDuration: 2,
                        })}
                      />
                      <div className="skill-name">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={4} className="skills-column">
            <div className="skill-category">
              <h2>Web Development</h2>
              <Row>
                {skillGroups["Web Development"].map((skill, skillIndex) => (
                  <Col key={skillIndex} xs={4} className="skill-col">
                    <div className="skill-wrapper">
                      <CircularProgressbar
                        value={animateProgress ? skill.proficiency : 0}
                        text={`${skill.proficiency}%`}
                        styles={buildStyles({
                          textColor: "#fff",
                          pathColor: "#0ff",
                          trailColor: "#2a2a2a",
                          textSize: "1.4rem",
                          pathTransitionDuration: 2,
                        })}
                      />
                      <div className="skill-name">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="skills-column">
            <div className="skill-category">
              <h2>Game Development</h2>
              <Row>
                {skillGroups["Game Development"].map((skill, skillIndex) => (
                  <Col key={skillIndex} xs={4} className="skill-col">
                    <div className="skill-wrapper">
                      <CircularProgressbar
                        value={animateProgress ? skill.proficiency : 0}
                        text={`${skill.proficiency}%`}
                        styles={buildStyles({
                          textColor: "#fff",
                          pathColor: "#0ff",
                          trailColor: "#2a2a2a",
                          textSize: "1.4rem",
                          pathTransitionDuration: 2,
                        })}
                      />
                      <div className="skill-name">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={4} className="skills-column">
            <div className="skill-category">
              <h2>Mobile</h2>
              <Row>
                {skillGroups["Mobile & Desktop"].map((skill, skillIndex) => (
                  <Col key={skillIndex} xs={4} className="skill-col">
                    <div className="skill-wrapper">
                      <CircularProgressbar
                        value={animateProgress ? skill.proficiency : 0}
                        text={`${skill.proficiency}%`}
                        styles={buildStyles({
                          textColor: "#fff",
                          pathColor: "#0ff",
                          trailColor: "#2a2a2a",
                          textSize: "1.4rem",
                          pathTransitionDuration: 2,
                        })}
                      />
                      <div className="skill-name">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={4} className="skills-column">
            <div className="skill-category">
              <h2>Design</h2>
              <Row>
                {skillGroups["Design & Video"].map((skill, skillIndex) => (
                  <Col key={skillIndex} xs={4} className="skill-col">
                    <div className="skill-wrapper">
                      <CircularProgressbar
                        value={animateProgress ? skill.proficiency : 0}
                        text={`${skill.proficiency}%`}
                        styles={buildStyles({
                          textColor: "#fff",
                          pathColor: "#0ff",
                          trailColor: "#2a2a2a",
                          textSize: "1.4rem",
                          pathTransitionDuration: 2,
                        })}
                      />
                      <div className="skill-name">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
