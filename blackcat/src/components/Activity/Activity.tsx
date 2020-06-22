import React from 'react';
import classnames from 'classnames/bind';
import styles from './activity.module.scss';
import { IActivity } from '../../types/activity.types'
import { ReactComponent as People } from '../../assets/svgs/people.svg';
import { ReactComponent as Time } from '../../assets/svgs/time.svg';
import { ReactComponent as Check } from '../../assets/svgs/check-outline.svg';
import { ReactComponent as Like } from '../../assets/svgs/like-outline.svg';

const cx = classnames.bind(styles);

interface Props {
  activity1: IActivity;
}

const Activity: React.FunctionComponent<Props> = ({
  activity1
}) => {
  const totalParticipants = activity1.participants.length;
  const totalLikes = activity1.likes.length;

  return (
    <div className={cx('activity')}>
      <header>
        <div>
          <People className={cx('activity-pp')}/>
          <p>{activity1.username}</p>
        </div>
        <span>{activity1.channel_name}</span>
      </header>
      <h2>{activity1.title}</h2>
      <div className={cx('activity-date')}>
        <Time className={cx('activity-icon')}/>
        <span>{activity1.start_date} {activity1.start_time} - {activity1.end_date} {activity1.end_time}</span>
      </div>
      <p>{activity1.description}</p>
      <div className={cx('check-like-container')}>
        <Check className={cx('activity-icon')}/>
        <span>{totalParticipants} Going</span>
        <Like className={cx('activity-icon')}/>
        <span>{totalLikes} Likes</span>
      </div>
    </div>  
  );
};

export default Activity;