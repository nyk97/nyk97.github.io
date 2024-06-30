import React from "react";
import "./Certifications.css";
import WaveBackgroundAnimation from "./WaveBackgroundAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const Certifications = () => {
  const awards = [
    {
      id: 2,
      title: "SmartUp - Social Innovation Lab and UNICEF (2018)",
      award: "1st place",
      project: "SuperPako",
      link: "https://www.facebook.com/ngosmartup/posts/pfbid02xcuLWgZnfqJ7vPp4BWqHkWArN7YFXrs94uoEBumkbNPVgD4sntbUb3EWZgkFUqibl",
    },
    {
      id: 1,
      title: "M3DS Academy and Autodesk USA - IT Novum (2017)",
      award: "1st place",
      project: "3D Video Animation",
      link: "https://www.facebook.com/m3dsacademy/posts/696333950567712",
    },
  ];

  const certifications = [
    "Certificate at the Walking in Other Moccasins Youth Exchange - 2018",
    "Certificate at the SmartUP workshop against children’s violence - 2018/19",
    "Certificate at the M3DS Challenge organized by Autodesk - 2018",
    "Certificate at the Global Game Jam Challenge - 2017",
    "Certificate at the NASA Space Apps Global Challenge - 2017",
    "Certificate at the Safe Link Youth Exchange - 2016",
  ].sort((a, b) => b.slice(-4) - a.slice(-4));

  return (
    <div className="container pb-5">
      <WaveBackgroundAnimation />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h3 className="text-center text-white mb-4 mt-2 text-decoration-underline">
            Awards
          </h3>
          {awards.map((award) => (
            <div key={award.id} className="card mb-3">
              <div className="card-body text-center">
                <h4 className="card-title">{award.title}</h4>
                <p className="card-text text-decoration-underline">
                  <FontAwesomeIcon icon={faTrophy} /> {award.award}
                </p>
                {award.project && (
                  <div className="card-link-frame">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={award.link}
                      className="card-link"
                    >
                      MORE INFORMATION
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {certifications.map((cert, index) => (
              <li key={index} className="list-group-item">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
