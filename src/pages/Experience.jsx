import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const experiences = [
  {
    title: "Frontend Developer",
    company: "Aziwa Infosystem",
    date: "Dec 2024 - Present",
    details: [
      "Built and maintained responsive dashboards using React, Bootstrap, and Tailwind CSS",
      "Collaborated with the design team to implement UI components from Figma",
      "Improved performance by optimizing Vite bundling and lazy loading",
      "Integrated REST APIs and worked on form validations and state management",
    ],
    stack: [
      "React",
      "TypeScript",
      "Bootstrap",
      "Tailwind",
      "Git",
      "Vite",
      "Figma",
    ],
  },
  {
    title: "Netflix Clone",
    company: "Personal Project",
    date: "Nov 2024",
    details: [
      "Cloned Netflix UI with TMDB API integration",
      "Used reusable components and React Router",
    ],
    stack: ["React", "Tailwind Css", "TMDB API", "Git"],
  },
  {
    title: "Chat App",
    company: "Personal Project",
    date: "Oct 2024",
    details: [
      "Real-time chat using Socket.io",
      "Implemented authentication and room-based messaging",
    ],
    stack: ["React", "Node.js", "Socket.io", "Bootstrap", "Git"],
  },
  {
    title: "Healthcare Dashboard",
    company: "Personal Project",
    date: "Oct 2025",
    details: [
      "Real-time chat using Socket.ioDesigned and developed a fully responsive healthcare dashboard using React, featuring reusable components, sidebar navigation, appointment scheduling UI, and an interactive 3D human body section with health indicators",
      "Recreated a professional dashboard based on a reference image with attention to detail, pixel-perfect layout, color consistency, and smooth user experience using React, CSS, and component-based architecture.",
    ],
    stack: ["React", "Node.js", "Socket.io", "Bootstrap", "Git"],
  },
];

const Experience = () => {
  return (
    <div className="container-fluid my-5" id="experience">
      <div className="container" id="experience">
      <h2 className="mb-4 text-dark">Experience</h2>
      <div className="d-flex flex-column gap-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-4 rounded"
            style={{
              backgroundColor: "#1e3a8a",
              color: "white",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
            }}
          >
            <h5 className="mb-2">
              <FontAwesomeIcon icon={faBriefcase} className="me-2 text-light" />
              <span className="fw-bold">{exp.title}</span> — {exp.company}
            </h5>
            <p style={{ color: "#CBD5E1" }}>
              <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
              {exp.date}
            </p>
            <ul>
              {exp.details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {exp.stack.map((tech, i) => (
                <span
                  key={i}
                  className="badge"
                  style={{
                    backgroundColor: "#312e81",
                    color: "#f8fafc",
                    fontSize: "0.8rem"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Experience;
