import { useState } from "react";
import { NavLink } from "react-router-dom";

const CustomNav = () => {
  const [burger, setBurger] = useState(false);

  const handleClick = () => {
    setBurger(!burger);
  };

  const handleNavClick = () => {
    setBurger(false);
  };

  return (
    <header>
      <div className="menu-btn" onClick={handleClick}>
        <span className={`menu-btn-burger ${burger ? "open" : ""}`}></span>
      </div>

      <nav className={`nav ${burger ? "open" : ""}`}>
        <ul className="nav-items-list">
          <li className={`nav-item ${burger ? "open" : ""}`}>
            <NavLink
              exact
              to="/"
              className="nav-item-link"
              activeClassName="active"
              onClick={handleNavClick}
            >
              Home
            </NavLink>
          </li>
          <li className={`nav-item ${burger ? "open" : ""}`}>
            <NavLink
              to="/about"
              className="nav-item-link"
              activeClassName="active"
              onClick={handleNavClick}
            >
              About Me
            </NavLink>
          </li>
          <li className={`nav-item ${burger ? "open" : ""}`}>
            <NavLink
              to="/projects"
              className="nav-item-link"
              activeClassName="active"
              onClick={handleNavClick}
            >
              My Projects
            </NavLink>
          </li>
          <li className={`nav-item ${burger ? "open" : ""}`}>
            <NavLink
              to="/contact"
              className="nav-item-link"
              activeClassName="active"
              onClick={handleNavClick}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default CustomNav;
