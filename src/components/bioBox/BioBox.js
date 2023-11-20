import React from "react";
import './BioBox.css';

const BioBox = (props) => {
    return (
        <div className="bio-box">
          <img
            src={props.bio.image}
            alt="bioImage"
            className="bioImg"
          ></img>

          <div className="bio-box__header">
            <div className="bio-box__name">
              {props.bio.name}
            </div>
            <div className="bio-box__links">
              <a href={props.bio.githubLink}>
                <img src='./github.png'></img>
              </a>
            </div>
          </div>
          
          <p className="about-me">
            {props.bio.aboutMe}
          </p>
        </div>
      );
};

export default BioBox;