import React, { useEffect, useLayoutEffect, useState } from "react";
import Mode from "./Components/Mode";
import Home from "./Pages/Home";
import LeftNav from "./Pages/LeftNav";

const Pages = {
  home: () => Home,
  // "privacy-policy": PrivacyPolicy,
  // suggestions: Suggestions,
  // "upcoming-features": UpcomingFeatures,
  // "contact-us": ContactUs,
};

function App() {
  const [isDark, updateTheme] = useState(true);
  const [navigation, updateNavigation] = useState(Pages["home"]);

  // const Component = navigation;
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
    <>
      <div className="topContainer">
        <div className="column topLeftContainer">
          <div className="column routesContainer">
            <LeftNav />
          </div>
        </div>
        <div className="column topRightContainer">{navigation()}</div>
      </div>
      <Mode toggleTheme={toggleTheme} isDark={isDark} />
    </>
  );
}

export default App;
