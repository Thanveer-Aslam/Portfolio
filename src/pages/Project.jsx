import React from 'react';
import PraperMedia from '../assets/prapermedia.png';
import Netflix from '../assets/Netflix-clone.png';
import ChatApp from '../assets/chatapp.jpg';
import HealthcareDashboard from '../assets/Healthcare Dashboard.jpeg'
import Crowdfunding from '../assets/crowdfunding_project.png'
import { useEffect, useState } from "react";
// import Moneypool from '../assets/moneypool.jfif';

const projects = [
  {
    title: "Chat Application",
    image: ChatApp,
    description:
      "Real-time chat using Socket.io, room-based messaging, and authentication.",
    link: "https://healthcare-orpin-eight.vercel.app/",
    target: "_blank",
  },
  {
    title: "Crowdfunding Application",
    image: Crowdfunding,
    description:
      "Real-time cause creattion to support NGO for Cause creation and integrate Stripe payment method to transtion transaction the donor did and donor will receive mail regarding the donation did.",
    link: "https://healthcare-orpin-eight.vercel.app/",
    target: "_blank",
  },
  {
    title: "Healthcare Dashboard",
    image: HealthcareDashboard,
    description:
      "Make a Healthcare Dashboard based on Frontend Asspect and it is visually appeling",
    link: "https://healthcare-orpin-eight.vercel.app/",
    target: "_blank",
  },
  {
    title: "Video Dashboard Rendering",
    image: Netflix,
    description:
      "A Netflix UI clone with TMDB API integration and dynamic content loading.",
    link: "https://netflix-rust-pi.vercel.app/",
    target: "_blank",
  },
  {
    title: "Responsive design Landing Page",
    image: PraperMedia,
    description:
      "Landing page clone project with responsive sections and smooth scrolling.",
    link: "#",
    target: "_blank",
  },
];

const Project = () => {
//   const [repos, setRepos] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/Thanveer-Aslam/repos")
//       .then((res) => res.json())
//       .then((data) => setRepos(data));
//   }, []);

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
                target={project.target}
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
    // <div>
    //   <h2>My Projects</h2>
    //   <div className="projects-grid">
    //     {repos.map((repo) => (
    //       <div className="project-card" key={repo.id}>
    //         <h3>{repo.name}</h3>
    //         <p>{repo.description}</p>
    //         <a href={repo.html_url} target="_blank">
    //           View on GitHub
    //         </a>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Project;
