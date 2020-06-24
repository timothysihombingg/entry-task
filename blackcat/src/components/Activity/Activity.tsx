import React from 'react';
import classnames from 'classnames/bind';
import styles from './activity.module.scss';
import { IActivity } from '../../types/activity.types'
import { ReactComponent as People } from '../../assets/svgs/people.svg';
import { ReactComponent as Time } from '../../assets/svgs/time.svg';
import { ReactComponent as Check } from '../../assets/svgs/check-outline.svg';
import { ReactComponent as Like } from '../../assets/svgs/like-outline.svg';
import { useHistory } from 'react-router-dom';

const cx = classnames.bind(styles);

interface Props {
  activity1: IActivity;
}

const Activity: React.FunctionComponent<Props> = ({
  activity1
}) => {
  const totalParticipants = activity1.participants.length;
  const totalLikes = activity1.likes.length;
  const history = useHistory()

  return (
    <div className={cx('activity')} onClick={() => {
      history.push('/activity/'+activity1.id)
    }}>
      <header>
        <div>
          <img src={activity1.profile_picture} className={cx('activity-pp')}/>
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
        <Check className={cx('activity-icon')} onClick={() => {
          fetch('http://localhost:4000/participate', {
            method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                activityid: activity1.id, 
                username: activity1.username,  
                profile_picture: activity1.profile_picture
              })
          })
          .then(response => response.json())
          .then(data => {
            if (data === "success") {
              history.push('/home')
            }
          })
        }}/>
        <span>{totalParticipants} Going</span>
        <Like className={cx('activity-icon')} onClick={() => {
          fetch('http://localhost:4000/like', {
            method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                activityid: activity1.id, 
                username: activity1.username,  
                profile_picture: activity1.profile_picture
              })
          })
        }}/>
        <span>{totalLikes} Likes</span>
      </div>
    </div>  
  );
};

export default Activity;