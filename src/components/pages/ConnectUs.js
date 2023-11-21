
import React from 'react';
import './ConnectUs.css'
import BioBox from '../bioBox/BioBox'
import { Link } from 'react-router-dom';


const bios = [
  
  {
    id:2,
    name: 'Allahvel Salisbury',
    image: 'https://avatars.githubusercontent.com/u/119988077?v=4',
    githubLink: 'https://github.com/AllahvelS',
    aboutMe:'A full stack software engineer.',
  },
  {
    id:1,
    name: 'Angel Tirado',
    image: 'https://avatars.githubusercontent.com/u/122419430?v=4',
    githubLink: 'https://github.com/atiradoGit88',
    aboutMe:'A young eager full stack software engineer.',
  },
  {
    id:3,
    name: 'Judy Chue',
    image: 'https://avatars.githubusercontent.com/u/114921268?v=4',
    githubLink: 'https://github.com/judychuepursuit',
    aboutMe:'A full stack software engineer.',
  },
  {
    id:4,
    name: 'Kinu Wright',
    image: 'https://avatars.githubusercontent.com/u/122734380?v=4',
    githubLink: 'https://github.com/wrightKinu',
    aboutMe:'A full stack software engineer.',
  },
  {
    id:5,
    name: 'Sabri Mohiuddin',
    image: 'https://avatars.githubusercontent.com/u/122192203?v=4',
    githubLink: 'https://github.com/sabrimohiuddin',
    aboutMe:'A full stack software engineer.',
  }
]

export default function ConnectUs() {
  return (  
  <div className="connect-us">
    <div className='header-picture'></div>
    <div className='connect-us__content'>
  
      <div className='connect'>CONNECT</div>
      <div className='personal-mission'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='connect-us__bios'>
        {bios.map(bio => {
          return(
          <BioBox key={bio.id} bio={bio}/>
          )
        })}
      </div>
    </div>
  </div>
);

}