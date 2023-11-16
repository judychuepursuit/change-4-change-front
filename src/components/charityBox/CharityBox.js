import { Link } from "react-router-dom";
import './CharityBox.css';

const CharityBox = (props) => {
  return (
    <div className="charity-box">
      <a href={props.charity.url}>
        <img
          src={props.charity.imageUrl}
          alt="aspca"
        ></img>
      </a>
      <p className="mission-statement">
        {props.charity.missionStatement}
      </p>
      <div>
      <Link
        onClick={() => {
          props.setUserPurchaseData({
            recipient: props.charity.recipient,
          });
        }}
        to="/payment"
      >
        <button className="donation">DONATE</button>
      </Link>
      </div>
    </div>
  );
};

export default CharityBox;
