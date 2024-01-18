import React from "react";
import "../../App.css";
import "./Charities.scss";
import CharityBox from "../charityBox/CharityBox";
import { useState } from "react";
import FeedingAmericaLogo from "./charity-logos/feeding-america.png";
import RedCrossLogo from "./charity-logos/American_Red_Cross_logo.svg.png";
import ASPCALogo from "./charity-logos/ASPCA-logo-1536x864.png";
import UNICEFLogo from "./charity-logos/Unicef_logo.png";
import ASPCAMessage from "./charity-images/aspca_home.jpg";
import FeedingAmericaMessage from "./charity-images/feed_america2-home.jpg";
import RedCrossMessage from "./charity-images/red-cross3_home.jpg";
import UNICEFMessage from "./charity-images/unicef_home.jpg";

const charityData = [
  {
    id: 1,
    recipient: "Feeding America",
    charityType: ["food"],
    missionStatement:
      "Feeding America is the largest charity working to end hunger in the United States. We partner with food banks, food pantries, and local food programs to bring food to people facing hunger. We advocate for policies that create long-term solutions to hunger.",
    messageImage: FeedingAmericaMessage,
    imageUrl: FeedingAmericaLogo,
  },
  {
    id: 2,
    recipient: "ASPCA",
    charityType: ["animal"],
    missionStatement:
      "The ASPCA`s mission is to provide effective means for the prevention of cruelty to animals throughout the United States. The ASPCA works to rescue animals from abuse, pass humane laws, and share resources with shelters nationwide.",
    messageImage: ASPCAMessage,
    imageUrl: ASPCALogo,
  },
  {
    id: 3,
    recipient: "American Red Cross",
    charityType: ["worldwide"],
    missionStatement:
      "The American Red Cross prevents and alleviates human suffering in the face of emergencies by mobilizing the power of volunteers and the generosity of donors.​",
    messageImage: RedCrossMessage,
    imageUrl: RedCrossLogo,
  },
  {
    id: 4,
    recipient: "UNICEF USA",
    charityType: ["education", "worldwide"],
    missionStatement:
      "UNICEF is on the ground in 190 countries and territories, providing children with the lifesaving supplies and assistance they desperately need.",
    messageImage: UNICEFMessage,
    imageUrl: UNICEFLogo,
  },
];

const getCharityType = () => {
  let filter = {};
  for (const charity of charityData) {
    let charityType = charity.charityType;
    for (const type of charityType) {
      filter[type] = true;
    }
  }
  return Object.keys(filter);
};

export default function Charities(props) {
  const [selectedTypes, setSelectedTypes] = useState([]);

  const onCheckBox = (e) => {
    const value = e.target.value;
    const check = e.target.checked;
    if (selectedTypes.includes(value)) {
      const nextArray = selectedTypes.filter((type) => {
        return type !== value;
      });
      setSelectedTypes(nextArray);
    } else {
      const nextArray = [...selectedTypes];
      nextArray.push(value);
      setSelectedTypes(nextArray);
    }
    console.log("worked!:", value, check);
  };

  let charities = charityData;
  if (selectedTypes.length) {
    charities = charities.filter((c) =>
      selectedTypes.some((type) => c.charityType.includes(type))
    );
  }

  return (
    <div className="charities">
      <div className="charities__suggested-charities">
        {" "}
        <span>suggested</span> charities
      </div>
      <div className="charities__main-content">
        <div className="charities__selector">
          <span className="charities__filters">Filters</span>
          {getCharityType().map((type) => {
            return (
              <label className="charities__label">
                <input
                  className="charities__checkbox"
                  type="checkbox"
                  value={type}
                  onChange={onCheckBox}
                />
                <span className="charities__type">{type}</span>
              </label>
            );
          })}
        </div>
        <div className="charity-boxes">
          {charities.map((charity) => {
            return (
              <CharityBox
                key={charity.id}
                setUserPurchaseData={props.setUserPurchaseData}
                charity={charity}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
