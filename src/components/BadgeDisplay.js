import React from 'react';
import badgeData from '../reward-data/badgeData.js'

const BadgeDisplay = ({ points, hasSignedUp, hasDonated }) => {
  // Filter badges based on conditions
  const filteredBadges = badgeData.filter(badge => {
    if (hasSignedUp && badge.pointsAmount === 0) {
      return true; // Show Sign up badge
    }
    if (hasDonated && badge.pointsAmount === 50 && badge.pointsAmount > 100) {
      return true; // Show 50 Points badge
    }
    if (hasDonated && badge.pointsAmount === 100 && badge.pointsAmount > 150) {
      return true; // Show 50 Points badge
    }
    if (hasDonated && badge.pointsAmount === 150 && badge.pointsAmount > 200) {
      return true; // Show 50 Points badge
    }
    if (hasDonated && badge.pointsAmount === 200 && badge.pointsAmount > 250) {
      return true; // Show 50 Points badge
    }
    if (hasDonated && badge.pointsAmount === 250 && badge.pointsAmount > 300) {
      return true; // Show 50 Points badge
    }
    if (hasDonated && badge.pointsAmount === 300) {
      return true; // Show 50 Points badge
    }
    if (points >= 500 && badge.pointsAmount === 500) {
      return true; // Show Unicorn Badge
    }
    return false;
  });
  
  return (

    <div>
      
      <div className="badge-container">
        {filteredBadges.map(badge => (
          <div key={badge.id} className="badge-item">
            <img src={badge.img} alt={badge.name} />
            <p>{badge.name}</p>
            <p>Points: {badge.pointsAmount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeDisplay;
