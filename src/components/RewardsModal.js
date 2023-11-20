import React, { useEffect } from 'react';

export default function RewardsModal() {

    useEffect(() => {
        const link = encodeURI(window.location.href);
        const msg = encodeURIComponent("Thank You For Your Donation !");
        const title = encodeURIComponent(document.querySelector("title").textContent);
    
        console.log([link, msg, title]);
    
        const fb = document.querySelector(".facebook");
        fb.href = `https://www.facebook.com/share.php?u=${link}`;
    
        const ig = document.querySelector(".instagram");
        ig.href = `https://www.instagram.com/p/${link}/`;
    
        const twit = document.querySelector(".twitter");
        twit.href = `http://twitter.com/share?url=${link}&text=${msg}&hashtags=donate,charity,support,kindness`;
      }, []);


  return (  
    <div className='rewards-modal'>
    <h1>You've Earned </h1>
    <div id="share-container">
      <span>Share this:</span>
      <div id="share-buttons">
        {/* facebook */}
        <a className="facebook" target="blank"><i className="fab fa-facebook"></i></a>

        {/* instagram */}
        <a className="instagram" target="blank"><i className="fab fa-instagram"></i></a>

        {/* twitter */}
        <a className="twitter" target="blank"><i className="fab fa-twitter"></i></a>
      </div>
    </div>
  </div>
);
};

