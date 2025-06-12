import React from 'react';
import PraperMedia from '../assets/prapermedia.png';
import Netflix from '../assets/Netflix-clone.png';
import ChatApp from '../assets/chatapp.jpg';
import Moneypool from '../assets/moneypool.jfif';

const projects = [
  {
    title: "Chat Application",
    image: ChatApp,
    description: "Real-time chat using Socket.io, room-based messaging, and authentication.",
    link: "#"
  },
  {
    title: "Moneypool",
    image: Moneypool,
    description: "Group fund management tool with responsive layout and basic features.",
    link: "#"
  },
  {
    title: "Netflix Clone",
    image: Netflix,
    description: "A Netflix UI clone with TMDB API integration and dynamic content loading.",
    link: "#"
  },
  {
    title: "Praper Media Clone",
    image: PraperMedia,
    description: "Landing page clone project with responsive sections and smooth scrolling.",
    link: "#"
  }
];

const Project = () => {
  return (
    <div className="project-section container-fluid" id="project">
        <div className='container'>
      <h2 className="text-white mb-4">Projects</h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card  card"
            // style={{
            //   width: '18rem',
            //   backgroundColor: '#E1C21B',
            //   color: '#0F1A25',
            //   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            //   border: 'none'
            // }}
          >
            <img
              src={project.image}
              className="card-img-top"
              alt={project.title}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text" style={{ fontSize: '0.9rem' }}>{project.description}</p>
              <a
                href={project.link}
                className="btn project-button"
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  fontWeight: '500'
                }}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Project;
