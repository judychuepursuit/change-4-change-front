import { Link } from "react-router-dom";
import './CharityBox.css';

const CharityBox = (props) => {
  return (
    <div className="charity-box">
      <img 
        src={props.charity.imageUrl}
        alt='imageUrl'>
      </img>
      <img
          src={props.charity.messageImage}
          alt="messageImage"
          className="messageImg"
        ></img>
      <p className="mission-statement">
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
        <button className="donation orange-button">DONATE</button>
      </Link>
      </div>
    </div>
  );
};

export default CharityBox;