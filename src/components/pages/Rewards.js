import React from 'react';
import "../Button.css"
function Rewards (){
  return (
    <div className='rewards-page'>
      <section className="header">
        {/* <img src={logo} alt="logo" width="15%" height="25%" className='logo' /> */}
        {/* <Link to='/'>
        <button className="hm-bttn">Home</button>
        </Link>
         */}
   

      <section className="top">
        <h4 className='earn-header'>earn</h4>
        <h1 className='reward-header'>rewards</h1>
        <img src={flowChart} alt="flow chart" className='flow-chart' />

        </section>
      </section>

      <section className="reward-intro">
        <section className="middle">
          <h2 className='earn-two'>earn &nbsp;</h2>
          <h1 >Points & Badges:</h1>
        </section>

        <br />
        <p className='reward-pg'>
          Introducing a groundbreaking charity rewards system that not only fosters generosity but also cultivates a culture of continuous giving.
          Donors earn badges for their contributions through monetary donations.
          We bring an exclusive opportunity to make a meaningful impact on the charity of your choice.
          You now have a convenient and efficient way to direct your generosity to the causes that matter most to you.
          With each milestone achieved, participants unlock exclusive rewards such as personalized certificates of appreciation that can be posted to social media.
          This integrated rewards system not only acknowledges the altruistic endeavors of individuals but also fosters a sense of belonging and purpose within the community, creating a powerful cycle of giving and gratitude.
        </p>

        <br />
        <br />

        {/* <p>
          Our reward program awards points based on each recorded purchase.
          <br />
          <br />
          Sign up and earn a badge
          <br />
          <br />
          2 points for every dollar spent over $100
          <br />
          <br />
          1 point for every dollar spent
          <br />
          <br />
        </p> */}
      </section>

      <section className="badges-container">
      <div style={{ display: 'flex' }}>
      {badgeImages.map((badge, index) => (
        <div key={index} style={{ marginRight: '10px' }}>
          <img
            src={badge}
            alt={`Badge ${index + 1}`}
            style={{ width: '100px', height: '100px' }}
          />
        </div>
      ))}
    </div>
       </section>

      <div className='donateBttn'>
      
        <p>CLICK HERE TO </p>
        <Link to='/charities' className='orange'>DONATE</Link>
        
      </div>

      <div className="social-media">
        <h4>Share with</h4>
        <a href="#" className='social-tag'>
          <img src={fb} alt='fb-logo' width="12%" height="5%"></img>
          <img src={ig} alt='ig-logo' width="12%" height="5%"></img>
          <img src={twit} alt='twitter' width="12%" height="5%"></img>
        </a>
      </div>
    </div>

    
  );
}

export default Rewards;