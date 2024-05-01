import React from 'react';
import Landing from './Landing';
import Services from './Services';
import MisnVis from './MisnVis';
import University from './Universities';
import Enquiry from './Enquiry';

const Home = () => {
  return (
    <div>
      <Landing />
      <Services />
      <MisnVis />
      <University />
      <Enquiry />
    </div>
  );
};

export default Home;
