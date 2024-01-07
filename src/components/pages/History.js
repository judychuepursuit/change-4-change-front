// This is the styling for the Transaction History page. 
import { Link } from 'react-router-dom';
import React from 'react';
import fb from "../../sm-icon/fb-logo.jpeg";
import ig from "../../sm-icon/ig-logo.jpeg";
import twit from "../../sm-icon/twit-logo.png"; 
import TransactionHistory from './TransactionHistory';
import "./History.css"

function History(props) {
 
  return (
    <div className="history-page">
        <section className='history-top'>
        <h4 className='transaction-header'>transaction</h4>
        <h1 className='history-header'>history</h1>
        </section>
       
        <section>
          <p className='history-intro'>
           Your donations on change4change are now seamlessly recorded.
           Easily access your donation history in your profile not just for reflection, 
           but for effortless tax exemption too! 
          </p>
        </section>

        <section className='payment-history-info'>
          <TransactionHistory />
        </section>

        <section>
        <div className='history-footer'>

          <p>Giving made simple, impact made transparent. Thank you for choosing <span className='change'>change4change</span>.</p>
          <div className='donate-button'>
          <Link to= "/charities"><button className="donate-bttn-history">DONATE </button></Link>
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
     
        </section>

    </div>
  );
}

export default History; 