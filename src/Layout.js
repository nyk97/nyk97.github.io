import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {
  FaEnvelope,
  FaLanguage,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Home from "./components/Home";
import LoadingAnimation from "./components/LoadingAnimation";
import "./Layout.css";

const Layout = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Experience />;
      case "certifications":
        return <Certifications />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3} className="sidebar">
          <div className="profile text-center">
            <LoadingAnimation />
          </div>
          <Nav className="flex-column text-center">
            <Nav.Link
              className={`nav-link ${activeSection === "home" ? "active" : ""}`}
              onClick={() => setActiveSection("home")}
            >
              <FaLanguage className="icon" />
              Home
            </Nav.Link>
            <Nav.Link
              className={`nav-link ${
                activeSection === "skills" ? "active" : ""
              }`}
              onClick={() => setActiveSection("skills")}
            >
              <FaLanguage className="icon" />
              Skills
            </Nav.Link>
            <Nav.Link
              className={`nav-link ${
                activeSection === "experience" ? "active" : ""
              }`}
              onClick={() => setActiveSection("experience")}
            >
              <FaBriefcase className="icon" />
              Experience
            </Nav.Link>
            <Nav.Link
              className={`nav-link ${
                activeSection === "certifications" ? "active" : ""
              }`}
              onClick={() => setActiveSection("certifications")}
            >
              <FaCertificate className="icon" />
              Certifications
            </Nav.Link>
            <Nav.Link
              className={`nav-link ${
                activeSection === "contact" ? "active" : ""
              }`}
              onClick={() => setActiveSection("contact")}
            >
              <FaEnvelope className="icon" />
              Contact
            </Nav.Link>
          </Nav>
        </Col>
        <Col md={9} className="p-0 m-0">
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
