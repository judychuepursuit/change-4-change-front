// This is the Rewards page. 
import React from 'react';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import flowChart from "../../../reward-img/flow-chart.png";
import fb from "../../../sm-icon/fb-logo.jpeg";
import ig from "../../../sm-icon/ig-logo.jpeg";
import twit from "../../../sm-icon/twit-logo.png";
import "./Rewards.css";

import Points from '../../Points.js';
import badgeData from "../../../reward-data/badgeData.js"

import lev1RedBadge from '../../../reward-img/lev 1 red badge.png';
import lev1OrangeBadge from '../../../reward-img/lev 1 orange badge.png';
import lev1YelBadge from '../../../reward-img/lev 1 yel badge.png';
import lev1GrnBadge from '../../../reward-img/lev 1 grn_badge.png';
import lev1BluBadge from '../../../reward-img/lev_1_blu_badge.png';
import lev1IndigoBadge from '../../../reward-img/lev 1 indigo badge.png';
import lev1VioBadge from '../../../reward-img/lev 1 vio badge.png';
import unicornBadge from '../../../reward-img/unicorn badge.png';

import arrowDownImage from '../../../reward-img/down_arrow.png'
import arrowUpImage from '../../../reward-img/up_arrow.png'
import axios from 'axios';
function Rewards() {
  // props.hideNavBar();

  const [points, setPoints] = useState(0);

  const badgeImages = [
    lev1RedBadge,
    lev1OrangeBadge,
    lev1YelBadge,
    lev1GrnBadge,
    lev1BluBadge,
    lev1IndigoBadge,
    lev1VioBadge,
    unicornBadge,
  ];

  function addOne() {
    
    setPoints(points + 1)
     }
 
   function doubleIt() {
    if (points === 0) {
      setPoints(2)
    }
     setPoints(points * 2)
   }

  const arrowImages =  [
    { src: arrowDownImage, className: 'arrow-down' },
    { src: arrowUpImage, className: 'arrow-up' },
  ];

  const badgeNames = badgeData.map(badge => badge.name);
  
  // useEffect(() => {
  //   axios
  //   .get()
  // })
  return (
    <div className='rewards-page'>
      <section className="header">

        <section className="top">
          {/* <h4 className='earn-header'>earn</h4> */}
          <h1 className='reward-header'>rewards</h1>
        </section>
        
        <section className="badges-container">
        <div className='badge-info'>
          {badgeImages.map((badge, index) => (
            <React.Fragment key={index}>
              <div className={`badge-item ${index === badgeImages.length - 1 ? 'last-badge' : ''}`}>
                <img
                  src={badge}
                  alt={`Badge ${index + 1}`}
                  // style={{ width: '70px', height: '70px' }}
                />
                <h1 className='badge-names'>{badgeNames[index]}</h1>
              </div>
              {index < badgeImages.length - 1 && (
                <img
                src={arrowImages[index % arrowImages.length].src}
                alt={`Arrow ${index + 1}`}
                className={`arrow-image ${arrowImages[index % arrowImages.length].className}`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
      </section>

      <section className="reward-intro">
        <section className="middle">
          {/* <h2 className='earn-two'>earn &nbsp;</h2> */}
          <h1 >Points & Badges:</h1>
        </section>
        <p className='reward-pg'>
          Empower change with our revolutionary charity rewards!
          Earn badges, unlock exclusive perks, and channel your generosity toward causes you're passionate about.
          Join a vibrant community dedicated to making a lasting impact. Earn points based on each recorded purchase.
        </p>
        <ul className='points-info'>
          <li>Sign up and earn a badge</li>
          <li className='black'><strong>First 100 dollars:</strong></li>
          <li>1 dollar donated = 1 point</li>
          <li className='black'>After reaching 100 dollars:</li>
          <li>1 dollar donated = 2 points </li>
        </ul>
      </section>
      {/* <div className="points">Your Points: {points}</div> */}

      <div className="points">Your Points: 53</div>
      <div className='rewards-footer'>
        {/* <img src={flowChart} alt="flow chart" className='flow-chart' /> */}
        <div className='bottom'>
        <div className='donate-button'>
        <Link to= "/charities"><button className="donate-bttn-badges">DONATE </button></Link>

        </div>
        <div className="social-media">
          {/* <h4 className='share-with'>Share with</h4> */}
          <a href="#" >
            <img src={fb} alt='fb-logo'></img>
          </a>
          <a href="#" >
            <img src={ig} alt='ig-logo'></img>
          </a>
          <a href="#">
            <img src={twit} alt='twit-logo'></img> 
          </a>
        </div>
      </div>
      </div>
    </div>

    
  );
}

export default Rewards;
