import React from "react";
import './Bios.css';

const Bios = (props) => {
    return (
        <div className="bio-box">
          <p 
            src={props.bio.name}
            alt='imageUrl'>
          </p>
          <br></br>
          <img
              src={props.bio.image}
              alt="bioImage"
              className="bioImg"
            ></img>
            <br></br>
          <a href={props.bio.githubLink}>Github</a>
          <br></br>
          <p className="about-me">
            {props.bio.aboutMe}
          </p>
        </div>
      );
};

export default Bios;