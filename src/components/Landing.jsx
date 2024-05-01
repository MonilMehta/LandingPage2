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
      <header className="header-section flex flex-col">
        <div className="header-background"></div>
        <h1 className="main-heading">Admission Express</h1>
        <div className="header-content">
        
          <div className="doctor-image mt-10">
          
            <img src={doctorImage} alt="Doctor" />
          </div>
          <div className="text-content">
            <h1 className="main-heading">Start your future with us</h1>
            <p className="sub-heading">Discover our accredited engineering program and start your journey today.</p>
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
