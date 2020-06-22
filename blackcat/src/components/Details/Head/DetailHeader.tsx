import React from 'react';
import style from './detailheader.module.scss';
import classname from 'classnames/bind';

const cx = classname.bind(style);

const DetailHeader: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <span className="channel-name">Channel name</span>
      <div className="card-title" id="card-title-details">Activity Title Name Make it Longer May Longer than One Line</div>
      <div>
        {/* <img className="card-usr-img" id="card-usr-img-details" alt="user profile" src={Image} /> */}
        <span className="user-name">Username</span><br/>
        <span className="activity-published">Published 2 days ago</span>
      </div>
      <div className="details-bar">
        <button id="details-detail-btn">Details</button>
        <button id="details-comments-btn">Comments</button>
        <button id="details-participants-btn">Participants</button>
    </div>
    </div>
  );
};

export default DetailHeader;