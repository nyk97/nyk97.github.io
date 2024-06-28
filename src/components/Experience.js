import React, { useState } from "react";
import RocketScene from "./RocketScene";
import projectsData from "../dummy/projectsData";
import "./Experience.css";

const Experience = () => {
  const [filter, setFilter] = useState("web");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredProjects = projectsData[filter];

  return (
    <section className="projects-section">
      <RocketScene />
      <div className="filter-buttons">
        <button
          className="filter-button"
          onClick={() => handleFilterChange("web")}
        >
          Web
        </button>
        <button
          className="filter-button"
          onClick={() => handleFilterChange("mobile")}
        >
          Mobile
        </button>
      </div>
      <div className="project-category">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                style={{ borderColor: getRandomColor() }}
              />
            )}
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.role && (
                <p>
                  <strong>Role:</strong> {project.role}
                </p>
              )}
              <p>
                <strong>Technologies Used:</strong> {project.technologies}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
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
            </div>
          </div>
        ))}
      </div>
    </section>
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
