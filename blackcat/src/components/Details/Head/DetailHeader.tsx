import React from 'react';
import style from './detailheader.module.scss';
import classname from 'classnames/bind';
import { IActivity } from '../../../types/activity.types';
import { ReactComponent as Info } from '../../../assets/svgs/info-outline.svg';
import { ReactComponent as Comment } from '../../../assets/svgs/comment-outline.svg';
import { ReactComponent as People } from '../../../assets/svgs/people-outline.svg';

const cx = classname.bind(style);

interface Props {
  activity1: IActivity;
}

const DetailHeader: React.FunctionComponent<Props> = ({
  activity1
}) => {
  return (
    <div className={cx('details-header')}>
      <span>{activity1.channel_name}</span>
      <h2>{activity1.title}</h2>
      <div className={cx('user-pp-container')}>
        <img src={activity1.profile_picture} className={cx('user-img')}/>
        <div>
          <h5>{activity1.username}</h5>
          <p>Published 2 days ago</p>
        </div>
      </div>
      <hr />
      <div className={cx('details-bar')}>
        <div className={cx('bar-btn')}>
          <Info className={cx('bar-img')}/>
          <button>Details</button>
        </div>
        <div className={cx('bar-btn')}>
          <Comment className={cx('bar-img')}/>
          <button>Comments</button>
        </div>
        <div className={cx('bar-btn')}>
          <People className={cx('bar-img')}/>
          <button>Participants</button>
        </div>
    </div>
    <hr/>
    <p>
      {activity1.description}
    </p>
    <hr />
    </div>
  );
};

export default DetailHeader;