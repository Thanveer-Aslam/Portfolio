// src/pages/HeroSection.jsx
import Developer from '../assets/Developer.svg';
import '../index.css';
import  TypeAnimation  from '../components/TypeAnimation';

const HeroSection = () => {
  return (
    <div className='hero-section container-fluid' id="header">
      <div className="container mt-5">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="hero-text col-12 col-md-6">
            <p className='hero-subtitle'>Hi I'm</p>
            <h1 className='hero-title'>Thanveerul Aslam Ahamed</h1>
            <h5 className='hero-role'><TypeAnimation /></h5>
            {/* <h5 className='hero-role'>Building responsive websites using React, TypeScript & design tools.</h5> */}
            <div className='d-flex gap-3 mt-4'>
              <button className='btn-primary-custom'>Download Resume</button>
              <button className='btn-secondary-custom'>Let's Work Together</button>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src={Developer} alt="Developer" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
