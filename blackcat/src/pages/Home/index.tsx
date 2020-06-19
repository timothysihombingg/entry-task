import React, { useState } from 'react';
import { IActivity } from '../../types/activity.types';
import PageLayout from '../../containers/PageLayout';
import ListActivity from '../../components/Activity/Activity';
import Header from '../../components/Bar/Bar'

type Props = {
  activities: IActivity[];
}

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
  participants: [],
  comments: [],
  going: [],
  likes: []
}

const Home: React.FunctionComponent<Props> = ({
  activities
}: Props) => {
  return (
    <PageLayout>
      <Header />
      <ListActivity activity1={activity1}/>
      <hr />
      <ListActivity activity1={activity1}/>
      <hr />
      <ListActivity activity1={activity1}/>
      <hr />
      <ListActivity activity1={activity1}/>
      <hr />
      <ListActivity activity1={activity1}/>
      <hr />
      <ListActivity activity1={activity1}/>
      <hr />
      <ListActivity activity1={activity1}/>
      <hr />
    </PageLayout>
  );
};

export default Home;