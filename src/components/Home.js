import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ReactTyped } from "react-typed";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { timelineData } from "../dummy/timelineData";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState(timelineData[0].year);
  const [slider, setSlider] = useState(null);

  const handleSelect = (index) => {
    setCurrentIndex(index);
    setSelectedYear(timelineData[index].year);
  };

  useEffect(() => {
    if (slider) {
      slider.slickGoTo(0);
    }
  }, [selectedYear, slider]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: timelineData[currentIndex].projects.length > 1,
    customPaging: (i) => (
      <div className={`custom-dot ${i === currentIndex ? "active" : ""}`}>
        <span>{i + 1}</span>
      </div>
    ),
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const currentYearData = timelineData[currentIndex];

  return (
    <section className="home-section">
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="futuristic-card animated-card">
              <Card.Body>
                <Card.Title className="text-center display-4 fs-1">
                  <ReactTyped
                    strings={[
                      "Welcome to My Portfolio",
                      "Hello! I'm Nikola Stojkoski",
                      "Fullstack Software Developer",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  />
                </Card.Title>
                <Card.Text>
                  <div className="home-content">
                    <p>
                      <strong>Hello!</strong> I'm Nikola Stojkoski, a Fullstack
                      Software Developer with a passion for creating innovative
                      and interactive fullstack applications.
                    </p>
                    <p>
                      I have extensive experience in software development and
                      UI/UX design. Over the years, I've worked on designing,
                      building, and managing websites and games for both PC and
                      Android platforms.
                    </p>
                    <p>
                      I'm highly motivated and passionate about programming,
                      designing, and coding. I thrive on solving complex
                      problems and bringing creative ideas to life through
                      technology. My goal is to continuously learn and grow,
                      leveraging my skills to develop impactful and educational
                      applications.
                    </p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row className="justify-content-center" id="timeline">
          <Col md={12}>
            <h2 className="text-center display-5">Career Timeline</h2>
            <div className="timeline">
              <div className="timeline-dates">
                {timelineData.map((item, index) => (
                  <div
                    key={item.year}
                    className={`timeline-date ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => handleSelect(index)}
                  >
                    {item.year}
                  </div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="timeline-entry"
              >
                <Slider ref={setSlider} {...settings}>
                  {currentYearData.projects.map((project, index) => (
                    <div key={index} className="project-slide">
                      <h3>
                        {selectedYear} - {project.title}
                      </h3>
                      {project.role && (
                        <p>
                          <strong>Role:</strong> {project.role}
                        </p>
                      )}
                      <p>{project.description}</p>
                      {project.technology && (
                        <p>
                          <strong>Technology Used:</strong> {project.technology}
                        </p>
                      )}
                      {project.link && (
                        <p>
                          <strong>Link:</strong>{" "}
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.link}
                          </a>
                        </p>
                      )}
                      {project.award && (
                        <p>
                          <strong>Award:</strong> {project.award}
                        </p>
                      )}
                      {project.status && (
                        <p>
                          <strong>Status:</strong> {project.status}
                        </p>
                      )}
                    </div>
                  ))}
                </Slider>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
