import React from 'react';
// import { useNavigate } from 'react-router-dom';
import '../../App.css';
import './How-It-Works.css';
import { Link } from 'react-router-dom';
// test for new hiw page
import RegisterIcon from '../../images/how-it-works-icons/register.png';
import DonateIcon from '../../images/how-it-works-icons/donate.png';
import RewardsIcon from '../../images/how-it-works-icons/reward.png';
import ShareIcon from '../../images/how-it-works-icons/share.png';

export default function HowItWorks() {
  return (  
    <body>
      <div className="how-it-works-page">
      <div className="how-it-works-image"/>
      <h1>how it works</h1><br></br>
      <div className="text-overlay hiw-header">
      <div className="how-it-works-text"> Do you want to help make a change in someones life?, With change 4 change, you can donate to a charity with as little as .66¢ a day, although the change won't make a difference to you, it will make a big impact to charities and causes helping those in need.</div>
    <main>
      <section className="image-grid">
      {/* add and edit this to get links */}
        <Link to="/register" className="grid-item">
          <h2>sign-up/create an account</h2>
          <img src={RegisterIcon}></img>
        </Link>
        <Link to="/charities" className="grid-item">
          <h2>donate to your favorite charities</h2>
          <img src={DonateIcon}></img>
        </Link>
        <Link to="/rewards" className="grid-item">
          <h2>earn virtual reward badges</h2>
          <img src={RewardsIcon}></img>
        </Link>
        <Link to="/connect-us" className="grid-item">
          <h2>share with friends and family</h2>
          <img src={ShareIcon}></img>
        </Link>
      </section>
  </main>
</div>
</div>
    </body>
    
);

}
