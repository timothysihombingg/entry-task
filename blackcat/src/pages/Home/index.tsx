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
  username: 'Johan Cruyff',
  channel_name: 'Total Football',
  title: 'El Clasico',
  description: 'Big match FC Barcelona vs Real Madrird',
  start_date: '1-1-2020',
  end_date: '1-1-2020',
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
    </PageLayout>
  );
};

export default Home;