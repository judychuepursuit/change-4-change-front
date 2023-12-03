import { Link } from "react-router-dom";
import './CharityBox.css';

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
      <span className="charity-box__charity-type">
        {props.charity.charityType}
      </span>
      <div>
      <Link
        onClick={() => {
          props.setUserPurchaseData({
            recipient: props.charity.recipient,
          });
        }}
        to="/payment"
      >
        <button className="donation orange-button">DONATE</button>
      </Link>
      </div>
      <div className="charity-box__filter">
        
      </div>
    </div>
  );
};

export default CharityBox;