import React, { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mode from "./Components/Mode";
import Home from "./Pages/Home";
import UpcomingFeatures from "./Pages/UpcomingFeatures"; // Create this file if not exists
import Suggestions from "./Pages/Suggestions"; // Create this file if not exists
import LeftNav from "./Pages/LeftNav";
import "./index.css"; // Assuming you have some styles

function App() {
  const [isDark, updateTheme] = useState(true);

  const toggleTheme = () => {
    updateTheme((isDark) => !isDark);
  };

  useLayoutEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <Router>
      <div className="topContainer">
        <div className="column topLeftContainer">
          <div className="column routesContainer">
            <LeftNav />
          </div>
        </div>
        <div className="column topRightContainer">
          <Routes>
            <Route path="/POCO/" element={<Home />} />
            <Route
              path="/POCO/upcoming-features"
              element={<UpcomingFeatures />}
            />
            <Route path="/POCO/suggestions" element={<Suggestions />} />
          </Routes>
        </div>
      </div>
      <Mode toggleTheme={toggleTheme} isDark={isDark} />
    </Router>
  );
}

export default App;
