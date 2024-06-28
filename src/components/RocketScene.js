import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./RocketScene.css";

const RocketScene = () => {
  useEffect(() => {
    let scene, camera, renderer, rocket;
    const container = document.getElementById("canvas");

    const createScene = () => {
      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;

      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x5d0361, 10, 1500);

      camera = new THREE.PerspectiveCamera(60, WIDTH / HEIGHT, 1, 10000);
      camera.position.set(0, -10, 500);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(WIDTH, HEIGHT);
      renderer.shadowMap.enabled = true;

      if (container) {
        container.appendChild(renderer.domElement);
      }

      window.addEventListener("resize", handleWindowResize, false);

      const loader = new GLTFLoader();
      loader.load("https://stivs.dev/assets/rocket/rocket.gltf", (gltf) => {
        rocket = gltf.scene;
        rocket.position.y = 50;
        scene.add(rocket);
      });
    };

    const handleWindowResize = () => {
      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    };

    const createLights = () => {
      const ambientLight = new THREE.HemisphereLight(0x404040, 0x404040, 1);
      const directionalLight = new THREE.DirectionalLight(0xdfebff, 1);
      directionalLight.position.set(-300, 0, 600);
      const pointLight = new THREE.PointLight(0xa11148, 2, 1000, 2);
      pointLight.position.set(200, -100, 50);

      scene.add(ambientLight, directionalLight, pointLight);
    };

    const targetRocketPosition = 40;
    const animationDuration = 2000;

    const loop = () => {
      const t = (Date.now() % animationDuration) / animationDuration;
      renderer.render(scene, camera);
      const delta = targetRocketPosition * Math.sin(Math.PI * 2 * t);
      if (rocket) {
        rocket.rotation.y += 0.1;
        rocket.position.y = delta;
      }
      requestAnimationFrame(loop);
    };

    createScene();
    createLights();
    renderer.render(scene, camera);
    loop();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div id="rocket-scene">
      <div className="fire-wrapper">
        <img
          className="fire"
          src="https://stivs.dev/assets/rocket/fire.svg"
          alt="Rocket Fire"
        />
      </div>
      <div className="rain rain1"></div>
      <div className="rain rain2">
        <div className="drop drop2"></div>
      </div>
      <div className="rain rain3"></div>
      <div className="rain rain4"></div>
      <div className="rain rain5">
        <div className="drop drop5"></div>
      </div>
      <div className="rain rain6"></div>
      <div className="rain rain7"></div>
      <div className="rain rain8">
        <div className="drop drop8"></div>
      </div>
      <div className="rain rain9"></div>
      <div className="rain rain10"></div>
      <div className="drop drop11"></div>
      <div className="drop drop12"></div>
      <div id="canvas"></div>
    </div>
  );
};

export default RocketScene;
