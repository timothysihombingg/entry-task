import React from 'react';
import classname from 'classnames/bind';
import styles from './detail.module.scss';
import { IActivity } from '../../types/activity.types';
import PageLayout from '../../containers/PageLayout';
import Bar from '../../components/Bar/Bar';
import Header from '../../components/Details/Head/DetailHeader';
import TimePlace from '../../components/Details/TimePlace/TimePlace';
import Participants from '../../components/Details/Participants/Participants';

const cx = classname.bind(styles)

const activity1: IActivity = {
  id: 1,
  profile_picture: 'haha',
  username: 'Username',
  channel_name: 'Channel Name',
  title: 'Activity Title Name Make it Longer May Longer than One Line',
  description: '[No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi potenti...',
  start_date: '1 January 2020',
  end_date: '1 January 2020',
  start_time: '14:00',
  end_time: '16:30',
  location: 'Camp Nou',
  address: 'Barcelona, Spain',
  participants: [{
    id: 1,
    username: 'Username',
    email: 'email@shopee.com',
    password: 'password',
    profile_picture: 'https://i.pravatar.cc/300?1292',
    likes: [],
    going: [],
  }],
  comments: [],
  going: [],
  likes: []
}

const Detail: React.FunctionComponent<{}> = () => {
  return (
    <PageLayout>
      <Bar />
      <Header activity1={activity1} />
      <TimePlace activity1={activity1} />
      <Participants activity1={activity1} />
    </PageLayout>
  );
};

export default Detail;