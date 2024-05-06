// Navbar.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsCollapsed(scrollY > 0); // Set isCollapsed to true when scrolled down
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scrolling
    }
  };

  return (
    <nav className={`navbarr shadow-md fixed top-0 left-0 w-full z-10 transition-transform duration-300 ${isCollapsed ? 'transform -translate-y-16' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col justify-between items-center">
        {/* Large header visible at the top */}
        <div className="lg:block hidden flex flex-row">
          <h1 className="text-4xl font-bold mb-10 heading">We'll help you achieve your dreams<span  className='ml-20 contact'>Contact Us : +91-9821948429</span></h1>
        </div>
        {/* Navigation links, collapsed on scroll */}
        <div className="flex items-center space-x-4 lg:space-x-8 navlinks">
          <a href="#home" className="hover:text-blue-600" onClick={() => scrollToSection('home')}>
            Home
          </a>
          <a href="#services" className="hover:text-blue-600" onClick={() => scrollToSection('services')}>
            Services
          </a>
          <a href="#university-list" className="hover:text-blue-600" onClick={() => scrollToSection('university-list')}>
            University List
          </a>
          <a href="#enquiry-form" className="hover:text-blue-600" onClick={() => scrollToSection('enquiry-form')}>
            Enquiry Form
          </a>
          <a href="#contact-us" className="hover:text-blue-600" onClick={() => scrollToSection('contact-us')}>
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
