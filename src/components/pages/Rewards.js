import React from 'react';
import logo from "../../reward-img/logo.png"
import flowChart from "../../reward-img/flow-chart.png"
import fb from "../../sm-icon/fb-logo.jpeg"
import ig from "../../sm-icon/ig-logo.jpeg"
import twit from "../../sm-icon/twitter-logo.png"
import "../../components/Rewards.css"
// import "../Button.css"
function Rewards (props){

props.hideNavBar()
  
  return (
    <div>
      <section className="header">
        <img src={logo} alt="logo" width="12%" height="5%" />
        <button className="button">Home</button>
      </section>

      <section className="top">
        <h4>earn</h4>
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

        <img src={flowChart} alt="flow chart" width="100%" height="auto" />
        <br />
        <br />

        <section className="middle">
          <h2>earn </h2>
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
        <img src={fb} alt='fb-logo'  width="12%" height="5%"></img>
        <img src={ig} alt='ig-logo'  width="12%" height="5%"></img>
        <img src={twit} alt='twitter'  width="12%" height="5%"></img>
       </a>
        </div>

        </div>
  ) 
}

export default Rewards;