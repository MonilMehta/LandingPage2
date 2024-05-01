import React from 'react';
import '../styles/Services.css'; // Import CSS for styling
import doctorImage from '../assets/doctor.jpg';

const Services = () => {
  return (
    <div className="services-container" id='services'>
      <h2 className="section-heading">Our Services</h2>
      <div className="services-wrapper">
        {/* First Column - Service Boxes */}
        <div className="service-column">
          <div className="service-box ml-40">
            <h3>Service 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="service-box mr-40">
            <h3>Service 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="service-box ml-40">
            <h3>Service 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Second Column - Circular Image */}
        <div className="service-column">
          <div className="circular-container">
            <div className="circular-image">
              <img src={doctorImage} alt="Doctor" />
              <div className="animation-ball"></div>
            </div>
          </div>
        </div>

        {/* Third Column - Service Boxes */}
        <div className="service-column">
          <div className="service-box mr-40">
            <h3>Service 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="service-box ml-40">
            <h3>Service 5</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="service-box mr-40">
            <h3>Service 6</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
