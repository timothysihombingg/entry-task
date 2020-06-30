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
    <Check className={cx('activity-icon')} />
  ) : (
    <CheckFilled className={cx('activity-icon')} />
  );

  const likeComponent = isLiked ? (
    <Like className={cx('activity-icon')} />
  ) : (
    <LikeFilled className={cx('activity-icon')} />
  );

  const history = useHistory()

  return (
    <div className={cx('activity')}>
      <header>
        <div>
          <img src={activity.profile_picture} className={cx('activity-pp')}/>
          <p onClick={() => {
            history.push('/activity/'+activity.id)
          }}>{activity.username}</p>
        </div>
        <span>{activity.channel_name}</span>
      </header>
      <h2>{activity.title}</h2>
      <div className={cx('activity-date')}>
        <Time className={cx('activity-icon')}/>
        <span>{activity.start_date} {activity.start_time} - {activity.end_date} {activity.end_time}</span>
      </div>
      <p>{activity.description}</p>
      <div className={cx('check-like-container')}>
        {participateComponent}
        <span onClick={participatePost(activity.id)}>{totalParticipants} {participateText}</span>
        {likeComponent}
        <span onClick={likePost(activity.id)}>{totalLikes} {likeText}</span>
      </div>
    </div>  
  );
};

export default Activity;