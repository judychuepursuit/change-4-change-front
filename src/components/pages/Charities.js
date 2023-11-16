import React from 'react';
import '../../App.css';
import './Charities.css'
import CharityBox from '../charityBox/CharityBox';

const charityData = [
  {
    id:1,
    recipient:'Feeding America',
    missionStatement:'Feeding America is the largest charity working to end hunger in the United States. We partner with food banks, food pantries, and local food programs to bring food to people facing hunger. We advocate for policies that create long-term solutions to hunger.',
    url:'https://give.feedingamerica.org/eWty0B_BnEuWDFrVoP7NuQ2?s_src=Y24YP2G1Z&utm_source=google&utm_medium=cpc&utm_content=fb&utm_campaign=paid&s_subsrc=c&s_keyword=donate%20money%20for%20food&gad=1&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NN6zWf8aeof7Hdxi894zYGH7_kvohtKqaq5FrcOF8HXj_jgYdlu91xoCtJoQAvD_BwE&gclsrc=aw.ds',
    imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Feeding_America_logo.svg/440px-Feeding_America_logo.svg.png',
  },
  {
    id:2,
    recipient:'Feeding America',
    missionStatement:'Feeding America is the largest charity working to end hunger in the United States. We partner with food banks, food pantries, and local food programs to bring food to people facing hunger. We advocate for policies that create long-term solutions to hunger.',
    url:'https://give.feedingamerica.org/eWty0B_BnEuWDFrVoP7NuQ2?s_src=Y24YP2G1Z&utm_source=google&utm_medium=cpc&utm_content=fb&utm_campaign=paid&s_subsrc=c&s_keyword=donate%20money%20for%20food&gad=1&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NN6zWf8aeof7Hdxi894zYGH7_kvohtKqaq5FrcOF8HXj_jgYdlu91xoCtJoQAvD_BwE&gclsrc=aw.ds',
    imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Feeding_America_logo.svg/440px-Feeding_America_logo.svg.png',
  },
  {
    id:3,
    recipient:'Feeding America',
    missionStatement:'Feeding America is the largest charity working to end hunger in the United States. We partner with food banks, food pantries, and local food programs to bring food to people facing hunger. We advocate for policies that create long-term solutions to hunger.',
    url:'https://give.feedingamerica.org/eWty0B_BnEuWDFrVoP7NuQ2?s_src=Y24YP2G1Z&utm_source=google&utm_medium=cpc&utm_content=fb&utm_campaign=paid&s_subsrc=c&s_keyword=donate%20money%20for%20food&gad=1&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NN6zWf8aeof7Hdxi894zYGH7_kvohtKqaq5FrcOF8HXj_jgYdlu91xoCtJoQAvD_BwE&gclsrc=aw.ds',
    imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Feeding_America_logo.svg/440px-Feeding_America_logo.svg.png',
  },
  {
    id:4,
    recipient:'Feeding America',
    missionStatement:'Feeding America is the largest charity working to end hunger in the United States. We partner with food banks, food pantries, and local food programs to bring food to people facing hunger. We advocate for policies that create long-term solutions to hunger.',
    url:'https://give.feedingamerica.org/eWty0B_BnEuWDFrVoP7NuQ2?s_src=Y24YP2G1Z&utm_source=google&utm_medium=cpc&utm_content=fb&utm_campaign=paid&s_subsrc=c&s_keyword=donate%20money%20for%20food&gad=1&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NN6zWf8aeof7Hdxi894zYGH7_kvohtKqaq5FrcOF8HXj_jgYdlu91xoCtJoQAvD_BwE&gclsrc=aw.ds',
    imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Feeding_America_logo.svg/440px-Feeding_America_logo.svg.png',
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