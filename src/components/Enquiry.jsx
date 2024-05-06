import React, { useState, useEffect } from 'react';
import doctor from '../assets/femaledoctor3d.png';
import '../styles/Enquire.css'; // Import custom CSS for styling
import AOS from 'aos';
import 'aos/dist/aos.css';

const Enquiry = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    AOS.init({
      once: true, // Set to true if you want the animation to happen only once
      offset: 120, // Adjust the offset as needed
      duration: 400, // Adjust the duration as needed
      easing: 'ease', // Adjust the easing as needed
      anchorPlacement: 'top-bottom', // Adjust the anchor placement as needed
    });
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here (e.g., send it to the server)
    console.log('Form submitted:', { name, email, phone, message });
  };

  return (
    <div className='enquire-container' id='enquiry-form' data-aos="fade-up">
      <div className='enquire-content'>
        <h3 className='head'>Enquire now to secure your future</h3>
      </div>
      <div className='flex fex-row'>
        <div className='enquire-form'>
          <form onSubmit={handleSubmit} className='form'>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                id='name'
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone:</label>
              <input
                type='tel'
                id='phone'
                placeholder='Enter your phone number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message:</label>
              <textarea
                id='message'
                placeholder='Enter your message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
        <div className='form-image'>
          <img src={doctor} alt='Enquiry' />
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
