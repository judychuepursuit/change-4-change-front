
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import BadgeDisplay from '../BadgeDisplay';
import "./BadgesModal.css"
import blue from "../../reward-img/lev_1_blu_badge.png"
import orange from "../../reward-img/lev 1 orange badge.png"
import webImage from "../../reward-img/webImage.png"

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

        const c4cLink = "https://change-4-change-frontend.onrender.com/"
        const fb = document.querySelector(".facebook");
        // fb.href = `https://www.facebook.com/share.php?u=${link}`;
          //  fb.href=`https://www.facebook.com/dialog/share?app_id=868771211620111&display=popup&href=${encodeURIComponent(c4cLink)}`
            
    
        const ig = document.querySelector(".instagram");
        // ig.href = `https://www.instagram.com/p/${encodeURIComponent(c4cLink)}/`;
    
        const twit = document.querySelector(".twitter");
        twit.href = `http://twitter.com/share?url=${encodeURIComponent(c4cLink)}&text=${msg}&hashtags=donate,charity,support,kindness`;     
       }, []);


      // const openModal = () => {
      //   setIsModalOpen(true);
      // };

  }, [])

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (  
    <div onClick={closeModal} className="overlay" style={{display:isModalOpen ? "fixed" : "none"}}>
      {isModalOpen && (<div className='modalContainer'>
      <Helmet>
            <meta property="og:title" content="change4change" />
            <meta property="og:description" content="Make a change with your change" />
            <meta property="og:image" content={webImage} />
            <meta property="og:url" content="https://change-4-change-frontend.onrender.com/" />
            <meta property="og:type" content="website" />
          </Helmet>
        <div className="modal-right">
          <div className="modal-button" onClick={closeModal}>
            &times;
          </div>
          <div className='modal-content'>
            <h1>Congratulations!</h1>
            <br/>
            <p>You've earned a badge</p>
   
            <img src={orange} alt='badge' className='badge'></img>
            {/* <BadgeDisplay points={points} hasSignedUp={hasSignedUp} hasDonated={hasDonated} /> */}

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
      </div> 
      )}
    </div>
  );
};
