import React, { useEffect, useState } from 'react';
import BadgeDisplay from '../BadgeDisplay';
import "./RewardsModal.css"
import blue from "../reward-img/lev 1 blu badge.png"



export default function RewardsModal({isModalOpen, setIsModalOpen}) {

    const [points, setPoints] = useState(0);
    const [hasSignedUp, setHasSignedUp] = useState(false);
    const [hasDonated, setHasDonated] = useState(false);


    useEffect(() => {
        const link = encodeURI(window.location.href);
        const msg = encodeURIComponent("Thank You For Your Donation !");
        const title = encodeURIComponent(document.querySelector("title").textContent);
    
        console.log([link, msg, title]);
        console.log(`Facebook Link: https://www.facebook.com/share.php?u=${link}`);
        console.log(`Instagram Link: https://www.instagram.com/p/${link}/`);
        console.log(`Twitter Link: http://twitter.com/share?url=${link}&text=${msg}&hashtags=donate,charity,support,kindness`);

    
        const fb = document.querySelector(".facebook");
        fb.href = `https://www.facebook.com/share.php?u=${link}`;
    
        const ig = document.querySelector(".instagram");
        ig.href = `https://www.instagram.com/p/${link}/`;
    
        const twit = document.querySelector(".twitter");
        twit.href = `http://twitter.com/share?url=${link}&text=${msg}&hashtags=donate,charity,support,kindness`;
      }, []);

      // const openModal = () => {
      //   setIsModalOpen(true);
      // };

      const closeModal = () => {
        setIsModalOpen(false);
      };
  

  return (  
    <div onClick={closeModal} className="overlay" style={{display:isModalOpen ? "fixed" : "none"}}>
      {isModalOpen && (<div className='modalContainer'>
        <div className="modal-right">
          <div className="modal-button" onClick={closeModal}>
            &times;
          </div>
          <div className='modal-content'>
            <h2>Congratulations!</h2>
            <p>You've earned a badge</p>
   
            <img src={blue} alt='badge' className='badge'></img>
            <BadgeDisplay points={points} hasSignedUp={hasSignedUp} hasDonated={hasDonated} />

            <div id="share-container">
              <span>Share this:</span>
              <div id="share-buttons">
                {/* facebook */}
                <a className="facebook" target="_blank"><i className="fab fa-facebook"></i></a>

                {/* instagram */}
                <a className="instagram" target="_blank"><i className="fab fa-instagram"></i></a>

                {/* twitter */}
                <a className="twitter" target="_blank"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div> )}
    </div>
  );
};