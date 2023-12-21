import React from "react";
import {useState} from "react";
import RewardsModal from "./modal/RewardsModal";

function Points ({donationAmount}) {

const[points, setPoints] = useState(0);
const [showModal, setShowModal] = useState(false);

const updatePoints = (amount) => {
    // Calculate points earned for the current donation
    const earnedPoints = Math.floor(amount); // Assuming 1 point per dollar

    // Update total points
    setPoints((prevPoints) => prevPoints + earnedPoints);
};
    // Check if the user has earned an additional bonus (2 points) for every 100 points
    useEffect(() => {
      if (points >= 100) {
        setPoints((prevPoints) => prevPoints + 2);
        setShowModal(true);
      }
  }, [points]);



  // Call the updatePoints function when a donation is made
  updatePoints(donationAmount);


    return (
     <RewardsModal />
    );
}

export default Points;
