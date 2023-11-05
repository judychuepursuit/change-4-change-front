import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Rewards from './components/pages/Rewards';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/Sign-Up';
import HowItWorks from './components/pages/How-It-Works';
import Charities from './components/pages/Charities';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/rewards' element={<Rewards/>} />
        <Route path='/contact-us' elementt={<ContactUs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/how-it-works' element={<HowItWorks/>} />
        <Route path='/charities' element={<Charities/>} />
      </Routes>
    </Router>
  );
}
export default App;


