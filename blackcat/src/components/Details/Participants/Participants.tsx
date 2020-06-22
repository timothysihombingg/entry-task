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
  return (
    <div className={cx('participants-comp')}>
      <div className={cx('participants-container')}>
        <Check className={cx('participants-icon')}/>
        <span>{activity1.participants.length} Going</span>
        <img src={activity1.participants[0].profile_picture} />
        <img src={activity1.participants[0].profile_picture} />
        <img src={activity1.participants[0].profile_picture} />
      </div>
      <hr />
      <div className={cx('participants-container')}>
        <Like className={cx('participants-icon')}/>
        <span>{activity1.likes.length} Likes</span>
        <img src={activity1.participants[0].profile_picture} />
        <img src={activity1.participants[0].profile_picture} />
        <img src={activity1.participants[0].profile_picture} />
      </div>
      <br/> <hr />
    </div>
  );
};

export default Participants;