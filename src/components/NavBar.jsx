import React from 'react';
import '../index.css';
import { Link } from 'react-scroll';

const NavBar = () => {
  const navItems = ["About", "Experience", "Project", "Contact"];

  return (
    <nav className="custom-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="nav-logo">Thanveer.</h1>
        <ul className="nav-links d-flex gap-4 m-0">
          {navItems.map((item, index) => (
            <li key={index} className="list-unstyled">
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
    </nav>
  );
};

export default NavBar;
