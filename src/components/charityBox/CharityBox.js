import { Link } from "react-router-dom";
import './CharityBox.scss';

const CharityBox = (props) => {
  return (
    <div className="charity-box">
      <img className="charity-box__logo"
        src={props.charity.imageUrl}
        alt='imageUrl'>
      </img>
      <img className='charity-box__message-image'
          src={props.charity.messageImage}
          alt="messageImage"
        ></img>
      <p className="charity-box__mission-statement">
        {props.charity.missionStatement}
      </p>
      <div className="charity-box__charity-type-container">
      {props.charity.charityType.map(charity => {
        return (
          <span className="charity-box__charity-type">
            {charity}
          </span>
        )
      })}
      </div>
      <div>
      <Link
        onClick={() => {
          props.setUserPurchaseData({
            recipient: props.charity.recipient,
          });
        }}
        to="/payment"
      >
        <button className="charity-box__donation">DONATE</button>
      </Link>
      </div>
      <div className="charity-box__filter">
        
      </div>
    </div>
  );
};

export default CharityBox;