import { useState } from "react";
import { NavLink, Switch } from "react-router-dom";

const CustomNav = () => {
  const [burger, setBurger] = useState(false);

  const handleClick = () => {
    setBurger(!burger);
  };

  return (
    <header>
      <div className="menu-btn" onClick={handleClick}>
        <span className={`menu-btn-burger ${burger ? "open" : ""}`}></span>
      </div>

      <Switch>
        <nav className={`nav ${burger ? "open" : ""}`}>
          <ul className="nav-items-list">
            <li className={`nav-item ${burger ? "open" : ""}`}>
              <NavLink
                exact
                to="/"
                className="nav-item-link"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className={`nav-item ${burger ? "open" : ""}`}>
              <NavLink
                to="about.html"
                className="nav-item-link"
                activeClassName="active"
              >
                About Me
              </NavLink>
            </li>
            <li className={`nav-item ${burger ? "open" : ""}`}>
              <NavLink
                to="projects.html"
                className="nav-item-link"
                activeClassName="active"
              >
                My Projects
              </NavLink>
            </li>
            <li className={`nav-item ${burger ? "open" : ""}`}>
              <NavLink
                to="contact.html"
                className="nav-item-link"
                activeClassName="active"
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </nav>
      </Switch>
    </header>
  );
};

export default CustomNav;
