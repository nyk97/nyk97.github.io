import React from "react";
import "./WaveBackgroundAnimation.css";

const WaveBackgroundAnimation = () => {
  // Define unique paths for each wave, reducing the number and changing dimensions
  const paths = [
    "M0,100 Q500,200 1000,100 T2000,100",
    "M0,300 Q500,400 1000,300 T2000,300",
    "M0,500 Q500,600 1000,500 T2000,500",
    "M0,700 Q500,800 1000,700 T2000,700",
    "M0,900 Q500,1000 1000,900 T2000,900",
  ];

  return (
    <main className="main">
      <section className="section section_wave">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 2000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" strokeLinecap="round">
            {paths.map((path, index) => (
              <path
                key={index}
                className={`dash dash_${index}`}
                d={path}
                strokeWidth="30" // Increased stroke width for visibility
              />
            ))}
          </g>
        </svg>
      </section>
    </main>
  );
};

export default WaveBackgroundAnimation;
