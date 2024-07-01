import React, { useState } from "react";
import RocketScene from "./RocketScene";
import projectsData from "../dummy/projectsData";
import "./Experience.css";

const Experience = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredProjects =
    filter === "all"
      ? [...projectsData.web, ...projectsData.mobile]
      : projectsData[filter];

  return (
    <div className="container-fluid overflow-auto">
      <section className="projects-section">
        <RocketScene />
        <div className="filter-buttons">
          <button
            className={`filter-button ${filter === "all" ? "active" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`filter-button ${filter === "web" ? "active" : ""}`}
            onClick={() => handleFilterChange("web")}
          >
            Web
          </button>
          <button
            className={`filter-button ${filter === "mobile" ? "active" : ""}`}
            onClick={() => handleFilterChange("mobile")}
          >
            Mobile
          </button>
        </div>
        <div className="row project-category">
          {filteredProjects.map((project, index) => (
            <div key={index} className="col-md-4 project-card">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  style={{ borderColor: getRandomColor() }}
                />
              )}
              <div className="project-details">
                {project.role && (
                  <p className="project-role">
                    <strong>Role:</strong> {project.role}
                  </p>
                )}
                {project.company && (
                  <p className="project-company">
                    <strong>Company:</strong> {project.company}
                  </p>
                )}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  <strong>Technologies Used:</strong> {project.technologies}
                </p>
                {project.awards && (
                  <p>
                    <strong>Awards:</strong> {project.awards}
                  </p>
                )}
                {project.status && (
                  <p>
                    <strong>Status:</strong> {project.status}
                  </p>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pb-2"
                  >
                    LINK HERE
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default Experience;
