import React from 'react';
import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import '../styles/Footer.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return ( 
    <footer className="footer-container py-8 md:py-12" id='contact-us'>
      <div className="footer-content max-w-7xl px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="hidden md:flex flex-col justify-center">
            <Typography variant="h2" className="mb-4 font-bold text-2xl md:text-3xl head">
              Education Diary 
            </Typography>
            <p className="text-base md:text-lg mb-4 ">
              At Education Diary , we are committed to providing the highest quality services to our clients. We maintain a strong network of partner universities across the globe, ensuring that our students have access to the best education and training opportunities. We also offer pre-departure and post-arrival support to ensure a smooth transition for our students.
            </p>
          </div>
          <div className="contact-info">
            <Typography variant="h2" className="head mb-2 font-bold text-2xl md:text-3xl text-center md:text-left">
              Contact Us
            </Typography>
            <div className="mb-4 contactdet">
              <Typography variant="body" className="mb-3 text-white bodd"><strong>Address:</strong></Typography>
              <Typography variant="body" className="mb-3 text-white">Sadhna bhavan L-3rd/83, Sector -D, Aliganj, Near Puraniya chouraha, Lucknow, Uttar Pradesh -226024, landmark - backside of UPPSC building</Typography>
              <Typography variant="body" className="mb-3 text-white bodd"><strong>Mobile:</strong> +91-9821948429</Typography>
              <Typography variant="body" className="mb-3 text-white bodd "><strong>Email:</strong> <a href="mailto:admission@educationdiary .com" className="text-white ml-4">admission@universalmbbs.com</a></Typography>
              <Typography variant="body" className="text-white ml-12"><a href="mailto:info@educationdiary .com" className="text-white ml-5">info@universalmbbs.com</a></Typography>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 flex items-center justify-between border-t border-blue-gray-50 py-4">
          <Typography variant="body" className="text-blue-gray-900 text-sm md:text-base">
            &copy; {currentYear} Education Diary . All Rights Reserved.
          </Typography>
          <div className="social-links">
            <a href="#" className="social-link hover:opacity-100">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="social-link hover:opacity-100">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="social-link hover:opacity-100">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="social-link hover:opacity-100">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
