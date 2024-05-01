import React, { useEffect } from 'react';
import '../styles/VitVel.css'; // Import custom CSS for styling
import { Link } from 'react-router-dom';

const VitVel = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array to run only on component mount

  return (
    <div className="direct-admission-vit">
      <div className='flex flex-row'>
        <Link to="/" className="back-button">⬅️ Back to Homepage</Link>
      </div>
      <h2>Direct Admission in VIT University, Vellore</h2>
      <p>
        Vellore University is one of the best universities in India, located in Vellore, Tamil Nadu. Established in 1984, it has been renowned for its academic excellence and vibrant campus life.
      </p>
      <p>
        The university offers a wide range of undergraduate, postgraduate, integrated, and research programs across various disciplines to cater to the diverse interests of students.
      </p>
      <p>
        Campus life at VIT Vellore is lively with numerous clubs and sports activities that enable students to engage, make friends, and explore their interests beyond academics.
      </p>
      
      <h3>Understanding Direct Admission</h3>
      <p>
        Direct admission, also known as management quota admission, is a process through which students can secure a seat in the university without appearing for the entrance exam. VIT Vellore offers this option for certain non-engineering programs under the Management Quota.
      </p>
      
      <h3>Eligibility Criteria</h3>
      <ul>
        <li>Academic Qualifications: Minimum 60% aggregate in Physics, Chemistry, and Mathematics/Biology in 10+2 or equivalent examination.</li>
        <li>Age Limit: Candidates should be born on or after 1st July 2000.</li>
        <li>Management Quota Application: Apply through the official website's admissions section.</li>
        <li>Fee Payment: Higher than regular fee for direct admission.</li>
      </ul>
      
      <h3>Application Process</h3>
      <ol>
        <li>Visit the official website of VIT Vellore.</li>
        <li>Navigate to the admissions section and select the desired program.</li>
        <li>Fill out the application form with accurate details and submit it along with required documents.</li>
        <li>Pay the application fee through available payment options.</li>
        <li>Receive further instructions through email or SMS after submitting the application.</li>
      </ol>
      
      <h3>Selection Process</h3>
      <p>
        Selection is based on academic performance, extracurricular achievements, and other relevant factors. Shortlisted candidates will undergo a personal interview, either online or offline.
      </p>
      
      <h3>Documents Required</h3>
      <ul>
        <li>Class 10 & 12 Mark Sheets and Certificates</li>
        <li>Transfer Certificate</li>
        <li>Conduct Certificate</li>
        <li>Migration Certificate (if applicable)</li>
        <li>Community Certificate (if applicable)</li>
        <li>Passport Size Photographs</li>
        <li>Any other relevant documents</li>
      </ul>
      
      <h3>Benefits of Direct Admission</h3>
      <ul>
        <li>Guaranteed Seat: Confirmed admission without entrance exam competition.</li>
        <li>Streamlined Process: Simple and minimal documentation required.</li>
        <li>Flexibility: Choose preferred branch of engineering based on availability.</li>
        <li>Early Confirmation: Secure seat early in the admission process.</li>
      </ul>
    </div>
  );
};

export default VitVel;
