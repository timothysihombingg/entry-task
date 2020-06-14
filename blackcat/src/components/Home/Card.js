import React from 'react';
import Image from '../../assets/images/gmap.png';
import Time from '../../assets/svgs/time.svg';
import Check from '../../assets/svgs/check-outline.svg';
import Like from '../../assets/svgs/like-outline.svg';

import './Card.css'

function Card() {
  return (
    <div className="home-card">
      <div className="user-name-container">
        <img class="card-usr-img" alt="user profile" src={Image} />
        <div className="user-name">Username</div>
        <div className="channel-name">Channel name longer</div>
      </div>
      <div>
        <div className="card-title-date">
          <div className="card-title">Activity Title Name Make it Longer May Longer than One Line</div>
          <img className="card-time-img" alt="user profile" src={Time} />
          <p className="card-date">14 May 2016 - 14 May 2016</p>
          <p className="card-desc">
            [No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi potenti...
          </p>
        </div>
        {/* <img className="card-img" alt="user profile" src={Image} />  */}
      </div>
      <div>
        <div className="card-like">
          <img className="card-check-img" alt="user profile" src={Check} />
          <p className="card-check">6 Going</p>
        </div>
        <div className="card-like">
          <img className="card-like-img" alt="user profile" src={Like} />
          <p className="card-check">10 Likes</p>
        </div>
      </div>
    </div>
  );
}

export default Card;