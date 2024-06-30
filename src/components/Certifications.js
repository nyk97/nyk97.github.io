import React from "react";
import "./Certifications.css"; // Make sure any custom styles don't conflict with Bootstrap
import WaveBackgroundAnimation from "./WaveBackgroundAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const Certifications = () => {
  const awards = [
    {
      id: 2,
      title: "SmartUp - Social Innovation Lab and UNICEF (2018)",
      award: "1st place",
      date: "November 18, 2018",
      project: "SuperPako",
      link: "https://apkpure.com/%D1%81%D1%83%D0%BF%D0%B5%D1%80%D0%BF%D0%B0%D0%BA%D0%BE/com.intc.heado.bullying",
    },
    {
      id: 1,
      title: "IT Novum 2017 - Organized by M3DS Academy and Autodesk",
      award: "1st place",
      date: "2017",
      project: "3D Runner Sidescroller Game",
    },
  ];

  const certifications = [
    "Attendance at the Walking in Other Moccasins Youth Exchange - 2018",
    "Attendance at the SmartUP workshop against children’s violence - 2018/19",
    "Attendance at the M3DS Challenge organized by Autodesk - 2018",
    "Attendance at the Global Game Jam Challenge - 2017",
    "Attendance at the NASA Space Apps Global Challenge - 2017",
    "Attendance at the Safe Link Youth Exchange - 2016",
  ].sort((a, b) => b.slice(-4) - a.slice(-4));

  return (
    <div className="container pb-5">
      <WaveBackgroundAnimation />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h3 className="text-center text-white mb-4">
            Awards{" "}
            <FontAwesomeIcon
              icon={faTrophy}
              className="text-warning"
              style={{ fontSize: "1.5rem" }}
            />
          </h3>

          {awards.map((award) => (
            <div key={award.id} className="card mb-3">
              <div className="card-body">
                <h4 className="card-title">{award.title}</h4>
                <p className="card-text text-decoration-underline">
                  {award.award}
                </p>
                <p className="card-text">
                  <small className="card-text">Date: {award.date}</small>
                </p>
                {award.project && (
                  <a target="_blank" href={award.link} className="card-text">
                    {award.project}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-8">
          <h3 className="text-center text-white mb-4">Certifications</h3>
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
