/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaTools,
  FaBriefcase,
  FaCertificate,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Home from "./components/Home";
import LoadingAnimation from "./components/LoadingAnimation";
import "./Layout.css";

const PasswordInput = ({ password, handlePasswordChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-group">
      <label htmlFor="password">Enter Password:</label>
      <div style={{ position: "relative" }}>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ paddingRight: "40px" }} // Make room for the icon
        />
        <div
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
    </div>
  );
};

const Layout = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 4000);

    const authStatus = sessionStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }

    return () => clearTimeout(timer);
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "portfolio") {
      setIsAuthenticated(true);
      sessionStorage.setItem("isAuthenticated", "true");
    } else {
      alert("Incorrect password!");
    }
  };

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

  if (!isAuthenticated) {
    return (
      <div className="password-protect">
        <div className="logo">
          <LoadingAnimation />
        </div>
        <form className="password-form" onSubmit={handleSubmit}>
          <PasswordInput
            password={password}
            handlePasswordChange={handlePasswordChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 sidebar">
          <div className="profile">
            <LoadingAnimation />
          </div>
          <div className="nav flex-column text-center">
            <div
              className={`nav-link ${activeSection === "home" ? "active" : ""}`}
              onClick={() => setActiveSection("home")}
            >
              <FaHome className="icon" />
              Home
            </div>
            <div
              className={`nav-link ${
                activeSection === "skills" ? "active" : ""
              }`}
              onClick={() => setActiveSection("skills")}
            >
              <FaTools className="icon" />
              Skills
            </div>
            <div
              className={`nav-link ${
                activeSection === "experience" ? "active" : ""
              }`}
              onClick={() => setActiveSection("experience")}
            >
              <FaBriefcase className="icon" />
              Experience
            </div>
            <div
              className={`nav-link ${
                activeSection === "certifications" ? "active" : ""
              }`}
              onClick={() => setActiveSection("certifications")}
            >
              <FaCertificate className="icon" />
              Certifications
            </div>
            <div
              className={`nav-link ${
                activeSection === "contact" ? "active" : ""
              }`}
              onClick={() => setActiveSection("contact")}
            >
              <FaEnvelope className="icon" />
              Contact
            </div>
          </div>
        </div>
        <div className="col-md-9 p-0 m-0">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Layout;
