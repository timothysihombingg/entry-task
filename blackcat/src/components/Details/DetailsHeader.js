import React from 'react';
import Image from '../../assets/images/gmap.png';
import './DetailsHeader.css'

function DetailsHeader() {
  return (
    <div className="details-header">
      <div className="channel-name" id="channel-name-details">Channel name</div>
      <div className="card-title" id="card-title-details">Activity Title Name Make it Longer May Longer than One Line</div>
      <div>
        <img class="card-usr-img" id="card-usr-img-details" alt="user profile" src={Image} />
        <span className="user-name">Username</span><br/>
        <span className="activity-published">Published 2 days ago</span>
      </div>
    </div>
  );
}

export default DetailsHeader;