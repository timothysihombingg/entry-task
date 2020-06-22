import React from 'react';
import style from './timeplace.module.scss';
import classname from 'classnames/bind';
import Map from '../../../assets/images/gmap.png';
import { ReactComponent as DateFrom } from '../../../assets/svgs/date-from.svg';
import { ReactComponent as DateTo } from '../../../assets/svgs/date-to.svg';

const cx = classname.bind(style);

const TimePlace: React.FunctionComponent<{}> = () => {
  return (
    <div className={cx('time-place')}>
      <div>
        <p className={cx('time-place-header')}>When</p>
        <div className={cx('time-container')}>
          <div>
            <DateFrom className={cx('time-img')}/>
            <span>15 April 2020</span>
            <p>8:30 AM</p>
          </div>
          <div>
            <DateTo className={cx('time-img')}/>
            <span>15 April 2020</span>
            <p>8:30 AM</p>
          </div>
        </div>
      </div>
      <hr/>
      <div className={cx('activity-location')}>
        <p className={cx('time-place-header')}>Where</p>
        <h5>Marina Bay Sands</h5>
        <span>10 Bayfront Ave, S018956</span>
        <img src={Map} alt="location" />
      </div>
    </div>
  );
};

export default TimePlace;