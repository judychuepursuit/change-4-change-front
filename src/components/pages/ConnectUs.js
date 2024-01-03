
import React from 'react';
import './ConnectUs.css'
import BioBox from '../bioBox/BioBox'


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
    <div className='connect-us__header-picture'></div>
    <div className='connect-us__content'>
  
      <div className='connect'>connect</div>
      <div className='personal-mission'>
        <p>The goal of the change 4 change app is to bring donating to everyone. our app
          serves to not only create an ease of access for individuals to donate to a cause they 
          find personal to them, but also works to change the way people view donating by gamifying their
          experience. 
        </p>
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