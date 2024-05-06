import React, { useEffect } from 'react';
import '../styles/Services.css'; // Import CSS for styling
import doctorImage from '../assets/vit1.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Set to true if you want the animation to happen only once
      offset: 120, // Adjust the offset as needed
      duration: 400, // Adjust the duration as needed
      easing: 'ease', // Adjust the easing as needed
      anchorPlacement: 'top-bottom', // Adjust the anchor placement as needed
    });
  }, []);

  return (
    <div className="services-container" id='services'>
      <div className="absolute inset-0" style={{ backgroundImage: `url(${doctorImage})`, marginTop:'100px', filter: 'brightness(50%)', backdropFilter: 'blur(30px)', zIndex: -1 }}></div>
      <h2 className="section-heading">Our Services</h2>
      <div className="services-wrapper" data-aos="fade-up">
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
