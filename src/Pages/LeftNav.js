import "./styles/leftNav.css";

const PAGEROUTES = [
  { name: "Home", label: "home" },
  { name: "Upcoming Features", label: "upcoming-features" },
  { name: "Suggesions", label: "suggestions" },
  { name: "PrivacyPolicy", label: "privacy-policy" },
  { name: "Conatct-us", label: "contact-us" },
];

const LeftNav = () => {
  return (
    <div className="lists">
      {PAGEROUTES.map(({ name }, index) => {
        return (
          <div className="list" key={name}>
            <div
              className={`text  ${
                // selectedRouteIndex === index ? "activeText" : ""
                ""
              }`}
            >
              {name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeftNav