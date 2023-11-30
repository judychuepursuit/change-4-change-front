import { Link } from 'react-router-dom';
import React from 'react';
import fb from "../../sm-icon/fb-logo.jpeg";
import ig from "../../sm-icon/ig-logo.jpeg";
import twit from "../../sm-icon/twitter-logo.png"; 

function History(props) {
 
  return (
    <div className="history">
        <section>
        <h4>transaction</h4>
        <h1>history</h1>
        </section>
       
        <section>
          <p>Here lies all transactions made through change4change. </p>
        </section>

        <section></section>

        <section>
        <div className='bottom'>
        <div className='donate-button'>
            <a href="/charities">
              <div><span class="orange-square"></span>CLICK HERE TO <span className='orange'>DONATE</span></div>
            </a>
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