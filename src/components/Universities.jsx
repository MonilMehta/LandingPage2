import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import universitiesData from '../assets/universities.json'; // Import universities data
import '../styles/Universities.css';
import { Link } from 'react-router-dom';

const University = () => {
  return (
    <div className="university-container" id='university-list'>
      <h2 className="section-heading">Our Universities</h2>
      <Carousel showArrows={true} infiniteLoop={true} emulateTouch={true} showThumbs={false}>
        {universitiesData.map((university, index) => (
          <div key={index} className='flex flex-row'>
            <img
              src={university.image}
              alt={university.universityName}
            />
            <div className="carousel-info">
              <h3>{university.universityName}</h3>
              <p>
                <strong>Location:</strong> {university.location}<br />
              </p>
              <p>{university.description}</p>
              <a href={university.website} target="_blank" rel="noopener noreferrer">Visit Website</a><br></br>
              {/* Conditionally render the additional link for VIT Vellore */}
              {university.universityName === 'VIT University' && (
                <Link to="/vit" className="additional-link">Learn More</Link>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default University;
