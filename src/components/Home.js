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
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    if (slider) {
      slider.slickGoTo(0);
    }
  }, [slider]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    customPaging: () => (
      <div className="custom-dot">
        <span></span>
      </div>
    ),
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    afterChange: (current) => console.log("Slide changed to:", current),
  };

  return (
    <section className="home-section">
      <Container fluid className="overflow-auto">
        <Row className="justify-content-center">
          <Col lg={12}>
            <Card className="futuristic-card animated-card">
              <Card.Body>
                <Card.Title className="text-center display-4 fs-4">
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
                      Software Developer with over <strong>6 years</strong> of
                      professional experience and a strong passion for creating
                      innovative and interactive fullstack applications. I have
                      extensive experience in software development and UI/UX
                      design. <br />
                      Over the years, I've worked on designing, building, and
                      managing websites and games for both PC and Android
                      platforms. I'm highly motivated and passionate about
                      programming, designing, and coding. I thrive on solving
                      complex problems and bringing creative ideas to life
                      through technology. My goal is to continuously learn and
                      grow, leveraging my skills to develop impactful and
                      educational applications.
                    </p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center" id="timeline">
          <Col lg={12}>
            <h2 className="text-center display-5 fs-4 pt-2">Career Timeline</h2>
            <div className="timeline">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="timeline-entry"
              >
                <Slider ref={setSlider} {...settings}>
                  {timelineData
                    .sort((a, b) => b.year.localeCompare(a.year))
                    .flatMap((item) =>
                      item.projects.map((project, index) => (
                        <div
                          key={index}
                          className="project-slide"
                          style={{
                            width: "100%",
                            padding: "20px",
                            boxSizing: "border-box",
                          }}
                        >
                          <h4>{project.title}</h4>
                          <p>{project.description}</p>
                          {project.role && (
                            <p>
                              <strong>Role:</strong> {project.role}
                            </p>
                          )}
                          {project.technology && (
                            <p>
                              <strong>Technology Used:</strong>{" "}
                              {project.technology}
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
                      ))
                    )}
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
