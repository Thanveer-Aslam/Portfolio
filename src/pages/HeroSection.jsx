// src/pages/HeroSection.jsx
// import Developer from '../assets/Developer.svg';
import Myphoto from '../assets/personalphoto.png'
import { useState } from 'react';
import '../index.css';
import TypeAnimation from '../components/TypeAnimation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const myResume = () => {
  const resumeUrl = '/resume.pdf';
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Thanveerul Aslam Ahamed_cv.pdf";
  link.click();
}



const HeroSection = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(!showContact);
  };
  return (
    <div className="hero-section container-fluid" id="header">
      <div className="container mt-5">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="hero-text col-12 col-md-6">
            <p className="hero-subtitle">Hi I'm</p>
            <h1 className="hero-title">Thanveerul Aslam Ahamed</h1>
            <h5 className="hero-role">
              <TypeAnimation />
            </h5>
            {/* <h5 className='hero-role'>Building responsive websites using React, TypeScript & design tools.</h5> */}
            <div className="d-flex gap-3 mt-4">
              <button className="btn-primary-custom" onClick={myResume}>
                Download Resume
              </button>
              <button
                className="btn-secondary-custom"
                onClick={handleContactClick}
              >
                Let's Work Together
              </button>
            </div>

            {showContact && (
              <div
                className="mt-3 p-4 rounded-lg shadow bg-gray-800 text-white transition-all duration-300 opacity-100 translate-y-0"
              >
                <p className="font-semibold mb-2 text-white">Contact Me:</p>

                <a
                  href="mailto:thanverulaslam@gmail.com"
                  className="hover:opacity-80 block p-2 text-white text-lg"
                  style={{ textDecoration: "none" }}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                  href="https://wa.me/7010492218"
                  target="_blank"
                  className="hover:opacity-80 block p-2 text-white text-lg"
                  style={{ textDecoration: "none" }}
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a
                  href="https://instagram.com/thanveer_afnan"
                  target="_blank"
                  className="hover:opacity-80 block p-2 text-white text-2xl"
                  style={{ textDecoration: "none" }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            )}
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src={Myphoto} alt="Developer" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
