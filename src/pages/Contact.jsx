import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="contactsection container-fluid" id="contact">
      <div className="container">
        <div className="row">
          {/* Contact Info Section */}
          <div className="col-12 col-md-6 mb-4">
            <h1 className="contact">Contact</h1>
            <div className="mail mt-3 mb-2">
              <h4>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                thanverulaslam@gmail.com
              </h4>
            </div>
            <div className="phone mt-3 mb-2">
              <h4>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +91.7010492218
              </h4>
            </div>
            <div className="d-flex gap-3 mt-3">
              <a href="https://github.com/Thanveer-Aslam" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://linkedin.com/in/thanveerul-ahamed" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>

          {/* Form Section */}
          <div className="col-12 col-md-6">
            <form className="contact-form">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="form-control"
                ></textarea>
              </div>
              <button className="btn btn-primary w-100" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
