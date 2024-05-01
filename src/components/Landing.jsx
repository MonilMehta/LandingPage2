import React from 'react';
import '../styles/Landing.css'; // Import CSS for styling
import doctorImage from '../assets/doctor3d.png'; 
 

const LandingPage = () => {
  return (
    <div className="landing-page" id='home'>
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
            <button className="cta-button">Inquire Now</button>
          </div>
        </div>
      </header>

      {/* About the Program, Highlights, Admission Information, Contact Section, and Footer - Include as per previous structure */}

    </div>
  );
};

export default LandingPage;
