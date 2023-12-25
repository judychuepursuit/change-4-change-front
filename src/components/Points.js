// This will disply the points earned on the rewards page. 
import React from "react";
import {useState, useEffect} from "react";
import RewardsModal from "./modal/BadgesModal";

function Points ({donationAmount}) {

const [points, setPoints] = useState(0);
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
        // setShowModal(true);
      }
  }, [points]);

 // This calls the updatePoints function when a donation is made
  updatePoints(donationAmount);

  
  // This will display the badge earned
  function getBadge(points) {
    const badges = [
      { name: 'Badge 1', points: 10, imageName: 'badge1.png' },
      { name: 'Badge 2', points: 50, imageName: 'badge2.png' },
      { name: 'Badge 3', points: 100, imageName: 'badge3.png' },
      { name: 'Badge 4', points: 150, imageName: 'badge4.png' },
      { name: 'Badge 5', points: 200, imageName: 'badge5.png' },
      { name: 'Badge 6', points: 250, imageName: 'badge6.png' },
      { name: 'Badge 7', points: 500, imageName: 'badge7.png' },
    ];
  
    let earnedBadge = null;
  
    for (let i = badges.length - 1; i >= 0; i--) {
      if (points >= badges[i].points) {
        earnedBadge = badges[i];
        break;
      }
    }
  
    return earnedBadge;
  }
  
  // Example usage:
  // const userPoints = 120;
 
  const earnedBadge = getBadge(points);
  
  // if (earnedBadge) {
  //   console.log(`Congratulations! You earned ${earnedBadge.name} with ${earnedBadge.points} points.`);
  //   console.log(`Badge Image: ${earnedBadge.imageName}`);
  // } else {
  //   console.log('No badge earned yet. Keep earning points!');
  // }
  

    return (
      <div>
        <div>
          Points: {points}
        </div>
        {/* <RewardsModal /> */}
      </div>
    
    );
}

export default Points;
