import React from "react";
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
    { name: "JavaScript", proficiency: 80, icon: <FaJs /> },
    { name: "React", proficiency: 85, icon: <FaReact /> },
    { name: "JSP", proficiency: 85, icon: <FaReact /> },
    { name: "CSS", proficiency: 85, icon: <FaCss3Alt /> },
    { name: "Bootstrap", proficiency: 85, icon: <FaCss3Alt /> },
    { name: "Tailwind", proficiency: 85, icon: <FaCss3Alt /> },
  ],
  "Back-End": [
    { name: "Node.js", proficiency: 90, icon: <FaNodeJs /> },
    { name: "Java Spring Boot", proficiency: 85, icon: <FaJava /> },
    { name: "MySQL", proficiency: 75, icon: <FaDatabase /> },
    { name: "SQLite", proficiency: 80, icon: <FaDatabase /> },
    { name: "Python", proficiency: 75, icon: <FaDatabase /> },
    { name: "NextJS", proficiency: 55, icon: <FaDatabase /> },
  ],
  "Mobile & Desktop": [
    { name: "Android Studio", proficiency: 88, icon: <FaAndroid /> },
    { name: "Flutter", proficiency: 88, icon: <FaReact /> },
    { name: "React Native", proficiency: 88, icon: <FaReact /> },
  ],
  "Game Development": [
    { name: "Unity", proficiency: 85, icon: <FaUnity /> },
    { name: "C#", proficiency: 90, icon: <FaJs /> },
    { name: "C++", proficiency: 90, icon: <FaJs /> },
  ],
  "Design & Video": [
    { name: "Figma", proficiency: 85, icon: <FaFigma /> },
    { name: "Adobe Photoshop", proficiency: 85, icon: <FaJs /> },
    { name: "Adobe Illustrator", proficiency: 85, icon: <FaJs /> },
    { name: "Adobe In-Design", proficiency: 85, icon: <FaJs /> },
  ],
  "Web Development": [
    { name: "WordPress", proficiency: 90, icon: <FaWordpress /> },
    { name: "Elementor", proficiency: 85, icon: <FaElementor /> },
    { name: "WooCommerce", proficiency: 80, icon: <FaWordpress /> },
    { name: "Joomla", proficiency: 70, icon: <FaWordpress /> },
  ],
};

const Skills = () => (
  <section className="skills-section">
    <Container className="skills-container">
      <Row>
        <Col md={4} className="skills-column">
          <div className="skill-category">
            <h2>Front-End</h2>
            <Row>
              {skillGroups["Front-End"].map((skill, skillIndex) => (
                <Col key={skillIndex} md={4} className="skill-col">
                  <div className="skill-wrapper">
                    <CircularProgressbar
                      value={skill.proficiency}
                      text={`${skill.proficiency}%`}
                      styles={buildStyles({
                        textColor: "#fff",
                        pathColor: "#0ff",
                        trailColor: "#2a2a2a",
                        textSize: "16px",
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
        <Col md={4} className="skills-column">
          <div className="skill-category">
            <h2>Back-End</h2>
            <Row>
              {skillGroups["Back-End"].map((skill, skillIndex) => (
                <Col key={skillIndex} md={4} className="skill-col">
                  <div className="skill-wrapper">
                    <CircularProgressbar
                      value={skill.proficiency}
                      text={`${skill.proficiency}%`}
                      styles={buildStyles({
                        textColor: "#fff",
                        pathColor: "#0ff",
                        trailColor: "#2a2a2a",
                        textSize: "16px",
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
        <Col md={4} className="skills-column">
          <div className="skill-category">
            <h2>Web Development</h2>
            <Row>
              {skillGroups["Web Development"].map((skill, skillIndex) => (
                <Col key={skillIndex} md={4} className="skill-col">
                  <div className="skill-wrapper">
                    <CircularProgressbar
                      value={skill.proficiency}
                      text={`${skill.proficiency}%`}
                      styles={buildStyles({
                        textColor: "#fff",
                        pathColor: "#0ff",
                        trailColor: "#2a2a2a",
                        textSize: "16px",
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
        <Col md={4} className="skills-column">
          <div className="skill-category">
            <h2>Game Development</h2>
            <Row>
              {skillGroups["Game Development"].map((skill, skillIndex) => (
                <Col key={skillIndex} md={4} className="skill-col">
                  <div className="skill-wrapper">
                    <CircularProgressbar
                      value={skill.proficiency}
                      text={`${skill.proficiency}%`}
                      styles={buildStyles({
                        textColor: "#fff",
                        pathColor: "#0ff",
                        trailColor: "#2a2a2a",
                        textSize: "16px",
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
        <Col md={4} className="skills-column">
          <div className="skill-category">
            <h2>Design</h2>
            <Row>
              {skillGroups["Design & Video"].map((skill, skillIndex) => (
                <Col key={skillIndex} md={4} className="skill-col">
                  <div className="skill-wrapper">
                    <CircularProgressbar
                      value={skill.proficiency}
                      text={`${skill.proficiency}%`}
                      styles={buildStyles({
                        textColor: "#fff",
                        pathColor: "#0ff",
                        trailColor: "#2a2a2a",
                        textSize: "16px",
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
        <Col md={4} className="skills-column">
          <div className="skill-category">
            <h2>Mobile</h2>
            <Row>
              {skillGroups["Mobile & Desktop"].map((skill, skillIndex) => (
                <Col key={skillIndex} md={4} className="skill-col">
                  <div className="skill-wrapper">
                    <CircularProgressbar
                      value={skill.proficiency}
                      text={`${skill.proficiency}%`}
                      styles={buildStyles({
                        textColor: "#fff",
                        pathColor: "#0ff",
                        trailColor: "#2a2a2a",
                        textSize: "16px",
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

export default Skills;
