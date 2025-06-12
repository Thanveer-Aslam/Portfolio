import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='contactsection container-fluid' id="contact">
      <div className='container'>
      <div className='d-flex  flex-column flex-md-row align-items-start justify-content-between'>
        <div className='col-md-6 me-8 mb-4'>
            <h1 className='contact'>Contact</h1>
            <div className="mail mt-3 mb-2">
            <h4><FontAwesomeIcon icon={faEnvelope} className="me-2" />
            thanverulaslam@gmail.com</h4>
            </div>
            <div className="phone mt-3 mb-2">
            <h4><FontAwesomeIcon icon={faPhone} className="me-2" />
            +91.7010492218 </h4>
            </div>
            <div className='d-flex g-8'>
              <div className='ms-0'>
              <h4><FontAwesomeIcon icon={faGithub} /></h4>
              </div>
              <div className='ms-2'>
              <h4><FontAwesomeIcon icon={faLinkedin} /></h4>
              </div>
            </div>
        </div>
        <div className='md-4 ms-6'>
            <div className="r-4 mb-3" style={{width: "35rem"}}>
                <input type="name" placeholder='Name' style={{
                width: "100%",
                padding: "10px",
                borderRadius: "12px",
                border: "1px solid #ccc"
                }} />
            </div>
            <div className="r-4 mb-3">
                <input type="email" placeholder='Email' style={{
                width: "100%",
                padding: "10px",
                borderRadius: "12px",
                border: "1px solid #ccc"
                }}/>
            </div>
            <div className="mb-3">
                <textarea placeholder='Message' style={{
                width: "100%",
                padding: "10px",
                borderRadius: "12px",
                border: "1px solid #ccc"
                }}></textarea>
            </div>
            <div className="mb-3 rounded" style={{width: "35rem"}}>
                <button 
                style={{
                width: "100%",
                padding: "10px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#007bff",
                color: "#fff",
                fontWeight: "bold"
                }}
    >Send</button>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
