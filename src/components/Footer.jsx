import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#234F8E', color: 'white' }} className="py-4" id='Footer'>
      <div className="container-fluid text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Afnan — Built with React, Bootstrap & Vite
        </p>
        <div className="d-flex justify-content-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', fontSize: '1.2rem' }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', fontSize: '1.2rem' }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
