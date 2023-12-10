import React from 'react';
import '../../App.css';
import './Charities.scss'
import CharityBox from '../charityBox/CharityBox';
import { useState } from 'react'



const charityData = [
  {
    id:1,
    recipient:'Feeding America',
    charityType:['Food'],
    missionStatement:'Feeding America is the largest charity working to end hunger in the United States. We partner with food banks, food pantries, and local food programs to bring food to people facing hunger. We advocate for policies that create long-term solutions to hunger.',
    messageImage:'https://advancinglife.org/wp-content/uploads/sites/3/2020/08/ALF-Feeding-America-COVID-Blog-Image_ALF-Feeding-America-COVID.jpg',
    imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Feeding_America_logo.svg/440px-Feeding_America_logo.svg.png',
  },
  {
    id:2,
    recipient:'ASPCA',
    charityType:['Animal'],
    missionStatement:'The ASPCA`s mission is to provide effective means for the prevention of cruelty to animals throughout the United States. The ASPCA works to rescue animals from abuse, pass humane laws, and share resources with shelters nationwide.',
    messageImage:'https://www.aspca.org/sites/default/files/mail-a-check.jpg',
    imageUrl:'https://www.biodev.org/wp-content/uploads/2022/09/pasted-image-0-16.jpg',
  },
  {
    id:3,
    recipient:'American Red Cross',
    charityType: ['Worldwide'],
    missionStatement:'The American Red Cross prevents and alleviates human suffering in the face of emergencies by mobilizing the power of volunteers and the generosity of donors.​',
    messageImage:'https://www.redcross.org/content/dam/redcross/about-us/news/2020/disaster-response-12799-218.jpg',
    imageUrl:'https://www.redcross.org/content/dam/redcross/red-cross-logos/American-Red-Cross_Logo_1200x630.jpg',
  },
  {
    id:4,
    recipient:'UNICEF USA',
    charityType:['Education','Worldwide'],
    missionStatement:'UNICEF is on the ground in 190 countries and territories, providing children with the lifesaving supplies and assistance they desperately need.',
    messageImage:'https://chronicle.brightspotcdn.com/dims4/default/281a7bc/2147483647/strip/true/crop/3000x2000+0+0/resize/1680x1120!/format/webp/quality/90/?url=http%3A%2F%2Fchronicle-brightspot.s3.us-east-1.amazonaws.com%2Faf%2F17%2F1313c8283b4f723798e2072d701c%2F900e73cd524668fbbd512388eef3b5e7.jpg',
    imageUrl:'./unicef_logo.png',
  }
]

const getCharityType = () => {
  let filter = {}
  for (const charity of charityData) {
    let charityType = charity.charityType
    for (const type of charityType) {
      filter[type] = true
    }
  }
  return Object.keys(filter)
}






export default function Charities(props) {

  const [selectedTypes, setSelectedTypes] = useState([])

  const onCheckBox = (e) => {
    const value = e.target.value
    const check = e.target.checked
    if (selectedTypes.includes(value)) {
      const nextArray = selectedTypes.filter(type => {
        return (type !== value)
      })
      setSelectedTypes(nextArray)
    } else {
      const nextArray = [...selectedTypes]
      nextArray.push(value)
      setSelectedTypes(nextArray)
    } 
    console.log('worked!:', value, check)
  }

  let charities = charityData
  if (selectedTypes.length) {
    charities = charities.filter(c => 
      selectedTypes.some(type => 
        c.charityType.includes(type)))
  }

  return (  
  <div className="charities">
    <div className='charities__suggested-charities'> <span>suggested</span> charities</div>
    <div className='charities__main-content'>
      <div className='charities__selector'>
        <span className='charities__filters'>
          Filters
        </span>
        {getCharityType().map(type => {
          return (
            <label className='charities__label'>
              <input className='charities__checkbox' type='checkbox' value={type}
              onChange={onCheckBox}/>
              <span className='charities__type'>
              {type}
              </span>
            </label>
          )
        })}
      </div>
      <div className='charity-boxes'>
        {charities.map(charity => {
          return(
            <CharityBox key={charity.id} setUserPurchaseData={props.setUserPurchaseData} charity={charity}/>
          )
        })}
      </div>
      </div>
    </div>

);

} 