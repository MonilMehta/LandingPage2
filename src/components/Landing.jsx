import React from 'react';
import '../styles/Landing.css'; // Import CSS for styling
import doctorImage from '../assets/doctor3d.png';

const LandingPage = () => {
  const scrollToEnquiryForm = () => {
    const enquiryForm = document.getElementById('enquiry-form');
    if (enquiryForm) {
      enquiryForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="landing-page" id="home">
      {/* Header Section */}
      <header className="header-section">
        <div className="header-background"></div>
        <div className="header-content">
          <div className="doctor-image">
            <img src={doctorImage} alt="Doctor" />
          </div>
          <div className="text-content">
            <h1 className="main-heading">Start your future with us</h1>
            <p className="sub-heading">Discover our accredited MBBS program and start your journey today.</p>
            <button className="cta-button" onClick={scrollToEnquiryForm}>
              Inquire Now
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
