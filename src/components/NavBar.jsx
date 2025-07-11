import React from 'react';
import '../index.css';
import { Link } from 'react-scroll';

const NavBar = () => {
  const navItems = ["About", "Experience", "Project", "Contact"];

  return (
    <nav className="navbar navbar-expand-md custom-navbar">
  <div className="container">
    <h1 className="nav-logo">Thanveer.</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse" aria-controls='navCollapse' aria-expanded='false' aria-label='Toggle navigation'>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navCollapse">
      <ul className="navbar-nav nav-links ms-auto mb-2 mb-lg-0">
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            <Link
              className="nav-link"
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>

  );
};

export default NavBar;
