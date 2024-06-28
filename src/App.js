import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div className="App">
      {!isLoaded && <LoadingScreen onLoaded={handleLoaded} />}
      {isLoaded && <Layout />}
    </div>
  );
}

export default App;
