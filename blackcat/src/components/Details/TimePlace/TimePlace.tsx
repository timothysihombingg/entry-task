import React from 'react';
import style from './timeplace.module.scss';
import classname from 'classnames/bind';

const cx = classname.bind(style);

const TimePlace: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <div className="activity-date">
        <p>When</p>
        <div>
          <span>15 April 2020</span>
          <span>8:30 AM</span>
        </div>
        <div>
          <span>15 April 2020</span>
        </div>
      </div>
      <div className="activity-location">
        <span>Where</span>
        <p>
          Marina Bay Sands<br/>
          <span>10 Bayfront Ave, S018956</span>
        </p>
        {/* <img src={} alt="location" /> */}
      </div>
    </div>
  );
};

export default TimePlace;