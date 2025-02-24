import "./styles/leftNav.css";
import { NavLink } from "react-router-dom";

const PAGEROUTES = [
  { name: "Home", label: "home", path: "/POCO/" },
  { name: "Upcoming Features", label: "upcoming-features", path: "/POCO/upcoming-features" },
  // { name: "Suggestions", label: "suggestions", path: "/POCO/suggestions" },
  { name: "PrivacyPolicy", label: "privacy-policy", path: "/POCO/privacy-policy" },
  // { name: "Contact-us", label: "contact-us", path: "/contact-us" },
];

const LeftNav = () => {
  return (
    <div className="lists">
      {PAGEROUTES.map(({ name, path }) => (
        <div className="list" key={name}>
          <NavLink
            to={path}
            className={({ isActive }) => `text ${isActive ? "activeText" : ""}`}
          >
            {name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default LeftNav;