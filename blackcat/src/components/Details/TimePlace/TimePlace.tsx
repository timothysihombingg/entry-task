import React from 'react';
import style from './timeplace.module.scss';
import classname from 'classnames/bind';
import Map from '../../../assets/images/gmap.png';
import { IActivity } from '../../../types/activity.types';
import { ReactComponent as DateFrom } from '../../../assets/svgs/date-from.svg';
import { ReactComponent as DateTo } from '../../../assets/svgs/date-to.svg';

const cx = classname.bind(style);

interface Props {
  activity1: IActivity;
}

const TimePlace: React.FunctionComponent<Props> = ({
  activity1
}) => {
  return (
    <div className={cx('time-place')}>
      <div>
        <p className={cx('time-place-header')}>When</p>
        <div className={cx('time-container')}>
          <div>
            <DateFrom className={cx('time-img')}/>
            <span>{activity1.start_date}</span>
            <p>{activity1.start_time}</p>
          </div>
          <div>
            <DateTo className={cx('time-img')}/>
            <span>{activity1.end_date}</span>
            <p>{activity1.end_time}</p>
          </div>
        </div>
      </div>
      <hr/>
      <div className={cx('activity-location')}>
        <p className={cx('time-place-header')}>Where</p>
        <h5>{activity1.location}</h5>
        <span>{activity1.address}</span>
        <img src={Map} alt="location" />
      </div>
    </div>
    
  );
};

export default TimePlace;