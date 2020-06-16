import * as React from 'react'
import Image from '../../assets/images/gmap.png';
import Time from '../../assets/svgs/time.svg';
import Check from '../../assets/svgs/check-outline.svg';
import Like from '../../assets/svgs/like-outline.svg';

import './Card.css'

function Card() {
  return (
    <div className="home-card">
      <div className="user-name-container">
        <img alt="user profile" src={Image} />
        <span className="user-name">Username</span>
        <span className="channel-name">Channel name longer</span>
      </div>
      <div>
        <div className="card-title-date">
          <div>Activity Title Name Make it Longer May Longer than One Line</div>
          <img alt="user profile" src={Time} />
          <span>14 May 2016 - 14 May 2016</span>
          <p>
            [No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi potenti...
          </p>
        </div>
        {/* <img className="card-img" alt="user profile" src={Image} />  */}
      </div>
      <div>
        <div className="card-like">
          <img alt="user profile" src={Check} />
          <p>6 Going</p>
        </div>
        <div className="card-like">
          <img alt="user profile" src={Like} />
          <p>10 Likes</p>
        </div>
      </div>
    </div>
  );
}

export default Card;