import React from 'react';
import '../../App.css';
import './Charities.css'


export default function Charities() {
  return (  
  <div className="charities">
    <div className='suggested-charities'>Suggested <br></br> Charities</div>
    <br></br>
    <div className='charity-box'>
      <a href='https://secure.aspca.org/donate/ps-gn-p2?ms=MP_PMK_Googlebrand&initialms=MP_PMK_Googlebrand&pcode=WPSN7GO2PK01&lpcode=WPSN7GO1PK01&test&ds_rl=1066461&gad=1&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NOKUGazmuhnQ5UAlcLa5Bq_wZxto2hCL8XhpOu_w3hGw5sBs8y1vYhoCH4cQAvD_BwE&gclsrc=aw.ds'>
        <img src='https://www.animalprotective.org/dev/wp-content/uploads/2016/08/aspca_logo-768x294.jpg' alt='aspca'></img>
        <button className='donation'>
        </button>
      </a>
          <p className='mission-statement'>The ASPCA's mission is to "provide effective means for the prevention of cruelty to animals throughout the United States." The ASPCA works to rescue animals from abuse, pass humane laws, and share resources with shelters nationwide.</p>
    </div>
    <div className='charity-box'>
      <a href='https://give.feedingamerica.org/eWty0B_BnEuWDFrVoP7NuQ2?s_src=Y24YP2G1Z&utm_source=google&utm_medium=cpc&utm_content=fb&utm_campaign=paid&s_subsrc=c&s_keyword=donate%20money%20for%20food&gad=1&gclid=CjwKCAjw1t2pBhAFEiwA_-A-NN6zWf8aeof7Hdxi894zYGH7_kvohtKqaq5FrcOF8HXj_jgYdlu91xoCtJoQAvD_BwE&gclsrc=aw.ds'>
        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Feeding_America_logo.svg/440px-Feeding_America_logo.svg.png' alt='feeding-america'></img>
      </a>
          <p className='mission-statement'>Feeding America is the largest charity working to end hunger in the United States. We partner with food banks, food pantries, and local food programs to bring food to people facing hunger. We advocate for policies that create long-term solutions to hunger.</p>
    </div>
    <div className='charity-box'>
      <a href='https://www.redcross.org/donate/donation.html/'>
        <img src='https://bloximages.newyork1.vip.townnews.com/spiritofomaha.com/content/tncms/assets/v3/editorial/e/97/e972a4be-737c-5737-9b3d-6bf1608d4155/5f241adfa5c01.image.jpg?resize=1200%2C534' alt='red-cross'></img>
      </a>
          <p className='mission-statement'>The Red Cross honors donor intent and all donations earmarked for Disaster Relief will be used to help people affected by disasters, big and small. Americans work hard for their money, and we’re committed to being the very best stewards of our donors’ dollar.</p>
    </div>
    <div className='charity-box'>
      <a href='https://www.unicefusa.org/'>
        <img src='https://images.squarespace-cdn.com/content/v1/56aca675f8baf35958bfaec6/1484432098546-YQO6NJJQBC8506FIN2FH/image-asset.jpeg?format=2500w' alt='unicefusa'></img>
      </a>
          <p className='mission-statement'>Relentlessly Pursuing a Better World for Every Child
UNICEF has helped save and meaningfully improve more children’s lives than any other humanitarian organization. UNICEF won’t stop until every child is healthy, educated, protected and respected.</p>
    </div>
  </div>
);

}