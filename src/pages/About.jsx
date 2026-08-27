import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faFigma,
  faNode,
  faPython,
  faBootstrap,
  // FaMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import {
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiAmazonec2,
  SiAwslambda,
  SiAmazonapigateway,
  SiAmazonrds,
  SiAmazons3,
  // SiMicrosoftazure,
} from "react-icons/si";
import MuiIcon from '../assets/MuiIcon';

const About = () => {
  return (
    <div className="about-section container-fluid" id="about">
      <div className="container">
        <h1>About Me</h1>
        <p>
          A passionate full-stack developer with 1.6 years of experience
          building modern web applications using React, Node.js, Java, Spring
          Boot, MongoDB, MySQL, AWS, and Azure. I enjoy building scalable
          applications, creating responsive user interfaces, and deploying
          production-ready projects on cloud platforms.
        </p>

        <div className="d-flex flex-column flex-md-row align-items-start justify-content-between">
          <div className="col-md-6">
            <ul style={{ listStyleType: "'• '", paddingLeft: "1rem" }}>
              <li>
                <span className="highlight">
                  1.6 years of development experience
                </span>{" "}
                building full-stack web applications
              </li>

              <li>
                Currently working as a{" "}
                <span className="highlight">Freelancer</span>
              </li>

              <li>
                <span className="highlight">
                  Completed 2 freelance projects
                </span>{" "}
                from development to deployment
              </li>
            </ul>
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            {/* First row (6 icons) */}
            <div className="d-flex flex-wrap justify-content-center gap-4 mb-3">
              <IconBox>
                <FontAwesomeIcon icon={faReact} size="2x" color="#61DBFB" />
              </IconBox>
              <IconBox>
                <FontAwesomeIcon icon={faJs} size="2x" color="#f7df1e" />
              </IconBox>
              <IconBox>
                <FontAwesomeIcon icon={faHtml5} size="2x" color="#e34c26" />
              </IconBox>
              <IconBox>
                <FontAwesomeIcon icon={faCss3} size="2x" color="#1572b6" />
              </IconBox>
              <IconBox>
                <FontAwesomeIcon icon={faBootstrap} size="2x" color="#7952b3" />
              </IconBox>
              <IconBox>
                <SiTypescript size="2em" color="#3178C6" />
              </IconBox>
            </div>

            {/* Second row (rest of the icons) */}
            <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
              <IconBox>
                <SiTailwindcss size="2em" color="#38BDF8" />
              </IconBox>
              <IconBox>
                <MuiIcon size={40} />
              </IconBox>
              <IconBox>
                <FontAwesomeIcon icon={faNode} size="2x" color="#3c873a" />
              </IconBox>
              <IconBox>
                <SiMongodb size="2em" color="#4DB33D" />
              </IconBox>
              <IconBox>
                <FontAwesomeIcon icon={faPython} size="2x" color="#3776ab" />
              </IconBox>
              <IconBox>
                <FontAwesomeIcon icon={faFigma} size="2x" color="#a259ff" />
              </IconBox>
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
              <IconBox>
                <SiAmazonec2 size="2em" color="#FF9900" />
              </IconBox>

              <IconBox>
                <SiAwslambda size="2em" color="#FF9900" />
              </IconBox>

              <IconBox>
                <SiAmazonapigateway size="2em" color="#FF4F00" />
              </IconBox>

              <IconBox>
                <SiAmazonrds size="2em" color="#527FFF" />
              </IconBox>

              <IconBox>
                <SiAmazons3 size="2em" color="#569A31" />
              </IconBox>

              {/* <IconBox>
                <FontAwesomeIcon icon={FaMicrosoft} size="2x" color="#0078D4" />
              </IconBox> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const IconBox = ({ children }) => (
  <div style={{
    backgroundColor: "#1e293b",
    borderRadius: "0.75rem",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "64px",
    height: "64px"
  }}>
    {children}
  </div>
);

export default About;
