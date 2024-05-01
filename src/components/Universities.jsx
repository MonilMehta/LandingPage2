import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import universitiesData from '../assets/universities.json'; // Import universities data
import '../styles/Universities.css';  

const University = () => {
  return (
    <div className="university-container" id='university-list'>
      <h2 className="section-heading">Our Universities</h2>
      <Carousel showArrows={true} infiniteLoop={true} emulateTouch={true} showThumbs={false}>
        {universitiesData.map((university, index) => (
          <div key={index} className='flex flex-row'>
            <img
              src={university.image}
              alt={university.universityName}// Set max width and auto height
            />
            <div className="carousel-info">
              <h3>{university.universityName}</h3>
              <p>
                <strong>Location:</strong> {university.location}<br />
                <strong>Program:</strong> {university.program}<br />
                <strong>Tuition Fee:</strong> {university.tuitionFee}<br />
                <strong>Hostel Fee:</strong> {university.hostelFee}
              </p>
              <p>{university.description}</p>
              <a href={university.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default University;
