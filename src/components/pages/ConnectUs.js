
import React from 'react';
import './ConnectUs.css'
import Bios from '../Bios/Bios';

const bios = [
  {
    id:1,
    name: 'Angel Tirado',
    image: 'https://avatars.githubusercontent.com/u/122419430?v=4',
    githubLink: 'https://github.com/atiradoGit88',
    aboutMe:'A young eager full stack software engineer.',
  },
  {
    id:2,
    name: 'Allahvel Salisbury',
    image: 'https://avatars.githubusercontent.com/u/119988077?v=4',
    githubLink: 'https://github.com/AllahvelS',
    aboutMe:'A full stack software engineer.',
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
  <div className="connectus">
    <div className='header-picture'>
      <img src='https://media.discordapp.net/attachments/756738190219673693/1172955746779009155/connect_banner_image.jpg?ex=6562332a&is=654fbe2a&hm=2af9a80c30195e149fb9816df1c5d6755010e4c6808812c1bf3b454fbc48c924&=&width=2160&height=778' alt='mission-field'></img>
    </div>
    <div>
      <p className='donation-statistics'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
      <div className='connect'>
        <p>CONNECT</p>
      </div>
    <div className='personal-mission'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className='github-bio'>
      {bios.map(bio => {
        return(
        <Bios key={bio.id} bio={bio}/>
        )
      })}
    </div>
  </div>
);

}