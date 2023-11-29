import React from 'react';
import badgeData from "./badgeData.js"
import lev1RedBadge from '../reward-img/lev 1 red badge.png';
import lev1OrangeBadge from '../reward-img/lev 1 orange badge.png';
import lev1YelBadge from '../reward-img/lev 1 yel badge.png';
import lev1GrnBadge from '../reward-img/lev 1 grn_badge.png';
import lev1BluBadge from '../reward-img/lev 1 blu badge.png';
import lev1IndigoBadge from '../reward-img/lev 1 indigo badge.png';
import lev1VioBadge from '../reward-img/lev 1 vio badge.png';
import unicornBadge from '../reward-img/unicorn badge.png';

const BadgeGallery = () => {
  const badgeImages = [
    lev1RedBadge,
    lev1OrangeBadge,
    lev1YelBadge,
    lev1GrnBadge,
    lev1BluBadge,
    lev1IndigoBadge,
    lev1VioBadge,
    unicornBadge,
  ];

  return (
    <div>
      {badgeData.map((badge, index) => (
        <div key={badge.id}>
          <img
            src={badgeImages[index]}
            alt={badge.name}
            style={{ width: '100px', height: '100px', margin: '10px' }}
          />
          <p>{badge.name}</p>
        </div>
      ))}
    </div>
  );
};



export default BadgeGallery;

