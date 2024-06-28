import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onLoaded }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoaded();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    loading && (
      <div className="loading-screen">
        <div className="loading-circle">
          <h1 className="loading-text">
            <span>N</span>
            <span>I</span>
            <span>K</span>
            <span>O</span>
            <span>L</span>
            <span>A</span>
            <span> </span>
            <span>S</span>
            <span>T</span>
            <span>O</span>
            <span>J</span>
            <span>K</span>
            <span>O</span>
            <span>S</span>
            <span>K</span>
            <span>I</span>
          </h1>
        </div>
      </div>
    )
  );
};

export default LoadingScreen;
