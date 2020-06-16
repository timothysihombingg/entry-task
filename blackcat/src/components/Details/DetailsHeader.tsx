import * as React from 'react'
import Image from '../../assets/images/gmap.png';
import './DetailsHeader.css'

function DetailsHeader() {
  return (
    <div className="details-header">
      <span className="channel-name">Channel name</span>
      <div className="card-title" id="card-title-details">Activity Title Name Make it Longer May Longer than One Line</div>
      <div>
        <img className="card-usr-img" id="card-usr-img-details" alt="user profile" src={Image} />
        <span className="user-name">Username</span><br/>
        <span className="activity-published">Published 2 days ago</span>
      </div>
    </div>
  );
}

export default DetailsHeader;