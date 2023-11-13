// import React from 'react';
// import Navbar from './components/Navbar';
// import './App.css';
// import Home from './components/pages/Home';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './components/pages/About';
// import HowItWorks from './components/pages/How-It-Works';
// import Rewards from './components/pages/Rewards';
// import Charities from './components/pages/Charities';
// import ContactUs from './components/pages/ContactUs';
// import SignUp from './components/pages/Sign-Up';
// // import FourOFour from "./pages/FourOFour";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/rewards' element={<Rewards />} />
//         <Route path='/contact-us' element={<ContactUs />} />
//         <Route path='/sign-up' element={<SignUp />} />
//         <Route path='/how-it-works' element={<HowItWorks />} />
//         <Route path='/charities' element={<Charities />} />
//         {/* <Route path='*' element={<FourOFour />} />
//         <Route path='/pages/*' element={FourOFour}></Route> */}
//         {/* <Route path="/pages/*" element={<FourOFour />} /> */}
//       </Routes>
//     </Router>
//   );
// }
// export default App;









import React from 'react';
import Navbar from './components/Navbar';
// Added Stripe imports
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Rewards from './components/pages/Rewards';
import HowItWorks from './components/pages/How-It-Works';
import Charities from './components/pages/Charities';
import ContactUs from './components/pages/ContactUs';
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage";
import Signup from './components/pages/Sign-Up';
// Added PaymentForm and PaymentSuccess imports
import PaymentForm from './components/pages/PaymentForm';
import PaymentSuccess from './components/pages/PaymentSuccess';
// ... other imports

// Added stripePromise for Stripe API initialization
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function App() {
  return (
    <Router>
      <Navbar />
      {/* Wrapped the Routes with Elements for Stripe */}
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/rewards' element={<Rewards />} />
          <Route path='/how-it-works' element={<HowItWorks />} />
          <Route path='/charities' element={<Charities />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/sign-up' element={<Signup />} />
          {/* Added payment routes */}
          <Route path='/payment' element={<PaymentForm />} />
          <Route path='/payment-success' element={<PaymentSuccess />} />
          {/* ... other routes */}
        </Routes>
      </Elements>
    </Router>
  );
}

export default App;







