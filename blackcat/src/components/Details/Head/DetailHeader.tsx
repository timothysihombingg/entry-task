import React from 'react';
import style from './detailheader.module.scss';
import classname from 'classnames/bind';
import { IActivity } from '../../../types/activity.types';
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
    </div>
  );
};

export default DetailHeader;