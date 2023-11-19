import React from 'react';
import '../../App.css';
import './Charities.css'
import CharityBox from '../charityBox/CharityBox';

const charityData = [
  {
    id:1,
    recipient:'Feeding America',
    missionStatement:'Feeding America is the largest charity working to end hunger in the United States. We partner with food banks, food pantries, and local food programs to bring food to people facing hunger. We advocate for policies that create long-term solutions to hunger.',
    messageImage:'https://advancinglife.org/wp-content/uploads/sites/3/2020/08/ALF-Feeding-America-COVID-Blog-Image_ALF-Feeding-America-COVID.jpg',
    imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Feeding_America_logo.svg/440px-Feeding_America_logo.svg.png',
  },
  {
    id:2,
    recipient:'ASPCA',
    missionStatement:'The ASPCA`s mission is to provide effective means for the prevention of cruelty to animals throughout the United States. The ASPCA works to rescue animals from abuse, pass humane laws, and share resources with shelters nationwide.',
    messageImage:'https://www.aspca.org/sites/default/files/mail-a-check.jpg',
    imageUrl:'https://www.biodev.org/wp-content/uploads/2022/09/pasted-image-0-16.jpg',
  },
  {
    id:3,
    recipient:'American Red Cross',
    missionStatement:'The American Red Cross prevents and alleviates human suffering in the face of emergencies by mobilizing the power of volunteers and the generosity of donors.​',
    messageImage:'https://www.redcross.org/content/dam/redcross/about-us/news/2020/disaster-response-12799-218.jpg',
    imageUrl:'https://www.redcross.org/content/dam/redcross/red-cross-logos/American-Red-Cross_Logo_1200x630.jpg',
  },
  {
    id:4,
    recipient:'UNICEF USA',
    missionStatement:'UNICEF is on the ground in 190 countries and territories, providing children with the lifesaving supplies and assistance they desperately need.',
    messageImage:'https://chronicle.brightspotcdn.com/dims4/default/281a7bc/2147483647/strip/true/crop/3000x2000+0+0/resize/1680x1120!/format/webp/quality/90/?url=http%3A%2F%2Fchronicle-brightspot.s3.us-east-1.amazonaws.com%2Faf%2F17%2F1313c8283b4f723798e2072d701c%2F900e73cd524668fbbd512388eef3b5e7.jpg',
    imageUrl:'https://images.squarespace-cdn.com/content/v1/56aca675f8baf35958bfaec6/1481067906159-7AJ2R9AQOXSY2GJIAXI2/image-asset.png?format=2500w',
  }
]


export default function Charities(props) {

  return (  
  <div className="charities">
    <div className='suggested-charities'>Suggested Charities</div>
    <div className='charity-boxes'>
      {charityData.map(charity => {
        return(
          <CharityBox key={charity.id} setUserPurchaseData={props.setUserPurchaseData} charity={charity}/>
        )
      })}
      
    {/* <div className='charity-box'>
      <a href='https://www.redcross.org/donate/donation.html/'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/7/7f/American_Red_Cross_logo.svg' alt='red-cross'></img>
      </a>
          <p className='mission-statement'>The Red Cross honors donor intent and all donations earmarked for Disaster Relief will be used to help people affected by disasters, big and small. Americans work hard for their money, and we’re committed to being the very best stewards of our donors’ dollar.</p>
            <Link onClick={() => {
              props.setUserPurchaseData({
                recipient:'Red Cross'
              })
            }}to='/payment'>
              <button className='donation'>DONATE</button>
            </Link>
            
    </div> */}
    {/* <div className='charity-box'>
      <a href='https://www.unicefusa.org/'>
        <img src='https://images.squarespace-cdn.com/content/v1/56aca675f8baf35958bfaec6/1484432098546-YQO6NJJQBC8506FIN2FH/image-asset.jpeg?format=2500w' alt='unicefusa'></img>
      </a>
          <p className='mission-statement'>Relentlessly Pursuing a Better World for Every Child
UNICEF has helped save and meaningfully improve more children’s lives than any other humanitarian organization. UNICEF won’t stop until every child is healthy, educated, protected and respected.</p>
            <Link onClick={() => {
              props.setUserPurchaseData({
                recipient: 'UNICEFUSA'
              })
            }}to='/payment'>
              <button className='donation'>DONATE</button>
            </Link>
    </div> */}
    </div>
  </div>
);

} 