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
            <h3>Management Seat</h3>
          </div>
          <div className="service-box ml-30">
            <h3>Admission Counselling</h3>
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
          <div className="service-box mr-30">
            <h3>Pvt College Admission</h3>
          </div>
          
          <div className="service-box mr-40">
            <h3>Career Counselling</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
