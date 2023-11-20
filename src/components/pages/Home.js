// import React from 'react';
// import '../../App.css';

// export default function Home() {
//   return (
//     <>
//       <h1 className='home'>CHANGE
//       </h1>
//     </>
//   );
// }

// test

import React from 'react';
import '../../App.css';
import './HomePageComponents/InfoSection';
import { Link, useNavigate } from 'react-router-dom';
import info1 from '../../images/img-1a.jpeg';
import info2 from '../../images/img-4.jpg';
import info3 from '../../images/sm_image.jpeg';


function InfoBox({ title, description, buttonText, infoLink, img, altText }) {
  let navigate = useNavigate();

  return (
    <div className='info-box'>
      <p>{description}</p>
      <img src={img} alt={altText}/>
      <Link to={infoLink}><button>{buttonText}</button></Link>
    </div>
  )
 }

export default function Home({ title, description, buttonText, infoLink }) {
let navigate = useNavigate();
  return (  
  <div className="home">
    {/* add maincontent code here */}
    <div className="main-content">
      <h1> MAKE A CHANGE </h1>
      <h2> with your change </h2>
      <h3> Get started now by donating just 66¢ a day </h3>
      <Link to= "/payment"><button className="donate-btn">CLICK TO DONATE </button></Link>
    </div>
    {/* <div className="hero-image"></div> */}
    <div className="hero-images">
      <div className="carousel-image hero-image"></div>
      <div className="carousel-image unicef-home"></div>
    </div>
    <div className="home-content">
      {/* <h1>change</h1> */}
        <Link to="/how-it-works"><button className="how-it-works">how it works</button></Link>
        {/* <button className="how-it-works" onClick={() => navigate(infoLink)}>how it works</button>  */}
        <div className="info-section">
          <div className='button-text'></div>
       <InfoBox
        title="subscription"
        description="Choose donation amount and frequency: One time or Monthly."
        buttonText="subscription" 
        infoLink='/charities'
        img={info1}
        altText="Subcription"
      />
      <InfoBox
        title="rewards"
        description="Earn Points towards Badges and earn monthly Milestones."
        buttonText="rewards"
        infoLink="/rewards"
        img={info2}
        altText="Rewards"
      />
      <InfoBox
        title="share"
        description="Connect your Social Media accounts and share your Rewards with friends and family."
        buttonText="share"
        infoLink="/connect-us"
        img={info3}
        altText="Share"
      />
    </div>      
    </div>
</div>
);
}

// export default home;
