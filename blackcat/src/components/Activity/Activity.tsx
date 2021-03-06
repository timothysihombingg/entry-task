import React from 'react';
import classnames from 'classnames/bind';
import styles from './activity.module.scss';
import { IActivity } from '../../types/activity.types';
import { ReactComponent as Time } from '../../assets/svgs/time.svg';
import { ReactComponent as Check } from '../../assets/svgs/check-outline.svg';
import { ReactComponent as Like } from '../../assets/svgs/like-outline.svg';
import { ReactComponent as CheckFilled } from '../../assets/svgs/check.svg';
import { ReactComponent as LikeFilled } from '../../assets/svgs/like.svg';
import { useHistory } from 'react-router-dom';
import { getUserStorage } from '../../data/storage';

const cx = classnames.bind(styles);

interface Props {
  activity: IActivity;
  isLiked?: boolean;
  isParticipated?: boolean;
  likePost: Function;
  participatePost: Function;
}

const Activity: React.FunctionComponent<Props> = ({
  activity,
  isLiked = false,
  isParticipated = false,
  likePost,
  participatePost
}) => {
  const totalParticipants = isParticipated ? activity.participants.length + 1 : activity.participants.length;
  const totalLikes = isLiked ? activity.likes.length + 1 : activity.likes.length;

  const participateText = isParticipated ? 'I am going' : 'Going';
  const likeText = isLiked ? 'I like it' : 'Likes';

  const participateComponent = isParticipated ? (
    <CheckFilled className={cx('activity-icon')} />    
  ) : (
    <Check className={cx('activity-icon')} />
  );

  const likeComponent = isLiked ? (
    <LikeFilled className={cx('activity-icon')} />    
  ) : (
    <Like className={cx('activity-icon')} />
  );

  const history = useHistory()

  return (
    <div className={cx('activity')}>
      <header>
        <div>
          <img src={activity.profile_picture} className={cx('activity-pp')}/>
          <p>{activity.username}</p>
        </div>
        <span>{activity.channel_name}</span>
      </header>
      <h2 onClick={() => {
        history.push('/activity/'+activity.id)
      }}>{activity.title}</h2>
      <div className={cx('activity-date')}>
        <Time className={cx('activity-icon')}/>
        <span>{activity.start_date} {activity.start_time} - {activity.end_date} {activity.end_time}</span>
      </div>
      <p>{activity.description}</p>
      <div className={cx('check-like-container')}>
        <div onClick={() => {
            participatePost(activity.id)
          }}>
          {participateComponent}
          <span>{totalParticipants} {participateText}</span>
        </div>
        <div onClick={() => likePost(activity.id)}>
          {likeComponent}
          <span>{totalLikes} {likeText}</span>
        </div>
      </div>
    </div>  
  );
};

export default Activity;