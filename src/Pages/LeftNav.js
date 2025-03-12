import "./styles/leftNav.css";
import { NavLink } from "react-router-dom";

const PAGEROUTES = [
  { name: "Home", label: "home", path: "/POCO/" },
  { name: "Suggestions", label: "suggestions", path: "/POCO/suggestions" },
  { name: "Team", label: "team", path: "/contact-us" },
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
