import React, { useState } from 'react';
import Navbar from './components/Navbar';
// Added Stripe imports
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Rewards from './components/pages/Rewards';
import HowItWorks from './components/pages/How-It-Works';
import Charities from './components/pages/Charities';
import ConnectUs from './components/pages/ConnectUs';
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage";
import Signup from './components/pages/Sign-Up';
// Added PaymentForm and PaymentSuccess imports
import PaymentForm from './components/pages/PaymentForm';
import PaymentSuccess from './components/pages/PaymentSuccess';
import TransactionHistory from './components/pages/TransactionHistory';

// import TestComponent from './components/pages/TestComponent';
// ... other imports
import RewardsModal from './components/RewardsModal.js';
import History from "./components/pages/History.js"
// Added stripePromise for Stripe API initialization
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const App=()=> {
 
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const AppContent = () => {
const [userPurchaseData, setUserPurchaseData] = useState({
  recipient: null
})

const location = useLocation();

const hideNavbarRoutes = ['/how-it-works']; // Add the routes where you want to hide the navbar

const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
   {shouldShowNavbar && <Navbar />}
      {/* <Navbar /> */}
      
      {/* Wrapped the Routes with Elements for Stripe */}
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/rewards' element={<Rewards hideNavBar={hideNavBar}/>} />
          <Route path='/how-it-works' element={<HowItWorks />} />
          <Route path='/charities' element={<Charities setUserPurchaseData={setUserPurchaseData}/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/connect-us' element={<ConnectUs />} />
          <Route path='/sign-up' element={<Signup />} />
          {/* Added payment routes */}
          <Route path='/payment' element={<PaymentForm recipient={userPurchaseData.recipient}/>} />
          <Route path='/payment-success' element={<PaymentSuccess />} />
          <Route path='/TransactionHistory' element={<TransactionHistory />} />

          <Route path='/history' element={<History />} />
          {/* <Route path='/test' element={<TestComponent />} /> */}
          {/* ... other routes */}
          
        </Routes>
      </Elements>
      </>

  );
  
}

export default App;


