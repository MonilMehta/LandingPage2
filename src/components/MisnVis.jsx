import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Mis from '../assets/mission.jpg';
import Vis from '../assets/vision.jpg';
import '../styles/misnvis.css'; 

const MissionnVision = () => {
  return (
    <div className='misnvis1'>
      <div className='enquire-content1'>
        <h3 className='head'>Our Mission And Vision</h3>
      </div>
      <Carousel showArrows={true} showThumbs={false} infiniteLoop autoPlay interval={5000} className="custom-carousel1">
        <div className="carousel-item1">
          <img src={Mis} alt="Mission" className="carousel-image1" />
          <div className="carousel-text1">
            <p>To offer the best service to all stakeholders and create an environment. That fosters grooming and nation-building by spreading education. The placement quality is quite good here as the data on the college.Provide the students with quality education and career counseling and inspire them to plan for their future success. Education Diary provides proper consultancy to those students who want to get direct admission to top-ranked universities with easy terms and conditions.</p>
          </div>
        </div>
        <div className="carousel-item1">
          <img src={Vis} alt="Vision" className="carousel-image1" />
          <div className="carousel-text1">
            <p>Admission Express wants to shape your future according to you by helping you get Direct Admission In SRM University Under Management Quota
            and  VIT Vellore and another top college in India under management Quota with easy terms and conditions.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MissionnVision;
