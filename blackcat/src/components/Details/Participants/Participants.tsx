import React from 'react';
import style from './participants.module.scss';
import classname from 'classnames/bind';
import { IActivity } from '../../../types/activity.types';
import { ReactComponent as Check } from '../../../assets/svgs/check-outline.svg';
import { ReactComponent as Like } from '../../../assets/svgs/like-outline.svg';


const cx = classname.bind(style);

interface Props {
  activity1: IActivity;
}

const Participants: React.FunctionComponent<Props> = ({
  activity1
}) => {
  var participantsArr;
  if (activity1.participants.length <=  8) {
    participantsArr = activity1.participants;
  } else {
    participantsArr = activity1.participants.slice(0,8);
  }

  var likesArr;
  if (activity1.likes.length <=  8) {
    likesArr = activity1.likes;
  } else {
    likesArr = activity1.likes.slice(0,8);
  }

  return (
    <div className={cx('participants-comp')}>
      <div className={cx('participants-container')}>
        <Check className={cx('participants-icon')}/>
        <span>{activity1.participants.length} Going</span>
        {participantsArr.map((participant) =>
          <img src={participant.profile_picture} />)}
      </div>
      <hr />
      <div className={cx('participants-container')}>
        <Like className={cx('participants-icon')}/>
        <span>{activity1.likes.length} Likes</span>
        {likesArr.map((like) =>
          <img src={like.profile_picture} />
        )}
      </div>
      <br/> <hr />
    </div>
  );
};

export default Participants;