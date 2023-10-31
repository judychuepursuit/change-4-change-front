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
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/rewards' component={Rewards} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/how-it-works' component={HowItWorks} />
        <Route path='/charities' component={Charities} />
      </Routes>
    </Router>
  );
}
export default App;


// import React from "react";
// import Navbar from "./components/Navbar";
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//     </div>
//   );
// }

// export default App;
