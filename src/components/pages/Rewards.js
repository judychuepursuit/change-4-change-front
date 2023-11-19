import React from 'react';
// import "../../Button.css"
function Rewards (){
  return (
    <div>
      <section className="header">
        <img src="src/reward-img/logo.png" alt="logo" width="12%" height="5%" />
        <button className="btn">Home</button>
      </section>

      <section className="top">
        <h4>Earn</h4>
        <h1>Rewards</h1>
      </section>

      <section className="reward-intro">
        <p>
          Introducing a groundbreaking charity rewards system that not only fosters generosity but also cultivates a culture of continuous giving.
          <br />
          Donors earn badges for their contributions through monetary donations.
          <br />
          We bring an exclusive opportunity to make a meaningful impact on the charity of your choice.
          <br />
          You now have a convenient and efficient way to direct your generosity to the causes that matter most to you.
          <br />

          With each milestone achieved, participants unlock exclusive rewards such as personalized certificates of appreciation that can be posted to social media.
          <br />
          This integrated rewards system not only acknowledges the altruistic endeavors of individuals but also fosters a sense of belonging and purpose within the community, creating a powerful cycle of giving and gratitude.
        </p>

        <img src="src/reward-img/flow-chart.png" alt="flow chart" width="100%" height="auto" />
        <br />
        <br />

        <section className="middle">
          <h2>Earn</h2>
          <h1>Points & Badges:</h1>
        </section>

        <p>
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
        </p>
      </section>

      <div className="social-media">
        <h4>Share with</h4>
        <a href="#">
        <img src='src/sm-icon/fb-logo.jpeg' alt='fb-logo'></img>
        <img src='src/sm-icon/ig-logo.jpeg' alt='ig-logo'></img>
        <img src='src/sm-icon/twitter-logo.png' alt='twitter'></img>
       </a>
        </div>

        </div>
  ) 
}

export default Rewards;