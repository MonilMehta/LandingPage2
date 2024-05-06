import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import VitVel from './components/VitVel'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/vit" element={<VitVel />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
