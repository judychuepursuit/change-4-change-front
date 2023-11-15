import React, { useEffect } from 'react';
import BadgeDisplay from './BadgeDisplay';
import badgeData from '../api/badgeData';

export default function RewardsModal({ onClose }) {

    const [points, setPoints] = useState(0);
    const [hasSignedUp, setHasSignedUp] = useState(false);
    const [hasDonated, setHasDonated] = useState(false);

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
    <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <h2>Congratulations!</h2>
      <p>You've earned a badge</p>
    </div>
    
    <BadgeDisplay points={points} hasSignedUp={hasSignedUp} hasDonated={hasDonated} />
    
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
