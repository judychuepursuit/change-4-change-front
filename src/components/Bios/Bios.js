import React from "react";
import './Bios.css';
import { Link } from "react-router-dom";

const Bios = (props) => {
    return (
        <div className="bio-box">
          <p className="name"> 
          {props.bio.name}
          </p>
          {/* <br></br> */}
          {/* <img
              src={props.bio.image}
              alt="bioImage"
              className="bioImg"
            ></img>
            <br></br> */}
          <a href={props.bio.githubLink}>Github</a>
          {/* <br></br> */}
          {/* <p className="about-me">
            {props.bio.aboutMe}
          </p> */}
        </div>
      );
};

export default Bios;